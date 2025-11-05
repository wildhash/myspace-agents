import React from 'react';
import Module from '../../components/common/Module';

const InterestRow: React.FC<{ category: string }> = ({ category }) => (
    <tr>
        <td className="bg-[#D5E8FB] p-1 font-bold w-1/3">{category}</td>
        <td className="p-1">&nbsp;</td>
    </tr>
);

const UserInterests: React.FC = () => (
    <Module title="matter's Interests">
        <table className="w-full border-collapse border border-gray-400 text-sm">
            <tbody>
                <InterestRow category="General" />
                <InterestRow category="Music" />
                <InterestRow category="Movies" />
                <InterestRow category="Television" />
                <InterestRow category="Books" />
                <InterestRow category="Heroes" />
            </tbody>
        </table>
        <div className="text-right mt-1">
            <a href="#/profile/edit" className="text-[#6699CC] hover:underline text-sm">[edit]</a>
        </div>
    </Module>
);

export default UserInterests;
