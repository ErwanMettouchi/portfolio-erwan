import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import projectsData from '../data/projects.json';

const Projects = () => {
  const { isDarkMode } = useTheme();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const { projects } = projectsData;

  return (
    // biome-ignore lint/correctness/useUniqueElementIds: <explanation>
    <section
      className="mt-20 sm:mt-40 min-w-[60%] max-w-[60%] mx-auto"
      id="projets"
    >
      <h2
        className={`text-5xl font-bold ${isDarkMode ? 'text-[#ffedcf]' : 'text-[#0a1738]'}`}
      >
        Mes projets
      </h2>

      <div className="flex flex-col lg:grid lg:grid-cols-2 mt-20 gap-30">
        {projects.map((project) => {
          return (
            <article
              className="relative flex flex-col justify-between gap-5"
              key={project.name}
            >
              <a
                href={project.site_link}
                {...(project.site_link !== '/' && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
                rel="noopener"
                className="block relative group"
                onMouseEnter={() => setHoveredProject(project.name)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <img
                  src={project.image}
                  alt={`Capture d'écran du project ${project.name}`}
                  className={`w-full h-auto transition-all duration-200 rounded-2xl border-[#c2c1c0] border-3 ${
                    hoveredProject === project.name ? 'blur-sm' : ''
                  }`}
                />
                <ExternalLink
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white transition-opacity duration-200 ${
                    hoveredProject === project.name
                      ? 'opacity-100'
                      : 'opacity-0'
                  }`}
                  color="#0a1738"
                />
              </a>

              <div
                className={`border-b-1 ${isDarkMode ? 'text-white' : 'text-[#0a1738]'} p-2 mb-3`}
              >
                {' '}
                {project.description}
              </div>
              <div className="flex flex-row flex-wrap gap-3">
                {project.technologies.map((technologie: string) => {
                  return (
                    <div
                      key={technologie}
                      className={`${isDarkMode ? 'border-[rgba(255,237,207,0.5)]' : 'border-[rgba(10,23,56,0.5)]'} border-1 rounded-sm px-2 py-1`}
                    >
                      <span
                        className={`${isDarkMode ? 'text-[#ffedcf]' : 'text-black'} font-semibold`}
                      >
                        {technologie}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-row flex-wrap gap-5 sm:gap-10">
                <a href={project.github_link} target="_blank" rel="noopener">
                  <img
                    className="h-10 w-10 hover:scale-110 transition-scale duration-200"
                    src={
                      isDarkMode
                        ? `/images/github-light.svg`
                        : `/images/github-dark.svg`
                    }
                    alt={`Lien vers le github du projet ${project.name}`}
                  />
                </a>
                <a href={project.site_link} target="_blank" rel="noopener">
                  <img
                    className="h-10 w-10 hover:scale-110 transition-scale duration-200"
                    src={
                      isDarkMode
                        ? `/images/link-light.svg`
                        : `/images/link-dark.svg`
                    }
                    alt={`Lien vers le github du projet ${project.name}`}
                  />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
