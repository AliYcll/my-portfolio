import React from "react";
import { useApp } from "../hooks/useApp";
import Button from "./common/Button";

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
        {/* Theme & Language Toggle - Top Right */}
        <div className="flex items-center justify-end py-2">
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
                    ? "text-red-600 dark:text-red-400"
                    : "text-blue-600 dark:text-blue-400"
                }`}
              >
                {currentLanguage === "tr" ? header.turkishText : header.englishText}
              </span>
            </button>
          </div>
        </div>

        {/* Logo and Navigation - Second Row, Left Aligned */}
        <div className="flex items-center justify-between py-2">
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
            <Button
              variant="navigation"
              onClick={() => scrollToSection("skills")}
            >
              {header.skillsButton}
            </Button>
            <Button
              variant="navigation"
              onClick={() => scrollToSection("projects")}
            >
              {header.projectsButton}
            </Button>
            <Button
              variant="hireMe"
              onClick={() => scrollToSection("footer")}
            >
              {header.hireMeButton}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;