'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'blue' | 'green';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'blue',
  toggleTheme: () => {},
  mounted: false,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('blue');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get saved theme or default to blue
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'blue';
    setTheme(savedTheme);
    // Set initial theme immediately
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  useEffect(() => {
    if (mounted) {
      console.log('Setting theme to:', theme);
      localStorage.setItem('theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    console.log('Toggle theme clicked!');
    setTheme((prev) => {
      const newTheme = prev === 'blue' ? 'green' : 'blue';
      console.log('Changing theme from', prev, 'to', newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
