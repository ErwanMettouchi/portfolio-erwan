import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  useEffect(() => {
    document.title = 'Portfolio de Erwan Mettouchi';
  }, []);

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
      <meta property="og:description" content="Portfolio de Erwan Mettouchi, développeur web junior passioné. Découvrez mes projets, compétences et expériences en développement front-end et back-end" />
      <meta property="og:image" content="/images/portfolio.jpg" />
      <Header />
      <Main />
    </>
  );
};

export default App;
