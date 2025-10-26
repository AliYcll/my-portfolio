import React, { useEffect } from "react";
import { useApp } from "../hooks/useApp";
import { sendPortfolioData } from "../services/api";

const Footer = () => {
  const { currentData, currentLanguage } = useApp();
  const { footer } = currentData;

  useEffect(() => {
    const sendData = async () => {
      const result = await sendPortfolioData({
        name: "Portfolio Visit",
        timestamp: new Date().toISOString(),
        language: currentLanguage,
      });

      if (result.success) {
        console.log("API Response:", result.data);
      }
    };

    sendData();
  }, [currentLanguage]);

  return (
    <footer id="footer" className="w-full py-20 bg-[#F9F9F9] dark:bg-[#141414] transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex flex-col gap-10">
        <div className="text-left max-w-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-[#aab8cb] mb-4">{footer.heading1}<br/>{footer.heading2}</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm">
          <a href={`mailto:${footer.email}`} className="text-[#AF0C48] font-medium text-lg hover:text-[#b91c1c] transition-colors flex items-center gap-2 mb-4 md:mb-0">👉 <span className="underline decoration-2 dark:text-[#bbb3e8]">{footer.email}</span></a>
          <div className="flex gap-4">
            <a href={footer.links.blog.url} target="_blank" rel="noopener noreferrer" className="text-[#0A0A14] hover:text-accent transition-colors dark:text-[#e3e3fe]">{footer.links.blog.label}</a>
            <a href={footer.links.github.url} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline dark:text-[#17d18b]">{footer.links.github.label}</a>
            <a href={footer.links.linkedin.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-[#0ba6f7]">{footer.links.linkedin.label}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
