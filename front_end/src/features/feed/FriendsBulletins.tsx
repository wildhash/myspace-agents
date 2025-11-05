import React from 'react';
import Module from '../../components/common/Module';

const FriendsBulletins: React.FC = () => (
    <Module 
        title="Your Friend's Bulletins" 
        rightElement={<a href="#/wip" className="text-xs font-normal text-white hover:text-gray-200 underline">[view all]</a>}
    >
        <table className="w-full border-collapse text-sm">
            <thead>
                <tr>
                    <th className="w-1/3 border border-black bg-gray-200 p-1 font-bold text-left">From</th>
                    <th className="w-2/3 border border-black bg-gray-200 p-1 font-bold text-left">Subject</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-black p-1">
                        An ✅
                    </td>
                    <td className="border border-black p-1 font-bold text-[#0059B3]">
                        <a href="#/wip" className="hover:underline">Happy Halloween!! 🎃</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <div className="text-center mt-2">
            <a href="#/wip" className="text-[#0059B3] hover:underline font-bold">View all Bulletins</a>
        </div>
    </Module>
);

export default FriendsBulletins;
