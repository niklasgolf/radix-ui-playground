
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

const themes = {
  'classic-light': { appearance: 'light', accentColor: 'blue', grayColor: 'slate' },
  'warm-light': { appearance: 'light', accentColor: 'orange', grayColor: 'sand' },
  'modern-dark': { appearance: 'dark', accentColor: 'teal', grayColor: 'mauve' },
  'deep-dark': { appearance: 'dark', accentColor: 'purple', grayColor: 'gray' },
};

export function ThemeProvider({ children }) {
  const [currentThemeName, setCurrentThemeName] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedTheme') || 'classic-light';
    }
    return 'classic-light';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedTheme', currentThemeName);
    }
  }, [currentThemeName]);

  const currentTheme = themes[currentThemeName];

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentThemeName, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
