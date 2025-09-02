interface ISocialLinksHeaderProps {
  className?: string;
}

const SocialLinksHeader = ({ className }: ISocialLinksHeaderProps) => {
  return (
    <div className={`flex-col md:flex-row gap-10 md:gap-5 ${className}`}>
      <a
        href="https://www.linkedin.com/in/erwan-mettouchi/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-120 transition-transform duration-200"
      >
        <img
          className="h-8 w-8"
          src="/images/linkedin.svg"
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
          src="/images/github.svg"
          alt="Github de Erwan Mettouchi"
        />
      </a>
    </div>
  );
};

export default SocialLinksHeader;
