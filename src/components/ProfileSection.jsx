import React from "react";
import { useApp } from "../context/AppContext";

const ProfileSection = () => {
  const { currentData } = useApp();
  const { profileSection } = currentData;

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-20 max-w-7xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-gray-900 dark:text-white">
          {profileSection.title}
        </h2>

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
      </div>
    </section>
  );
};

export default ProfileSection;
