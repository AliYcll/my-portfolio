import React from 'react';
import { useApp } from '../context/AppContext';

const SkillsSection = () => {
  const { currentData } = useApp();
  const { skillsSection } = currentData;

  // Sadece ilk 3 skill'i göster
  const topSkills = skillsSection.skills.slice(0, 3);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-20 max-w-7xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-gray-900 dark:text-white">
          {skillsSection.title}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {topSkills.map((skill, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl">
                <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                  {skill.name === 'JAVASCRIPT' && 'Java Script'}
                  {skill.name === 'REACT' && 'React.Js'}
                  {skill.name === 'REDUX' && 'Node.Js'}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;