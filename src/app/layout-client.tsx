"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import dynamic from "next/dynamic";
import SplashScreen from "@/components/SplashScreen";
import { CommandMenu } from "@/components/CommandMenu";
import { CursorProvider } from "@/components/CursorContext";

const DynamicContent = dynamic(
  () =>
    Promise.resolve(({ children }: { children: React.ReactNode }) => (
      <>
        <div className="pb-10">{children}</div>
        <Navbar />
        <CommandMenu />
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
  const [splashDuration] = useState(3000); // Set fixed duration to 3 seconds

  useEffect(() => {
    // Check if the splash screen has been shown in this session
    const hasShownSplash = sessionStorage.getItem("hasShownSplash");

    if (hasShownSplash) {
      // Skip splash screen if already shown in this session
      setIsLoading(false);
      return;
    }

    console.log("Splash screen should be visible:", isLoading);
    // Ensure the splash screen shows for exactly 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Mark that we've shown the splash screen in this session
      sessionStorage.setItem("hasShownSplash", "true");
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
      <CursorProvider>
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
      </CursorProvider>
    </ThemeProvider>
  );
}
