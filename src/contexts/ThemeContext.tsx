// ThemeContext.tsx
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const storedValue = localStorage.getItem('isDarkMode');
      return storedValue ? JSON.parse(storedValue) : true;
    } catch (error) {
      console.error('Erreur lors de la lecture de localStorage:', error);
      return true;
    }
  });

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      'useTheme doit être utilisé à l’intérieur d’un ThemeProvider',
    );
  }
  return context;
};
