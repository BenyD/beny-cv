import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "hello",
  "வணக்கம்",
  "Bonjour",
  "Hola",
  "こんにちは",
  "नमस्ते",
];

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const totalDuration = 6000;
    const intervalDuration = totalDuration / greetings.length;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === greetings.length - 1) {
          clearInterval(interval);
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, intervalDuration);

    const exitTimer = setTimeout(
      () => setIsVisible(false),
      totalDuration - 300,
    );
    const finishTimer = setTimeout(onFinish, totalDuration);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-neutral-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.h1
            className="font-pacifico text-6xl font-bold text-foreground"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {greetings[currentIndex].split("").map((char, index) => (
              <motion.span key={`${char}-${index}`} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
