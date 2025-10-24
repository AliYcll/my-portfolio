import React from 'react';

const Card = ({ children, className = '' }) => {
  const cardClasses = `bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${className}`;

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

export default Card;
