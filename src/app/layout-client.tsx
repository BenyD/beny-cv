"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import dynamic from 'next/dynamic';
import SplashScreen from "@/components/SplashScreen";

const DynamicContent = dynamic(() => Promise.resolve(({ children }: { children: React.ReactNode }) => (
  <>
    <div className="pb-10">{children}</div>
    <Navbar />
  </>
)), { ssr: false });

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  const handleSplashScreenFinish = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider delayDuration={0}>
        {isLoading ? (
          <SplashScreen onFinish={handleSplashScreenFinish} />
        ) : (
          <DynamicContent>{children}</DynamicContent>
        )}
      </TooltipProvider>
    </ThemeProvider>
  );
}