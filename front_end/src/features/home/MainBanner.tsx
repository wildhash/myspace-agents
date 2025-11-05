import React from 'react';

const MainBanner: React.FC = () => {
  return (
    <div className="bg-[#980101] p-1.5 border-2 border-gray-300">
      <div className="relative border-4 border-white">
        <img src="https://picsum.photos/seed/myspacebanner/950/200" alt="Battle of the Bands" className="w-full h-auto block" />
        <div className="absolute bottom-4 right-4">
          <a href="#/wip" className="bg-red-600 text-white font-bold py-2 px-4 border-2 border-white rounded-md hover:bg-red-700 active:bg-red-800 flex items-center gap-2">
            ▶ Check it out
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
