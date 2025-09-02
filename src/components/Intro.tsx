import { ChevronDown, FileDown } from 'lucide-react';
import { useTheme } from '../utils/ThemeContext';
import SocialLinks from './SocialLinks';

const Intro = () => {
  const { isDarkMode } = useTheme();

  return (
    // biome-ignore lint/correctness/useUniqueElementIds: <explanation>
    <div
      className="flex flex-col justify-center mt-35 sm:mt-0 min-h-screen z-0"
      id="accueil"
    >
      <div className="flex flex-col gap-4 justify-start mx-auto  w-[40%] max-w-[90%] sm:mx-[20%]">
        <h1
          className={`font-bold ${isDarkMode ? 'text-[#ffedcf]' : 'text-[#081e44]'} text-4xl md:text-6xl`}
        >
          Erwan Mettouchi
        </h1>
        <h2
          className={`font-semibold text-2xl md:text-3xl ${isDarkMode ? 'text-[#e4e4e4]' : 'text-[#15202B]'}`}
        >
          Développeur Web Junior
        </h2>
        <p
          className={`text-lg md:text-xl text-justify ${isDarkMode ? 'text-[#fcf3e5]' : 'text-[#15202B]'}`}
        >
          Passionné par le développement web, je suis constamment à la recherche
          de nouveaux défis et d'opportunités pour apprendre et grandir en tant
          que développeur.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-12">
          <a
            href="#projets"
            className={`flex items-center justify-center text-md md:text-lg font-semibold ${isDarkMode ? 'text-[#262641ea] bg-[#ffedcf] hover:bg-[#fcd9a1] hover:text-[#383861ea]' : 'bg-[#262641ea] text-[#ffedcf] hover:text-[#fcd9a1] hover:bg-[#383861ea]'} py-2 px-4 rounded  transition-all duration-200`}
          >
            Mes Projets
          </a>
          <a
            href="#parcours"
            className={`flex flex-row items-center justify-center text-md md:text-lg font-semibold border-1 py-2 px-4 rounded bg-transparent ${isDarkMode ? 'text-[#ffedcf]  border-[#ffedcf]  hover:bg-[#1E293B] hover:border-[#1E293B]' : 'text-[#262641ea] border-[#262641ea] hover:bg-[#fdd082] hover:border-[#fdd082] '} transition-all duration-200`}
          >
            Mon parcours &nbsp;
            <ChevronDown color={`${isDarkMode ? '#ffedcf' : '#081e44'}`} />
          </a>
          <div className="flex flex-row flex-wrap justify-center items-center gap-5 md:gap-10">
            <SocialLinks />
            <a
              href="/CV_Erwan_Mettouchi.pdf"
              download
              className="p-2 hover:scale-110 transition-all duration-200"
            >
              <FileDown
                color={`${isDarkMode ? '#ffedcf' : '#081e44'}`}
                width={35}
                height={35}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Intro;
