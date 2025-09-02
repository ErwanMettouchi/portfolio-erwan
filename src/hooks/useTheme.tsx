import { useEffect, useState } from 'react';

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const storedValue = localStorage.getItem('isDarkMode');
      return storedValue ? JSON.parse(storedValue) : true;
    } catch (error) {
      console.error('Erreur lors de la lecture de localStorage:', error);
      return true; // Valeur par défaut
    }
  });

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return { isDarkMode, toggleTheme };
};

export default useTheme;
