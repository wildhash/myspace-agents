import React from 'react';

const ProfileUrlWidget: React.FC = () => (
    <div className="bg-[#D5E8FB] border-2 border-[#6699CC] p-1.5">
        <h3 className="font-bold text-sm">SpaceHey URL:</h3>
        <p className="text-sm break-words">https://spacehey.com/profile?id=4298956</p>
        <div className="text-right text-sm">
             <a href="#/wip" className="text-[#6699CC] hover:underline">[edit]</a>
        </div>
    </div>
);

export default ProfileUrlWidget;
