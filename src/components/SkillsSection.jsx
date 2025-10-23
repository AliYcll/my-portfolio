import React from 'react';
import { useApp } from '../context/AppContext';

const SkillsSection = () => {
  const { currentData } = useApp();
  const { skillsSection } = currentData;

  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-20 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white">
          {skillsSection.title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
          {skillsSection.skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 md:gap-4 p-4 md:p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 md:w-20 md:h-20" />
              <p className="text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-200 text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;