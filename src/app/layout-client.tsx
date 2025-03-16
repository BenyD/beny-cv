"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import dynamic from "next/dynamic";
import SplashScreen from "@/components/SplashScreen";

const DynamicContent = dynamic(
  () =>
    Promise.resolve(({ children }: { children: React.ReactNode }) => (
      <>
        <div className="pb-10">{children}</div>
        <Navbar />
      </>
    )),
  { ssr: false },
);

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [splashDuration] = useState(8000); // Set fixed duration to 8 seconds for all languages and animations

  useEffect(() => {
    console.log("Splash screen should be visible:", isLoading);
    // Ensure the splash screen shows for exactly 8 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, splashDuration);

    return () => clearTimeout(timer);
  }, [splashDuration, isLoading]); // Include isLoading in the dependency array

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider delayDuration={0}>
        {isLoading ? (
          <SplashScreen
            onFinish={() => setIsLoading(false)}
            duration={splashDuration}
          />
        ) : (
          <DynamicContent>{children}</DynamicContent>
        )}
      </TooltipProvider>
    </ThemeProvider>
  );
}
