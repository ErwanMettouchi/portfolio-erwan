import type React from 'react';
import { useLocation } from 'react-router';

interface INavHeaderProps {
  className: string;
}

const NavHeader = ({ className }: INavHeaderProps) => {
  const links = ['Accueil', 'Profil', 'Projets', 'Contact'];
  const location = useLocation();

  const handleSmoothScroll = ({
    e,
    target,
  }: {
    e: React.MouseEvent<HTMLButtonElement>;
    target: string;
  }) => {
    e.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      {location.pathname === '/' && (
        <ul className={`${className}`}>
          {links.map((item) => (
            <li key={item}>
              <button
                type="button"
                className="relative hover:text-[#f5c542] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#fdde76] after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
                onClick={(e) =>
                  handleSmoothScroll({ e, target: item.toLowerCase() })
                }
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default NavHeader;
