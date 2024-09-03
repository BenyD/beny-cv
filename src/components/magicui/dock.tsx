"use client";

import React, { PropsWithChildren, useRef, useEffect, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
  useTransform as transform,
  clamp,
} from "framer-motion";
import { HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
  distance?: number;
  direction?: "top" | "middle" | "bottom";
  children: React.ReactNode;
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  "mx-auto w-max mt-8 h-[58px] p-2 flex gap-2 rounded-2xl border bg-neutral-100 border-neutral-300 text-neutral-900 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-100",
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      direction = "bottom",
      ...props
    },
    ref,
  ) => {
    const mousex = useMotionValue(Infinity);

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement<DockItemProps>(child)) {
          return React.cloneElement(child, {
            magnification,
            distance,
            direction,
            mousex,
          });
        }
        return child;
      });
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mousex.set(e.pageX)}
        onMouseLeave={() => mousex.set(Infinity)}
        className={cn(dockVariants(), className, {
          "items-start": direction === "top",
          "items-center": direction === "middle",
          "items-end": direction === "bottom",
        })}
        {...props}
      >
        {renderChildren()}
      </motion.div>
    );
  },
);

Dock.displayName = "Dock";

export interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  mousex: MotionValue<number>;
  className?: string;
  children?: React.ReactNode;
}

const DockIcon = React.forwardRef<HTMLDivElement, DockIconProps>(
  (
    {
      size,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      mousex,
      className,
      children,
      ...props
    },
    forwardedRef,
  ) => {
    const localRef = useRef<HTMLDivElement>(null);
    const ref = (forwardedRef as React.RefObject<HTMLDivElement>) || localRef;

    const [bounds, setBounds] = useState({ x: 0, width: 0 });

    useEffect(() => {
      if (ref.current) {
        const updateBounds = () => {
          const rect = ref.current?.getBoundingClientRect();
          if (rect) {
            setBounds({ x: rect.x, width: rect.width });
          }
        };

        updateBounds();
        window.addEventListener("resize", updateBounds);
        return () => window.removeEventListener("resize", updateBounds);
      }
    }, [ref]);

    const distanceCalc = useTransform(mousex, (val: number) => {
      return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(
      distanceCalc,
      [-distance, 0, distance],
      [40, magnification, 40],
    );

    const width = useSpring(widthSync, {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    });

    return (
      <motion.div
        ref={ref}
        style={{ width }}
        className={cn(
          "flex aspect-square cursor-pointer items-center justify-center rounded-full",
          className,
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

DockIcon.displayName = "DockIcon";

interface DockItemProps extends Omit<HTMLMotionProps<"div">, "children"> {
  direction?: "top" | "middle" | "bottom";
  mousex: MotionValue<number>;
  magnification?: number;
  distance?: number;
  children?: React.ReactNode;
}

const DockItem = React.forwardRef<HTMLDivElement, DockItemProps>(
  (
    {
      className,
      mousex,
      magnification = 1,
      distance = 0,
      direction = "bottom",
      children,
      ...props
    },
    ref,
  ) => {
    const [sizeRef, { width }] = useElementSize();

    const position = useMotionValue(0);
    const scale = useTransform(position, [-1, 0, 1], [1, magnification, 1]);
    const scaleTransform = useTransform(
      mousex,
      [-distance, 0, distance],
      [-1, 0, 1],
    );

    useEffect(() => {
      const unsubscribeX = mousex.on("change", (latestX: number) => {
        const bounds = width / 2;
        const distanceValue = latestX - bounds;
        const clamped = clamp(distanceValue, -distance, distance);
        position.set(scaleTransform.get());
      });

      return () => {
        unsubscribeX();
      };
    }, [mousex, width, distance, position, scaleTransform]);

    return (
      <motion.div
        ref={ref}
        style={{
          scale,
          transformOrigin: direction === "top" ? "top" : "bottom",
        }}
        className={cn("relative flex items-center justify-center", className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

DockItem.displayName = "DockItem";

const useElementSize = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (ref.current) {
        setSize({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return [ref, size] as const;
};

export { Dock, DockIcon, DockItem, dockVariants };
