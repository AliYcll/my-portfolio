import React, { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";
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
  }, [currentLanguage]); // dataSent removed from dependencies

  return (
    <footer
      id="footer"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-20 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          {footer.heading}
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
          <a
            href={footer.links.blog.url}
            className="hover:text-purple-700 dark:hover:text-purple-300 font-medium"
          >
            {footer.links.blog.label}
          </a>
          <a
            href={footer.links.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-700 dark:hover:text-purple-300 font-medium"
          >
            {footer.links.github.label}
          </a>
          <a
            href={footer.links.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-700 dark:hover:text-purple-300 font-medium"
          >
            {footer.links.linkedin.label}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
