import { useTheme } from '../utils/ThemeContext';

const SocialLinks = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex flex-row gap-10`}>
      <a
        href="https://www.linkedin.com/in/erwan-mettouchi/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-120 transition-transform duration-200"
      >
        <img
          className="h-8 w-8"
          src={
            isDarkMode
              ? `/images/linkedin-light.svg`
              : `/images/linkedin-dark.svg`
          }
          alt="Linkedin de Erwan Mettouchi"
        />
      </a>
      <a
        href="https://github.com/ErwanMettouchi"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-120 transition-transform duration-200"
      >
        <img
          className="h-8 w-8"
          src={
            isDarkMode ? `/images/github-light.svg` : `/images/github-dark.svg`
          }
          alt="Github de Erwan Mettouchi"
        />
      </a>
    </div>
  );
};

export default SocialLinks;
