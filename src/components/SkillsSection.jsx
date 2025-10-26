import React from "react";
import { useApp } from "../hooks/useApp";

const SkillsSection = () => {
  const { currentData } = useApp();
  const { skillsSection } = currentData;

  return (
    <section id="skills" className="w-full pb-20 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-[#aebccf] my-12">{skillsSection.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsSection.skills.map((skill, index) => (
            <div key={index} className="p-2 rounded-md transition-all duration-300 hover:bg-gray-50 hover:dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-[#3730A3] dark:text-[#b7aaff] mb-1">{skill.name}</h3>
              <p className="text-sm text-gray-700 dark:text-[#e3e3ff] leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;