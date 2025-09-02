import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import NavHeader from './NavHeader';
import SocialLinksHeader from './SocialLinksHeader';

const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full text-[#ffedcf] font-bold text-xl">
      <div className="flex flex-col sm:flex-row justify-around items-center mx-auto md:w-[90%] bg-[#262641ea] shadow-md p-2 md:rounded-b-xl relative">
        <Link to="/">
          <img
            className="h-20 w-20 hover:scale-110 transition-all duration-200"
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
        <SocialLinksHeader className="hidden md:flex flex-row gap-8 lg:gap-15" />

        {/* Menu Mobile */}
        <div
          className={`md:hidden absolute left-0 top-full border-t-solid border-t w-full bg-[#262641] transition-all duration-300 ease-in-out overflow-hidden ${isBurgerMenuOpen ? 'opacity-100 max-h-100' : 'max-h-0 opacity-0'} `}
        >
          <NavHeader className="flex flex-col gap-8 items-center mt-5" />
          <SocialLinksHeader className="flex flex-row gap-20 my-4 justify-center mt-6 pt-6 border-t border-dotted" />
        </div>
      </div>
    </header>
  );
};

export default Header;
