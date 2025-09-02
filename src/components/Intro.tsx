const Intro = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center min-h-screen">
      <h1 className="text-center font-bold text-[#ffedcf] text-4xl md:text-6xl">
        Erwan Mettouchi
      </h1>
      <p className="text-center font-semibold text-2xl md:text-3xl text-[#e4e4e4]">
        Développeur Web Junior
      </p>
      <a
        href="#profil"
        className="bg-[rgb(38,38,65)] text-[#ffedcf] py-2 px-4 rounded-sm shadow-[4px_4px_2px_rgba(39,39,36,0.15)] hover:bg-[rgb(24,24,104)] hover:text-[#FFFFFF] hover:scale-105 hover:shadow-[8px_8px_4px_rgba(38,38,35,0.15)] transition-all ease-in-out duration-300 text-xl"
      >
        Qui suis-je?
      </a>
    </div>
  );
};
export default Intro;
