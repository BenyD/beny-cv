import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import { RESUME_DATA } from "@/data/resume-data";

const SplashScreen = ({
  onFinish,
  duration,
}: {
  onFinish: () => void;
  duration: number;
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Start exit animation before the end
    const exitStartTimer = setTimeout(() => {
      setIsExiting(true);
    }, duration - 600);

    // Hide the splash screen
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
    }, duration - 200);

    // Call onFinish at the end
    const finishTimer = setTimeout(onFinish, duration);

    return () => {
      clearTimeout(exitStartTimer);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish, duration]);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const bgColor = currentTheme === "dark" ? "bg-neutral-900" : "bg-white";
  const textColor = currentTheme === "dark" ? "text-white" : "text-black";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed inset-0 z-50 flex items-center justify-center ${bgColor}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="relative flex flex-col items-center justify-center"
            animate={
              isExiting ? { scale: 1.05, opacity: 0 } : { scale: 1, opacity: 1 }
            }
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex flex-col items-center gap-8">
              {/* Avatar with fade-in animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2,
                }}
              >
                <Avatar className="size-24 md:size-32">
                  <Image
                    alt={RESUME_DATA.name}
                    src="/avatar.jpg"
                    width={128}
                    height={128}
                    className="rounded-full"
                  />
                </Avatar>
              </motion.div>

              {/* Professional welcome text */}
              <div className="flex flex-col items-center">
                <motion.div
                  className={`${textColor} text-center text-4xl font-bold md:text-5xl`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.3,
                  }}
                >
                  Welcome
                </motion.div>

                {/* Animated underline */}
                <motion.div
                  className={`mt-2 h-0.5 ${textColor} rounded-full opacity-60`}
                  initial={{ width: 0 }}
                  animate={{ width: "120px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* Full name with subtle fade in */}
                <motion.div
                  className={`mt-4 font-mono text-base ${
                    currentTheme === "dark"
                      ? "text-neutral-200"
                      : "text-neutral-700"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6,
                  }}
                >
                  {RESUME_DATA.name}
                </motion.div>
              </div>

              {/* Loading indicator */}
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "140px" }}
                transition={{
                  duration: 0.4,
                  delay: 0.7,
                }}
                className="relative mt-6 h-0.5 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700"
              >
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-full bg-neutral-800 dark:bg-neutral-300"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: (duration / 1000) * 0.65,
                    delay: 0.8,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
