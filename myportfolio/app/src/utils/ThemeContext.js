'use client';
import React, { useState, createContext, useContext } from 'react';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [isNightMode, setIsNightMode] = useState(false);

  // Provide the value and setter to the context
  return (
    <ThemeContext.Provider value={{ isNightMode, setIsNightMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
