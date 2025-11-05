import React from 'react';

interface ModuleProps {
  title: string;
  rightElement?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Module: React.FC<ModuleProps> = ({ title, rightElement, children, className = '' }) => {
  return (
    <div className={`border-2 border-[#6699CC] ${className}`}>
      <header className="bg-[#6699CC] text-white font-bold p-1.5 flex justify-between items-center text-sm">
        <h2>{title}</h2>
        {rightElement}
      </header>
      <div className="p-2.5 bg-white">
        {children}
      </div>
    </div>
  );
};

export default Module;
