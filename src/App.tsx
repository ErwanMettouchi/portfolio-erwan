import { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Legal from './pages/Legal';
import ScrollToTop from './utils/ScrollToTop';

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
      <meta
        property="og:description"
        content="Portfolio de Erwan Mettouchi, développeur web junior passioné. Découvrez mes projets, compétences et expériences en développement front-end et back-end"
      />
      <meta property="og:image" content="/images/portfolio.jpg" />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="legal" element={<Legal />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
