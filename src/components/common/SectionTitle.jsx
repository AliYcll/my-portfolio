import React from "react";

const SectionTitle = ({ children, className = "" }) => {
  const titleClasses = `text-5xl md:text-6xl font-bold mb-16 text-gray-900 dark:text-white ${className}`;

  return <h2 className={titleClasses}>{children}</h2>;
};

export default SectionTitle;
