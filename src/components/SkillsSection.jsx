import React from "react";
import { useApp } from "../hooks/useApp";
import Section from "./common/Section";
import SectionTitle from "./common/SectionTitle";
import Card from "./common/Card";

const SkillsSection = () => {
  const { currentData } = useApp();
  const { skillsSection } = currentData;

  // Sadece ilk 3 skill'i göster
  const topSkills = skillsSection.skills.slice(0, 3);

  return (
    <Section id="skills" className="bg-white dark:bg-gray-800 transition-colors duration-300">
      <SectionTitle>{skillsSection.title}</SectionTitle>

      <div className="grid md:grid-cols-3 gap-8">
        {topSkills.map((skill, index) => (
          <Card key={index} className="group">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                {skill.name === "JAVASCRIPT" && skillsSection.jsName}
                {skill.name === "REACT" && skillsSection.reactName}
                {skill.name === "REDUX" && skillsSection.nodeName}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {skillsSection.skillDescription}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;