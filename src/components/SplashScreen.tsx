import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const greetings = [
  "hello",
  "வணக்கம்",
  "Bonjour",
  "Hola",
  "こんにちは",
  "नमस्ते",
];

const SplashScreen = ({
  onFinish,
  duration,
}: {
  onFinish: () => void;
  duration: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    console.log("SplashScreen mounted");
    const wordDuration = duration / greetings.length;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, wordDuration);

    const exitTimer = setTimeout(() => setIsVisible(false), duration - 300);
    const finishTimer = setTimeout(onFinish, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish, duration]);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const bgColor = currentTheme === "light" ? "bg-neutral-50" : "bg-neutral-950";
  const textColor = currentTheme === "light" ? "text-black" : "text-white";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed inset-0 z-50 flex items-center justify-center ${bgColor}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentIndex}
              className={`splash-screen-text text-6xl font-normal ${textColor}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {greetings[currentIndex]}
            </motion.h1>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
