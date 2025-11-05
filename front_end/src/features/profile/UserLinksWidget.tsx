import React from 'react';
import Module from '../../components/common/Module';

const UserLinksWidget: React.FC = () => (
    <Module title="matter's Links">
         <div className="text-right">
             <a href="#/profile/links" className="text-[#6699CC] hover:underline text-sm">[edit]</a>
        </div>
    </Module>
);

export default UserLinksWidget;
