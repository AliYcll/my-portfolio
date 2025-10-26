import React from "react";
import { useApp } from "../hooks/useApp";

const Header = React.forwardRef(({ headerHeight }, ref) => {
  const { darkMode, toggleDarkMode, currentLanguage, toggleLanguage, currentData } =
    useApp();
  const { header } = currentData;

  return (
    <header ref={ref} id="main-header" className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#252128] transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto flex justify-end items-center px-2 md:px-4 py-1 md:py-2 text-base md:text-xl font-medium text-gray-700 dark:text-gray-300 mt-2">
        <div className="flex items-center gap-4 md:gap-8">
          <button className="flex items-center gap-2 cursor-pointer select-none" onClick={toggleDarkMode}>
            <div className={`relative w-10 h-5 rounded-full transition-colors duration-300 ${darkMode ? 'bg-[#3730A3]' : 'bg-gray-300'}`}>
              <div className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 bg-[#FFE86E] ${darkMode ? 'translate-x-5' : ''}`}></div>
            </div>
            <span className="uppercase tracking-wide text-base md:text-xl">{darkMode ? header.darkModeText : header.lightModeText}</span>
          </button>
          <span className="text-gray-300">|</span>
          <button className="uppercase text-base md:text-xl tracking-wide text-[#3730A3] hover:text-[#2d2987] transition-colors" onClick={toggleLanguage}>
            {currentLanguage === 'tr' ? 'SWITCH TO ENGLISH' : 'TÜRKÇEYE GEÇ'}
          </button>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-2 md:px-4 py-2 md:py-3">
        <button className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center bg-[#EEEBFF] text-[#7B61FF] font-bold rounded-full text-xl md:text-3xl shadow-sm transform rotate-[30deg] cursor-pointer" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); window.location.hash = ''; }}>
          {header.logoText || 'X'}
        </button>
        <div className="flex items-center gap-8 md:gap-24">
          <nav className="flex gap-8 md:gap-24 text-lg md:text-2xl font-medium text-gray-700 dark:text-gray-300">
            <a href="#skills" className="hover:text-[#3730A3] dark:hover:text-[#3730A3] transition-colors">
              {header.skillsButton}
            </a>
            <a href="#projects" className="hover:text-[#3730A3] dark:hover:text-[#3730A3] transition-colors">
              {header.projectsButton}
            </a>
          </nav>
          <a href="#footer" className="cursor-pointer text-base md:text-2xl font-medium border border-[#3730A3] text-[#3730A3] bg-white hover:bg-[#3730A3] hover:text-white px-5 md:px-8 py-2 md:py-3 rounded-md transition-colors duration-300">
            {header.hireMeButton}
          </a>
        </div>
      </div>
    </header>
  );
});

export default Header;