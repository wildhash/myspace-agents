import React from 'react';
import OrangeModule from '../../components/common/OrangeModule';

const FriendComments: React.FC = () => (
    <OrangeModule title="matter's Friends Comments">
        <p>
            Displaying <span className="font-bold">0</span> of <span className="font-bold">0</span> comments ( <a href="#/wip" className="text-[#0059B3] hover:underline">View all</a> | <a href="#/wip" className="text-[#0059B3] hover:underline">Add Comment</a> )
        </p>
    </OrangeModule>
);

export default FriendComments;
