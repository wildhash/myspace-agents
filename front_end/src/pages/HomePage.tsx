import React from 'react';
import MainBanner from '../features/home/MainBanner';
import TodayOnMySpace from '../features/home/TodayOnMySpace';
import LoginWidget from '../features/auth/LoginWidget';
import NewToMySpace from '../features/home/NewToMySpace';

const HomePage: React.FC = () => {
    return (
        <>
            <MainBanner />
            <div className="mt-2.5 flex flex-col lg:flex-row gap-2.5">
                <div className="flex-grow lg:w-2/3 flex flex-col gap-2.5">
                    <TodayOnMySpace />
                    <NewToMySpace />
                </div>
                <div className="flex-shrink-0 lg:w-1/3">
                    <LoginWidget />
                </div>
            </div>
        </>
    );
};

export default HomePage;
