import React from 'react';

const HelpBanner: React.FC = () => (
    <div className="bg-[#F5FFF5] border border-[#CCE8CC] p-2 text-sm font-bold">
        <a href="#/wip" className="text-black no-underline hover:underline">
            <span className="text-red-500">❤️</span> Help us cover the running costs »
        </a>
    </div>
);

export default HelpBanner;
