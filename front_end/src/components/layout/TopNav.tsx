import React from 'react';

const TopNav: React.FC = () => {
    const navItems = [
    { href: "#", text: "Home" },
    { href: "#/wip", text: "Browse People" },
    { href: "#/wip", text: "Find People" },
    { href: "#/wip", text: "Blogs" },
    { href: "#/wip", text: "Music" },
    { href: "#/wip", text: "Videos" },
    { href: "#/wip", text: "Layout" },
    { href: "#/wip", text: "About Us" },
  ];

  return (
    <div className="bg-[#003399]">
      <header className="text-white p-2">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4 mb-2 sm:mb-0">
            <h1 className="text-3xl font-bold">myspace.com</h1>
            <div className="text-xs">
              <p>New to MySpace?</p>
              <a href="#/profile" className="font-bold hover:underline">Sign Up!</a> | <a href="#/wip" className="hover:underline">Take a Tour</a> | <a href="#/wip" className="hover:underline">Explore</a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <form className="flex items-center" onSubmit={(e) => e.preventDefault()}>
              <input type="text" className="h-6 px-2 bg-white text-black text-xs w-32 sm:w-40 border border-gray-300 border-r-0" />
              <select className="h-6 bg-white text-black text-xs border-y border-r border-gray-300">
                <option>Web</option>
                <option>MySpace</option>
              </select>
              <button type="submit" className="bg-gray-200 text-black h-6 px-3 font-bold border-y border-r border-gray-300 hover:bg-gray-300">Search</button>
            </form>
          </div>
        </div>
        <div className="flex justify-end gap-4 text-xs mt-2">
          <a href="#/wip" className="hover:underline">Privacy</a>
          <a href="#/wip" className="hover:underline">Safety</a>
          <a href="#/profile" className="hover:underline font-bold">Sign Up</a>
        </div>
      </header>
      <nav className="text-white px-2 pt-1 pb-4">
        <div className="flex flex-wrap justify-center sm:justify-start items-center font-bold text-sm">
          {navItems.map((item, index) => (
            <React.Fragment key={item.text}>
              <a href={item.href} className="hover:underline px-3">{item.text}</a>
              {index < navItems.length - 1 && (
                <span className="text-white select-none">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default TopNav;
