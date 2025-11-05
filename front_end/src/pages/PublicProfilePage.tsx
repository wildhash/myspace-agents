import React, { useState } from 'react';
import PublicProfileInfoWidget from '../features/profile/PublicProfileInfoWidget';
import ContactWidget from '../features/profile/ContactWidget';
import ProfileUrlWidget from '../features/profile/ProfileUrlWidget';
import UserInterests from '../features/profile/UserInterests';
import UserLinksWidget from '../features/profile/UserLinksWidget';
import UserBlurbs from '../features/profile/UserBlurbs';
import FriendSpace from '../features/friends/FriendSpace';
import FriendComments from '../features/comments/FriendComments';
import CustomThemeEditor from '../features/profile/CustomThemeEditor';

const PublicProfilePage: React.FC = () => {
    const [customCss, setCustomCss] = useState('');
    const [customHtml, setCustomHtml] = useState('');

    const handleApplyTheme = (html: string, css: string) => {
        setCustomHtml(html);
        setCustomCss(css);
    };

    return (
        <>
            {customCss && <style>{customCss}</style>}
            <div className="flex flex-col lg:flex-row gap-4 items-start">
                {/* Left Column */}
                <aside className="w-full lg:w-[320px] flex-shrink-0 space-y-2.5">
                    <PublicProfileInfoWidget />
                    <ContactWidget />
                    <ProfileUrlWidget />
                    <CustomThemeEditor onApplyTheme={handleApplyTheme} />
                    <UserInterests />
                    <UserLinksWidget />
                </aside>
                {/* Right Column */}
                <section className="flex-grow w-full space-y-2.5">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                        <h2 className="text-2xl font-bold">
                            matter
                            <span className="text-sm font-normal text-[#6699CC] ml-2">
                                <a href="#/profile/edit" className="hover:underline">[edit name]</a> <a href="#/wip" className="hover:underline">[edit photo]</a>
                            </span>
                        </h2>
                    </div>

                    <a href="#/profile/edit" className="block w-full text-center border-2 border-black bg-gray-100 p-2 font-bold text-lg text-[#003399] hover:bg-gray-200 no-underline">
                        Edit Your Profile
                    </a>
                    
                    <h3 className="font-bold text-base">
                        matter's Latest Blog Entries <a href="#/wip" className="text-sm text-[#6699CC] hover:underline">[View Blog]</a>
                    </h3>
                    <p>There are no Blog Entries yet.</p>

                    <UserBlurbs customHtml={customHtml} />
                    <FriendSpace />
                    <FriendComments />
                </section>
            </div>
        </>
    );
};

export default PublicProfilePage;
