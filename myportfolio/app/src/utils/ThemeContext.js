'use client';
import React, { useState, createContext, useContext } from 'react';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [isNightMode, setIsNightMode] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  const setSectionVisibility = (section, isVisible) => {
    setVisibleSections(prev => {
      // Update the state only if the section is currently not visible
      if (!prev[section] && isVisible) {
        return { ...prev, [section]: true };
      }
      return prev;
    });
  };

  const contextValue = {
    isNightMode,
    setIsNightMode,
    visibleSections,
    setSectionVisibility
  };

  // Provide the value and setter to the context
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
