import React from 'react';

interface CoolPersonProps {
    name: string;
    imgSrc: string;
}

const CoolPerson: React.FC<CoolPersonProps> = ({ name, imgSrc }) => (
    <div className="text-center">
        <a href="#/wip" className="font-bold text-sm text-[#0059B3] hover:underline">{name}</a>
        <a href="#/wip" className="block mt-1">
            <img src={imgSrc} alt={name} className="w-24 h-24 object-cover mx-auto border border-black" />
        </a>
    </div>
);

const CoolNewPeople: React.FC = () => (
    <div className="border border-[#FDB813]">
        <header className="bg-gradient-to-b from-[#FFF2D9] to-[#FDE6B2] p-1.5 flex justify-between items-center">
            <h2 className="font-bold text-sm">Cool New People</h2>
            <a href="#/wip" className="text-xs text-[#0059B3] hover:underline">[view more]</a>
        </header>
        <div className="p-2.5 bg-white grid grid-cols-2 md:grid-cols-4 gap-4">
            <CoolPerson name="NICOLE !" imgSrc="https://placehold.co/100x100/639/fff/png?text=NICOLE" />
            <CoolPerson name="Benito" imgSrc="https://placehold.co/100x100/333/fff/png?text=Benito" />
            <CoolPerson name="pawzzcarnival" imgSrc="https://placehold.co/100x100/f8b/fff/png?text=pawzz" />
            <CoolPerson name="Willow lull" imgSrc="https://placehold.co/100x100/555/fff/png?text=Willow" />
        </div>
    </div>
);

export default CoolNewPeople;
