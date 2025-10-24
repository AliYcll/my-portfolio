import React from "react";
import { useApp } from "../hooks/useApp";

const ProfileSection = () => {
  const { currentData } = useApp();
  const { profileSection } = currentData;

  return (
    <section id="profile" className="w-full py-12 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">{profileSection.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-[#3730A3] mb-6">{profileSection.basicInfo.title}</h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              {profileSection.basicInfo.items.map((item, index) => (
                <div key={index} className="grid grid-cols-[160px_1fr] gap-2">
                  <p className="font-semibold">{item.label}</p>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#3730A3] mb-6">{profileSection.aboutMe.title}</h3>
            {profileSection.aboutMe.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
