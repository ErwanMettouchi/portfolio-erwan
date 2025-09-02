import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { useTheme } from '../utils/ThemeContext';
import NavHeader from './NavHeader';

const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    console.log(isDarkMode);
  }, [isDarkMode]);

  return (
    <header
      className={`fixed top-0 left-0 w-full font-bold text-md min-h-[60px] z-50 ${isDarkMode ? 'text-[#ffedcf]' : 'text-[#020817]'}`}
    >
      <div
        className={`flex flex-col sm:flex-row justify-around items-center ${isDarkMode ? 'bg-[linear-gradient(to_right,#081e44,#15202B)]' : 'bg-[linear-gradient(to_right,#ffffff,#ffedcf)]'} shadow-md p-1  relative`}
      >
        <Link to="/">
          <img
            className="h-15 w-15 hover:scale-110 transition-all duration-200"
            src={'/images/logo.png'}
            alt="Vite logo"
          />
        </Link>

        <button
          type="button"
          className="md:hidden w-8 h-8 relative cursor-pointer"
          onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
        >
          <Menu
            className={`absolute top-0 left-0 w-8 h-8 transition-all duration-200
      ${isBurgerMenuOpen ? 'opacity-0 rotate-45 scale-75' : 'opacity-100 rotate-0 scale-100'}
    `}
          />
          <X
            className={`absolute top-0 left-0 w-8 h-8 transition-all duration-200
      ${isBurgerMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-75'}
    `}
          />
        </button>

        {/* Navigation desktop */}
        <NavHeader className="hidden md:flex flex-row gap-8 lg:gap-15" />
        <button
          type="button"
          onClick={toggleTheme}
          className={`cursor-pointer hidden md:flex items-center align-middle rounded p-2 bg-transparent ${isDarkMode ? 'hover:bg-[#020817]' : 'hover:bg-[#dad4c1]'} transition-all duration-200`}
        >
          {isDarkMode ? <Sun /> : <Moon />}
        </button>

        {/* Menu Mobile */}
        <div
          className={`md:hidden absolute left-0 top-full border-t-solid border-t border-b w-full ${isDarkMode ? 'bg-[linear-gradient(to_right,#081e44,#15202B)]' : 'bg-[linear-gradient(to_right,#ffffff,#ffedcf)]'} transition-all duration-300 ease-in-out overflow-hidden ${isBurgerMenuOpen ? 'opacity-100 max-h-100' : 'max-h-0 opacity-0'} `}
        >
          <NavHeader className="flex flex-col gap-8 items-center mt-5" />
          <div className="flex justify-center align-middle mt-5">
            <button
              onClick={toggleTheme}
              type="button"
              className={`cursor-pointer items-center align-middle rounded p-2 bg-transparent ${isDarkMode ? 'hover:bg-[#020817]' : 'hover:bg-[#dad4c1]'} transition-all duration-200`}
            >
              {isDarkMode ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
