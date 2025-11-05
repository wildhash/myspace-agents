import React from 'react';
import ProfileInfoWidget from '../features/profile/ProfileInfoWidget';
import MailWidget from '../features/messaging/MailWidget';
import Announcements from '../features/profile/Announcements';
import LatestBlogs from '../features/profile/LatestBlogs';
import ProfileStats from '../features/profile/ProfileStats';
import CoolNewPeople from '../features/profile/CoolNewPeople';
import FriendsBulletins from '../features/feed/FriendsBulletins';
import BlogSubscriptions from '../features/profile/BlogSubscriptions';
import FriendRequestsWidget from '../features/friends/FriendRequestsWidget';

const ProfileDashboardPage: React.FC = () => {
    return (
        <div className="space-y-2.5">
            <div className="flex flex-col lg:flex-row gap-4">
                {/* Left Column */}
                <aside className="lg:w-[320px] flex-shrink-0 space-y-2.5">
                    <ProfileInfoWidget />
                    <MailWidget />
                    <a href="#/view-profile" className="block w-full text-center bg-gray-100 border-2 border-[#6699CC] p-1.5 text-sm font-bold hover:bg-gray-200 text-black no-underline">
                        View Your Profile
                    </a>
                    <Announcements />
                </aside>
                {/* Right Column */}
                <section className="flex-grow space-y-2.5">
                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                        <div className="flex-grow w-full sm:w-auto">
                            <LatestBlogs />
                        </div>
                        <div className="flex-shrink-0">
                            <ProfileStats />
                        </div>
                    </div>
                    <CoolNewPeople />
                    <FriendsBulletins />
                    <BlogSubscriptions />
                    <FriendRequestsWidget />
                </section>
            </div>
        </div>
    );
};

export default ProfileDashboardPage;
