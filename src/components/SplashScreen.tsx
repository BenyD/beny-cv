import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
  'Hello',
  'வணக்கம்',
  'Bonjour',
  'Hola',
  'こんにちは',
  'नमस्ते', // Added Hindi greeting
];

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const totalDuration = 6000; // Increased to 6 seconds
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

    // Start exit animation after 5.7 seconds
    const exitTimer = setTimeout(() => setIsVisible(false), totalDuration - 300);

    // Ensure the splash screen ends after 6 seconds
    const finishTimer = setTimeout(onFinish, totalDuration);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-800 z-50"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <h1 className="text-white text-6xl font-thin font-sans">
                {greetings[currentIndex]}
              </h1>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;