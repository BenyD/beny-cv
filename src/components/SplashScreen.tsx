import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

// Selected languages in order: English, French, Japanese, Korean
const greetings = [
  { text: "Hello", lang: "English" },
  { text: "Bonjour", lang: "French" },
  { text: "こんにちは", lang: "Japanese" },
  { text: "안녕하세요", lang: "Korean" },
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
  const [isExiting, setIsExiting] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Each greeting gets equal time, with a minimum of 1200ms
    const wordDuration = Math.max(
      1200,
      Math.floor((duration * 0.8) / greetings.length),
    );

    // Interval for changing greetings
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // If we're at the last greeting, don't increment
        if (prevIndex === greetings.length - 1) {
          clearInterval(interval);
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, wordDuration);

    // Start exit animation before the end
    const exitStartTimer = setTimeout(() => {
      setIsExiting(true);
    }, duration - 1000);

    // Hide the splash screen
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
    }, duration - 300);

    // Call onFinish at the end
    const finishTimer = setTimeout(onFinish, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(exitStartTimer);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish, duration]);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const bgColor = currentTheme === "light" ? "bg-white" : "bg-black";
  const textColor = currentTheme === "light" ? "text-black" : "text-white";
  const subtitleColor =
    currentTheme === "light" ? "text-neutral-500" : "text-neutral-400";

  // Current greeting
  const currentGreeting = greetings[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed inset-0 z-50 flex items-center justify-center ${bgColor}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative flex flex-col items-center justify-center"
            animate={
              isExiting ? { scale: 1.2, opacity: 0 } : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Main greeting text with Apple-style animation */}
                <div className="overflow-hidden">
                  {currentGreeting.text.split("").map((char, index) => (
                    <motion.span
                      key={`${char}-${index}`}
                      className={`inline-block ${textColor} text-7xl font-light tracking-tight`}
                      style={{
                        fontFamily: "var(--font-sans), system-ui, sans-serif",
                      }}
                      initial={{
                        y: 50,
                        opacity: 0,
                        filter: "blur(4px)",
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.03,
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </div>

                {/* Language label with subtle animation */}
                <motion.p
                  className={`mt-3 text-sm font-medium uppercase tracking-widest ${subtitleColor}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + currentGreeting.text.length * 0.03,
                  }}
                >
                  {currentGreeting.lang}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* Apple-style progress dots */}
            <motion.div
              className="mt-12 flex space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {greetings.map((_, i) => (
                <motion.div
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full ${
                    i === currentIndex
                      ? textColor
                      : subtitleColor + " opacity-40"
                  }`}
                  animate={{
                    scale: i === currentIndex ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
