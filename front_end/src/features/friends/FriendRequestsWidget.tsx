import React from 'react';
import OrangeModule from '../../components/common/OrangeModule';

const FriendRequestsWidget: React.FC = () => (
    <OrangeModule title="Friend Requests">
         <p className="font-bold">0 Open Friend Requests</p>
         <button className="mt-2 bg-gray-200 border border-gray-400 px-2 py-0.5 text-xs font-bold hover:bg-gray-300">View All Requests</button>
    </OrangeModule>
);

export default FriendRequestsWidget;
