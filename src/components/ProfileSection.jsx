import React from 'react';
import { useApp } from '../context/AppContext';

const ProfileSection = () => {
  const { currentData } = useApp();
  const { profileSection } = currentData;

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-20 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white">
          {profileSection.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Sol Taraf - Temel Bilgiler */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-pink-500">
              {profileSection.basicInfo.title}
            </h3>
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 dark:text-gray-300">
              {profileSection.basicInfo.items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-300 dark:border-gray-600 pb-2 gap-1 sm:gap-0"
                >
                  <span className="font-semibold">{item.label}</span>
                  <span className="text-gray-600 dark:text-gray-400">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ Taraf - Hakkımda */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              {profileSection.aboutMe.title}
            </h3>
            {profileSection.aboutMe.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed"
              >
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