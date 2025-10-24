import React from "react";
import { useApp } from "../hooks/useApp";

const Header = () => {
  const { darkMode, toggleDarkMode, currentLanguage, toggleLanguage, currentData, scrollToSection } =
    useApp();
  const { header } = currentData;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto flex justify-end items-center px-8 md:px-16 py-3 text-xs font-medium text-gray-700 dark:text-gray-300">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 cursor-pointer select-none" onClick={toggleDarkMode}>
            <div className={`relative w-10 h-5 rounded-full transition-colors duration-300 ${darkMode ? 'bg-[#3730A3]' : 'bg-gray-300'}`}>
              <div className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 bg-[#FFE86E] ${darkMode ? 'translate-x-5' : ''}`}></div>
            </div>
            <span className="uppercase tracking-wide text-[11px]">{darkMode ? header.darkModeText : header.lightModeText}</span>
          </button>
          <span className="text-gray-300">|</span>
          <button className="uppercase text-[11px] tracking-wide text-[#3730A3] hover:text-[#2d2987] transition-colors" onClick={toggleLanguage}>
            {currentLanguage === 'tr' ? 'SWITCH TO ENGLISH' : 'TÜRKÇEYE GEÇ'}
          </button>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-8 md:px-16 py-3">
        <button className="w-9 h-9 flex items-center justify-center bg-[#EEEBFF] text-[#7B61FF] font-bold rounded-full text-lg shadow-sm transform rotate-[30deg] cursor-pointer" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); window.location.hash = ''; }}>
          {header.logoText || 'X'}
        </button>
        <div className="flex items-center gap-10">
          <nav className="flex gap-10 text-sm font-medium text-gray-700 dark:text-gray-300">
            <a href="#skills" className="hover:text-[#3730A3] dark:hover:text-[#3730A3] transition-colors" onClick={() => scrollToSection("skills")}>
              {header.skillsButton}
            </a>
            <a href="#projects" className="hover:text-[#3730A3] dark:hover:text-[#3730A3] transition-colors" onClick={() => scrollToSection("projects")}>
              {header.projectsButton}
            </a>
          </nav>
          <button className="cursor-pointer text-sm font-medium border border-[#3730A3] text-[#3730A3] hover:bg-[#3730A3] hover:text-white px-5 py-1.5 rounded-md transition-colors duration-300" onClick={() => scrollToSection("footer")}>
            {header.hireMeButton}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;