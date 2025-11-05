import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 text-center border-t border-gray-300 space-y-3">
      <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-[#6699CC] text-xs font-bold">
        <a href="#/wip" className="hover:underline">About</a>|
        <a href="#/wip" className="hover:underline">FAQ</a>|
        <a href="#/wip" className="hover:underline">Terms</a>|
        <a href="#/wip" className="hover:underline">Privacy Policy</a>|
        <a href="#/wip" className="hover:underline">Safety Tips</a>|
        <a href="#/wip" className="hover:underline">Contact MySpace</a>|
        <a href="#/wip" className="hover:underline">Advertise <span className="text-red-500">New!</span></a>
      </div>
      <div className="text-xs text-gray-500">
        ©2003-2009 MySpace. All Rights Reserved.
      </div>
      <div className="flex justify-center items-center gap-2">
          <form className="flex items-center" onSubmit={(e) => e.preventDefault()}>
            <input type="text" className="h-6 px-2 bg-white text-black text-xs border border-gray-300 w-32 sm:w-40 border-r-0" />
            <select className="h-6 bg-white text-black text-xs border-y border-r border-gray-300">
              <option>Web</option>
              <option>MySpace</option>
            </select>
            <button type="submit" className="bg-gray-200 text-black h-6 px-3 border border-gray-400 hover:bg-gray-300">Search</button>
          </form>
      </div>
       <div className="text-xs text-gray-500 pt-4">
        brought to you by <a href="#/wip" className="text-[#6699CC] hover:underline">tibush labs</a>
      </div>
    </footer>
  );
};

export default Footer;
