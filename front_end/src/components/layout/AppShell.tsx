import React from 'react';
import TopNav from './TopNav';
import Footer from './Footer';

interface AppShellProps {
  children: React.ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (
    <div className="font-sans text-xs text-gray-800">
      <div className="max-w-[980px] mx-auto bg-white shadow-lg">
        <TopNav />
        <main className="p-2.5">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AppShell;
