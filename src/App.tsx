import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import useTheme from './hooks/useTheme';

const App = () => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    document.title = 'Portfolio de Erwan Mettouchi';
  }, []);

  useEffect(() => {
    // Supprimer les classes précédentes pour éviter les conflits
    document.body.classList.remove('bg-[#ffffff]', 'bg-[#020817]');

    // Ajouter la classe correspondant au thème
    document.body.classList.add(isDarkMode ? 'bg-[#020817]' : 'bg-[#ffffff]');

    // Toujours s'assurer que overflow-x-hidden est présent
    document.body.classList.add('overflow-x-hidden');
  }, [isDarkMode]);

  return (
    <>
      <meta
        name="keywords"
        content="Portfolio, Erwan Mettouchi, Développeur Web Junior, FullStack"
      />
      <meta
        name="description"
        content="Portfolio de Erwan Mettouchi, développeur web junior passioné. Découvrez mes projets, compétences et expériences en développement front-end et back-end"
      />
      <meta name="author" content="Erwan Mettouchi" />
      <meta property="og:title" content="Portfolio de Erwan Mettouchi" />
      <meta
        property="og:description"
        content="Portfolio de Erwan Mettouchi, développeur web junior passioné. Découvrez mes projets, compétences et expériences en développement front-end et back-end"
      />
      <meta property="og:image" content="/images/portfolio.jpg" />
      <Header />
      <Main />
    </>
  );
};

export default App;
