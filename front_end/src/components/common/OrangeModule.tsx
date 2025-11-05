import React from 'react';

interface OrangeModuleProps {
  title: string;
  rightElement?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const OrangeModule: React.FC<OrangeModuleProps> = ({ title, rightElement, children, className = '' }) => {
  return (
    <div className={`border border-[#FDB813] ${className}`}>
      <header className="bg-gradient-to-b from-[#FDD27D] to-[#FDB813] p-1.5 flex justify-between items-center">
        <h2 className="font-bold text-sm text-black">{title}</h2>
        {rightElement}
      </header>
      <div className="p-2.5 bg-white text-sm">
        {children}
      </div>
    </div>
  );
};

export default OrangeModule;
