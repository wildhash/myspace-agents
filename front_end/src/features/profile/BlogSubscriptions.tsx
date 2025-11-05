import React from 'react';
import Module from '../../components/common/Module';

const BlogSubscriptions: React.FC = () => (
    <Module 
        title="Your Blog Subscriptions"
        rightElement={<a href="#/wip" className="text-xs font-normal text-white hover:text-gray-200 underline">[view all]</a>}
    >
        <p>Start subscribing to Blogs to view new Blog Entries here.</p>
    </Module>
);

export default BlogSubscriptions;
