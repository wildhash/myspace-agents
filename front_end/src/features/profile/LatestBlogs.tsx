import React from 'react';

const LatestBlogs: React.FC = () => (
    <div>
        <h2 className="text-lg font-bold mb-1">
            Your Latest Blog Entries <a href="#/wip" className="text-[#0059B3] hover:underline">[New Entry]</a>
        </h2>
        <p>There are no Blog Entries yet.</p>
    </div>
);

export default LatestBlogs;
