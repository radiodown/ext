import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';

export type Theme = 'classic' | 'sleek' | 'studio';

const VALID_THEMES: Theme[] = ['classic', 'sleek', 'studio'];

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = 'joeun-theme';

function readInitial(): Theme {
  if (typeof window === 'undefined') return 'classic';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return (VALID_THEMES as string[]).includes(stored ?? '') ? (stored as Theme) : 'classic';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(readInitial);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }, []);

  useEffect(() => {
    const link = document.getElementById('joeun-theme-css') as HTMLLinkElement | null;
    const base = import.meta.env.BASE_URL;
    const href = `${base}themes/${theme}.css`;
    if (link) {
      if (link.href !== new URL(href, location.href).href) {
        link.href = href;
      }
    } else {
      const created = document.createElement('link');
      created.id = 'joeun-theme-css';
      created.rel = 'stylesheet';
      created.href = href;
      document.head.appendChild(created);
    }
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
