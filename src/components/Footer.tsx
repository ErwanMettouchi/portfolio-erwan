import { Link } from 'react-router';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer
      className={`p-7 mt-15 flex flex-col shadow-[0_-8px_15px_-3px_rgba(0,0,0,0.3)] ${isDarkMode ? 'text-white' : 'text-black'}`}
    >
      <p className="text-center text-md">
        © Copyright 2025 - <span className="font-bold">Erwan Mettouchi</span> -
        Tous droits réservés.
      </p>
      <Link to="/legal" className="text-center mt-6 font-bold">
        Mentions légales & Confidentialité
      </Link>
    </footer>
  );
};
export default Footer;
