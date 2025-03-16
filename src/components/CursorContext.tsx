"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type CursorContextType = {
  showCustomCursor: boolean;
  toggleCustomCursor: () => void;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [showCustomCursor, setShowCustomCursor] = useState(true);

  useEffect(() => {
    // Load cursor preference from localStorage on mount
    const savedCursorPref = localStorage.getItem("customCursor");
    if (savedCursorPref !== null) {
      setShowCustomCursor(savedCursorPref === "true");
    }
  }, []);

  const toggleCustomCursor = () => {
    const newValue = !showCustomCursor;
    setShowCustomCursor(newValue);
    localStorage.setItem("customCursor", String(newValue));
  };

  return (
    <CursorContext.Provider value={{ showCustomCursor, toggleCustomCursor }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
}
