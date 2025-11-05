import React, { useState } from 'react';
import Module from '../../components/common/Module';

type Tab = 'Featured' | 'Videos' | 'Music' | 'People';

const TodayOnMySpace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Featured');

  const tabs: Tab[] = ['Featured', 'Videos', 'Music', 'People'];

  return (
    <Module
      title="Today on MySpace"
      rightElement={
        <div className="text-xs font-normal text-right">
          Sunday, Oct 26, 2008
          <br />
          <a href="#/wip" className="underline hover:text-gray-200">Check your Horoscope</a>
        </div>
      }
    >
      <div className="border-b-2 border-[#6699CC] mb-2.5">
        <ul className="flex">
          {tabs.map((tab) => (
            <li key={tab}>
              <button
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 font-bold text-sm ${
                  activeTab === tab
                    ? 'bg-white border-t border-x border-[#6699CC] text-[#003399] border-b-2 border-b-white -mb-0.5'
                    : 'bg-[#DFE9F7] border border-b-0 border-[#6699CC] text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center p-8 text-gray-500">
          Content for {activeTab} goes here.
      </div>
    </Module>
  );
};

export default TodayOnMySpace;
