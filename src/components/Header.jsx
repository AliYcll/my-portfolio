import React from 'react';
import { useApp } from '../context/AppContext';

const Header = () => {
  const { darkMode, toggleDarkMode, currentLanguage, toggleLanguage } = useApp();

  return (
    <header className="fixed top-0 right-0 z-50 p-4 md:p-6 flex items-center gap-3 md:gap-4">
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="flex items-center gap-2 bg-pink-500 text-white px-3 md:px-4 py-2 rounded-full text-sm md:text-base font-medium hover:bg-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        aria-label="Toggle theme"
      >
        <span className="text-lg">{darkMode ? '☀️' : '🌙'}</span>
        <span className="hidden sm:inline">
          {darkMode ? 'LIGHT MODE' : 'DARK MODE'}
        </span>
      </button>

      {/* Separator */}
      <span className="text-gray-600 dark:text-gray-400">|</span>

      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="text-pink-500 font-medium hover:text-pink-600 transition-all duration-300 text-sm md:text-base uppercase"
        aria-label="Change language"
      >
        <span className="hidden sm:inline">
          {currentLanguage === 'tr' ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH"}
        </span>
        <span className="sm:hidden">
          {currentLanguage === 'tr' ? 'TR' : 'EN'}
        </span>
      </button>
    </header>
  );
};

export default Header;