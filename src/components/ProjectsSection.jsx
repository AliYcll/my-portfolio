import React from 'react';
import { useApp } from '../context/AppContext';

const ProjectsSection = () => {
  const { currentData } = useApp();
  const { projectsSection } = currentData;

  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-20 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white">
          {projectsSection.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projectsSection.projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Proje Görseli */}
              <div className="h-48 md:h-64 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center p-6">
                <div className="bg-white/95 dark:bg-gray-800/95 p-6 md:p-8 rounded-xl shadow-lg max-w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white text-center break-words">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Proje Detayları */}
              <div className="p-6 md:p-8 space-y-4">
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Teknoloji Etiketleri */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-200 rounded-full text-xs md:text-sm font-medium hover:bg-pink-200 dark:hover:bg-pink-800 transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Proje Linkleri */}
                <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 font-semibold hover:text-pink-600 hover:underline transition-colors text-sm md:text-base"
                  >
                    View on Github
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 font-semibold hover:text-pink-600 hover:underline transition-colors flex items-center gap-1 text-sm md:text-base"
                  >
                    Go to app
                    <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;