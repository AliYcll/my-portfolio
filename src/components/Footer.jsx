import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { sendPortfolioData } from '../services/api';

const Footer = () => {
  const { currentLanguage } = useApp();
  const [dataSent, setDataSent] = useState(false);

  useEffect(() => {
    const sendData = async () => {
      if (!dataSent) {
        const result = await sendPortfolioData({
          name: 'Portfolio Visit',
          timestamp: new Date().toISOString(),
          language: currentLanguage,
        });

        if (result.success) {
          console.log('API Response:', result.data);
          setDataSent(true);
        }
      }
    };

    sendData();
  }, [currentLanguage, dataSent]);

  return (
    <footer id="footer" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-20 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Let's work together on
          <br />
          your next product.
        </h2>
        
        <div className="flex justify-center mb-12">
          <a
            href="mailto:almilasucode@gmail.com"
            className="text-purple-600 dark:text-purple-400 text-xl font-medium hover:underline flex items-center gap-2"
          >
            👉 almilasucode@gmail.com
          </a>
        </div>

        <div className="flex justify-center items-center gap-8 text-purple-600 dark:text-purple-400">
          <a href="#" className="hover:text-purple-700 dark:hover:text-purple-300 font-medium">
            Personal Blog
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-700 dark:hover:text-purple-300 font-medium">
            Github
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-700 dark:hover:text-purple-300 font-medium">
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;