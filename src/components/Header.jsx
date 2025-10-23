import React from "react";
import { useApp } from "../context/AppContext";

const Header = () => {
  const { darkMode, toggleDarkMode, currentLanguage, toggleLanguage, currentData } =
    useApp();
  const { header } = currentData;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-20 max-w-7xl">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
              <span className="text-purple-600 dark:text-purple-300 text-xl font-bold">
                A
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
            >
              {header.skillsButton}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
            >
              {header.projectsButton}
            </button>
            <button
              onClick={() => scrollToSection("footer")}
              className="px-4 py-2 border-2 border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400 rounded-lg hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transition-all font-medium"
            >
              {header.hireMeButton}
            </button>
          </nav>

          {/* Theme & Language Toggle */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
                className="sr-only peer"
              />
              <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none rounded-full peer dark:bg-purple-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
              <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                {darkMode ? header.darkModeText : header.lightModeText}
              </span>
            </label>

            <span className="text-gray-400">|</span>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
            >
              <span
                className={`${
                  currentLanguage === "tr"
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {currentLanguage === "tr" ? header.turkishText : header.englishText}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;