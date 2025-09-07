import { useTheme } from '../contexts/ThemeContext';

const Profile = () => {
  const { isDarkMode } = useTheme();

  const technologies = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Tailwind CSS',
    'Node.js',
    'ExpressJs',
    'Sequelize',
    'SQL',
    'PostgreSQL',
  ];
  return (
    // biome-ignore lint/correctness/useUniqueElementIds: <explanation>
    <section
      className="mt-20 sm:mt-1 min-w-[60%] max-w-[60%] mx-auto"
      id="profil"
    >
      <h2
        className={`text-5xl font-bold ${isDarkMode ? 'text-[#ffedcf]' : 'text-[#0a1738]'}`}
      >
        À propos de moi
      </h2>
      <div
        className={`flex flex-col gap-20 xl:flex-row sm:items-center sm:justify-center mx-auto mt-16 ${isDarkMode ? 'text-[#ffffff]' : 'text-[#020817]'}`}
      >
        <div className="text-lg font-semibold text-justify leading-7">
          <p>
            Bienvenue sur mon portfolio ! Je m'appelle Erwan Mettouchi,
            développeur web junior passionné.
          </p>
          <br />
          <p>
            J'ai auparavant travaillé en tant que veilleur de nuit dans 2
            différents hôtels, ainsi que dans le secteur de la restauration et
            de l'éducation. Ces expériences m'ont permis de développer des
            compétences telles que l'organisation, l'écoute et la communication
            ainsi que des qualités relationnelles importantes.
          </p>
          <br />
          <p>
            De 2017 à 2020, j'ai suivi une formation de Game Design & Creative
            Coding dans une école à Paris. Cette formation m'a permis de faire
            mes premiers pas dans le domaine de la programmation. Ayant réalisé
            plusieurs projets en équipes durant ces 3 années, j'y ai alors
            acquis des compétences de travail en équipe.
          </p>
          <br />
          <p>
            En 2024, j'ai alors décidé de me reconvertir dans le développement
            web. J'ai suivi une formation intensive qui m'a permis d'acquérir de
            solides compétences en front-end et back-end. J'y ai appris à
            maîtriser des technologies telles que HTML, CSS, JavaScript, React,
            Node.js et bien d'autres.
          </p>
          <br />
          <br />
          <p className="mb-3">Voici certaines technologies que j'utilise :</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-normal text-center text-sm sm:text-base md:text-lg overflow-hidden">
            {technologies.map((tech) => (
              <div
                className={`p-1 rounded ${
                  isDarkMode
                    ? 'bg-white text-[#0a1738]'
                    : 'bg-[#030e2b] text-white'
                }`}
                key={tech}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center mx-auto md:mx-0 flex-shrink-0">
          <div
            className={`w-64 h-64 sm:w-100 sm:h-100 lg:w-100 lg:h-100 rounded-[50%] overflow-hidden shadow-lg border-3 border-solid ${isDarkMode ? 'border-[#ffedcf]' : 'border-[#0a1738]'}`}
          >
            <img
              src="/images/erwan.jpg"
              alt="Erwan Mettouchi - Développeur web Junior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
