import React, { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { data } from '../data/data';
import { toast } from 'react-toastify';

// Context oluştur
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  // localStorage ile state yönetimi
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  const [currentLanguage, setCurrentLanguage] = useLocalStorage('language', 'tr');

  // Dark mode class toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Dark mode toggle fonksiyonu
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    toast.success(
      darkMode ? 'Light mode aktif edildi ☀️' : 'Dark mode aktif edildi 🌙',
    );
  };

  // Dil değiştirme fonksiyonu
  const toggleLanguage = () => {
    const newLang = currentLanguage === 'tr' ? 'en' : 'tr';
    setCurrentLanguage(newLang);
    toast.success(
      `Dil ${newLang === 'tr' ? 'Türkçe' : 'İngilizce'} olarak değiştirildi`,
    );
  };

  // Mevcut dildeki veriyi al
  const currentData = data[currentLanguage];

  // Context value
  const value = {
    darkMode,
    toggleDarkMode,
    currentLanguage,
    toggleLanguage,
    currentData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook - Context'i kullanmak için
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};