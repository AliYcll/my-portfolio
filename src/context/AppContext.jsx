import React, { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { data } from "../data/data";
import { toast } from "react-toastify";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [currentLanguage, setCurrentLanguage] = useLocalStorage(
    "language",
    "tr"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    toast.success(
      darkMode ? "Light mode aktif edildi ☀️" : "Dark mode aktif edildi 🌙"
    );
  };

  const toggleLanguage = () => {
    const newLang = currentLanguage === "tr" ? "en" : "tr";
    setCurrentLanguage(newLang);
    toast.success(
      `Dil ${newLang === "tr" ? "Türkçe" : "İngilizce"} olarak değiştirildi`
    );
  };

  const currentData = data[currentLanguage];

  const value = {
    darkMode,
    toggleDarkMode,
    currentLanguage,
    toggleLanguage,
    currentData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
};
