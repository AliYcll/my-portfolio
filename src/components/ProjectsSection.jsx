import React from "react";
import { useApp } from "../hooks/useApp";

const ProjectsSection = () => {
  const { currentData } = useApp();
  const { projectsSection } = currentData;

  return (
    <section id="projects" className="w-full py-20 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">{projectsSection.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsSection.projects.map((project, index) => (
            <div key={index} className="p-4 rounded-lg border border-transparent hover:border-[#3730A3]/30 hover:shadow-md transition-all duration-300">
              <img alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4" src={project.image} />
              <h3 className="text-xl font-semibold text-[#3730A3] dark:text-white mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-[#3730A3] text-xs font-medium border border-[#3730A3]/40 px-2.5 py-0.5 rounded-sm">{tag}</span>
                ))}
              </div>
              <div className="flex justify-between items-center text-sm font-medium">
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-[#3730A3] hover:underline">GitHub</a>
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-[#3730A3] hover:underline">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
