import type React from 'react';

interface INavHeaderProps {
  className: string;
}

const NavHeader = ({ className }: INavHeaderProps) => {
  const links = ['Accueil', 'Profil', 'Projets', 'Contact'];

  const handleSmoothScroll = ({
    e,
    target,
  }: {
    e: React.MouseEvent<HTMLAnchorElement>;
    target: string;
  }) => {
    e.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <ul className={`${className}`}>
      {links.map((item) => (
        <li key={item}>
          <a
            className="relative hover:text-[#f5c542] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#fdde76] after:transition-all after:duration-300 hover:after:w-full"
            href={`#${item.toLowerCase()}`}
            onClick={(e) =>
              handleSmoothScroll({ e, target: item.toLowerCase() })
            }
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default NavHeader;
