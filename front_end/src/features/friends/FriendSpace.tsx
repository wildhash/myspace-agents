import React from 'react';
import OrangeModule from '../../components/common/OrangeModule';

const Friend: React.FC<{ name: string; imgSrc: string }> = ({ name, imgSrc }) => (
    <div className="text-center">
        <a href="#/wip" className="font-bold text-[#0059B3] hover:underline">{name} ✅</a>
        <a href="#/wip" className="block mt-0.5">
            <img src={imgSrc} alt={name} className="w-24 h-28 object-cover mx-auto" />
        </a>
    </div>
);

const FriendSpace: React.FC = () => (
    <OrangeModule 
        title="matter's Friend Space"
        rightElement={<a href="#/wip" className="text-xs font-normal text-black hover:underline">[view all]</a>}
    >
        <p className="mb-2"><strong className="text-red-600">matter</strong> has <strong className="text-red-600">2</strong> friends.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <Friend name="SpaceHey" imgSrc="https://placehold.co/100x112/003399/FFFFFF?text=hey" />
             <Friend name="An" imgSrc="https://placehold.co/100x112/EFEFEF/333333?text=An" />
        </div>
    </OrangeModule>
);

export default FriendSpace;
