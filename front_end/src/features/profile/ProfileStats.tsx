import React from 'react';

const ProfileStats: React.FC = () => (
    <div className="border border-black">
        <header className="bg-[#003399] text-white text-center font-bold p-1">
            Nov 2, 2025
        </header>
        <div className="p-2.5 text-center text-sm space-y-1">
            <p><strong>Your Friends:</strong> <span className="text-red-600 font-bold text-base">2</span></p>
            <p><strong>Profile Views:</strong> <span className="text-red-600 font-bold text-base">19</span></p>
            <p><strong>Joined:</strong></p>
            <p className="text-red-600 font-bold">29 minutes ago</p>
        </div>
    </div>
);

export default ProfileStats;
