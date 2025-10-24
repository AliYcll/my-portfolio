import React from "react";
import { useApp } from "../hooks/useApp";
import Section from "./common/Section";
import SectionTitle from "./common/SectionTitle";

const ProfileSection = () => {
  const { currentData } = useApp();
  const { profileSection } = currentData;

  return (
    <Section className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <SectionTitle>{profileSection.title}</SectionTitle>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Sol Taraf - Basic Information */}
        <div>
          <h3 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-8">
            {profileSection.basicInfo.title}
          </h3>
          <div className="space-y-4">
            {profileSection.basicInfo.items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700"
              >
                <span className="font-semibold text-gray-900 dark:text-white">
                  {item.label}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sağ Taraf - About Me */}
        <div>
          <h3 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-8">
            {profileSection.aboutMe.title}
          </h3>
          <div className="space-y-4">
            {profileSection.aboutMe.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProfileSection;
