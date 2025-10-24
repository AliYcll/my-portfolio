import React from "react";

const Section = ({ children, id, className = "" }) => {
  const sectionClasses = `py-20 scroll-mt-24 ${className}`;

  return (
    <section id={id} className={sectionClasses}>
      <div className="container mx-auto px-4 md:px-6 lg:px-20 max-w-7xl">
        {children}
      </div>
    </section>
  );
};

export default Section;
