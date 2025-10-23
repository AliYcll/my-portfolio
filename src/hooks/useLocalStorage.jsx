import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  // State'i localStorage'dan oku veya initialValue kullan
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // State değiştiğinde localStorage'a yaz
  const setValue = (value) => {
    try {
      // Fonksiyon mu yoksa değer mi kontrol et
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // State'i güncelle
      setStoredValue(valueToStore);
      
      // localStorage'a kaydet
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};