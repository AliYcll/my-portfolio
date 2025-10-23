import React from "react";
import { useApp } from "../context/AppContext";

const ProjectsSection = () => {
  const { currentData } = useApp();
  const { projectsSection } = currentData;

  // 3 proje göster
  const projects = [
    {
      id: 1,
      title: "Workintech",
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      tags: ["react", "redux", "axios"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
      links: {
        github: "https://github.com/AliYcll",
        live: "https://example.com",
      },
    },
    {
      id: 2,
      title: "Random Jokes",
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler.",
      tags: ["react", "redux", "vercel"],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
      links: {
        github: "https://github.com/AliYcll",
        live: "https://example.com",
      },
    },
    {
      id: 3,
      title: "Journey",
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package.",
      tags: ["react", "redux", "axios"],
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
      links: {
        github: "https://github.com/AliYcll",
        live: "https://example.com",
      },
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-20 max-w-7xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-gray-900 dark:text-white">
          {projectsSection.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Proje Görseli */}
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Proje Detayları */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Teknoloji Etiketleri */}
                <div className="flex flex-wrap gap-2 py-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Linkler */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 font-semibold hover:underline text-sm"
                  >
                    {projectsSection.githubLinkText}
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 font-semibold hover:underline text-sm flex items-center gap-1"
                  >
                    {projectsSection.viewSiteLinkText}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
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
