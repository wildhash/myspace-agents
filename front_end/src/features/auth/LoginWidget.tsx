import React, { useState } from 'react';
import Module from '../../components/common/Module';

const LoginWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  return (
    <div className="space-y-2.5">
      <div className="border-2 border-[#6699CC] bg-[#DFE9F7]">
        <div className="flex">
          <button 
            onClick={() => setActiveTab('login')}
            className={`flex-1 font-bold p-1.5 text-sm text-center ${activeTab === 'login' ? 'bg-white text-[#003399]' : 'bg-[#6699CC] text-white hover:bg-opacity-80'}`}
          >
            Log In
          </button>
          <button 
            onClick={() => setActiveTab('signup')}
            className={`flex-1 font-bold p-1.5 text-sm text-center ${activeTab === 'signup' ? 'bg-white text-[#003399]' : 'bg-[#6699CC] text-white hover:bg-opacity-80'}`}
          >
            Sign Up!
          </button>
        </div>
        <div className="p-2.5">
          {activeTab === 'login' ? (
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="font-bold">Email:</label>
                <input type="email" className="w-full border border-gray-300 p-1 bg-white" />
              </div>
              <div>
                <label className="font-bold">Password:</label>
                <input type="password" className="w-full border border-gray-300 p-1 bg-white" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <input
                    type="checkbox"
                    id="remember"
                    className="appearance-none h-3.5 w-3.5 bg-white border border-gray-400 rounded-sm checked:bg-[#003399] focus:outline-none align-middle"
                  />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <a href="#/profile" className="bg-[#003399] text-white font-bold px-4 py-1 rounded-sm hover:bg-blue-800 no-underline">
                  Log In
                </a>
              </div>
              <a href="#/wip" className="text-xs text-[#6699CC] hover:underline block text-center mt-2">Forget your password?</a>
            </form>
          ) : (
             <div className="text-center p-4">
              <p className="font-bold text-lg">Join the community!</p>
              <p className="mt-2">Sign up is fast and free.</p>
              <a href="#/profile" className="inline-block mt-4 bg-yellow-500 text-black font-bold px-6 py-2 rounded-md hover:bg-yellow-600">
                Sign Up Now!
              </a>
            </div>
          )}
        </div>
      </div>

      <Module title="Find Friends on MySpace">
        <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
          <label>Find or browse members:</label>
          <div className="flex gap-1">
            <input type="text" placeholder="Enter a name or email" className="w-full border border-gray-300 p-1 flex-grow bg-white" />
            <button type="submit" className="bg-gray-300 text-black font-bold px-4 py-1 rounded-sm hover:bg-gray-400">
              Go
            </button>
          </div>
        </form>
      </Module>
    </div>
  );
};

export default LoginWidget;
