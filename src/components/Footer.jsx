import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { sendPortfolioData } from '../services/api';
import { toast } from 'react-toastify';

const Footer = () => {
  const { currentData, currentLanguage } = useApp();
  const { footer } = currentData;
  const [dataSent, setDataSent] = useState(false);

  useEffect(() => {
    const sendData = async () => {
      if (!dataSent) {
        const result = await sendPortfolioData({
          name: 'Portfolio Visit',
          timestamp: new Date().toISOString(),
          language: currentLanguage,
          userAgent: navigator.userAgent,
        });

        if (result.success) {
          console.log('API Response:', result.data);
          toast.success('Veri başarıyla gönderildi! 🚀');
          setDataSent(true);
        } else {
          console.error('API Error:', result.error);
          toast.error('Veri gönderilemedi! ❌');
        }
      }
    };

    // Component mount olduğunda veri gönder
    sendData();
  }, [currentLanguage, dataSent]);

  return (
    <footer className="py-16 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 md:px-6 lg:px-20 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-900 dark:text-white">
          {footer.heading}
        </h2>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 md:gap-8 text-pink-500 font-semibold">
          {Object.entries(footer.links).map(([key, link]) => (
            <a
              key={key}
              href={link.url}
              target={key !== 'email' && key !== 'blog' ? '_blank' : undefined}
              rel={key !== 'email' && key !== 'blog' ? 'noopener noreferrer' : undefined}
              className="hover:underline hover:text-pink-600 transition-colors text-base md:text-lg"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-12 text-center text-xs md:text-sm text-gray-600 dark:text-gray-400">
          <p>© 2024 Portfolio. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ using React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;