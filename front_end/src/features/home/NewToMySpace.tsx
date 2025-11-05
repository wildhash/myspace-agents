import React from 'react';
import Module from '../../components/common/Module';

const NewToMySpace: React.FC = () => {
  return (
    <Module title="New to MySpace?">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold text-lg">Get Started On MySpace!</h3>
          <p className="mt-1">Join for free, and view profiles, connect with friends, blog, rank music, and much more!</p>
        </div>
        <div className="space-y-2 text-sm text-[#6699CC]">
          <a href="#/wip" className="flex items-center gap-2 hover:underline">
            <span className="text-xl">🤝</span> Join now and be a part of the MySpace community
          </a>
          <a href="#/wip" className="flex items-center gap-2 hover:underline">
            <span className="text-xl">📷</span> Tell us about yourself and upload photos and videos
          </a>
          <a href="#/wip" className="flex items-center gap-2 hover:underline">
            <span className="text-xl">👥</span> View profiles and add friends to your network
          </a>
          <a href="#/wip" className="flex items-center gap-2 hover:underline">
            <span className="text-xl">🎵</span> Discover new bands, filmmakers and comedians
          </a>
        </div>
      </div>
      <div className="mt-4 bg-yellow-100 border-t-2 border-b-2 border-yellow-300 p-2.5 flex justify-between items-center">
        <a href="#/wip" className="font-bold text-[#6699CC] hover:underline">Take the full tour »</a>
        <a href="#/profile" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-1.5 rounded-md text-sm">
          Sign Up
        </a>
      </div>
    </Module>
  );
};

export default NewToMySpace;
