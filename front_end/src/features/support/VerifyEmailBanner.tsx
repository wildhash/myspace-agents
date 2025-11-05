import React from 'react';

const VerifyEmailBanner: React.FC = () => (
    <div className="bg-[#F0FFF0] border border-[#9DCC9D] p-2 flex items-center gap-2 text-sm">
        <span className="text-blue-500 font-bold text-xl">ⓘ</span>
        <div>
            Verify your Email Address to protect your Account and to appear in "New People". Your Email Address stays private.
            <button className="block bg-gray-200 border border-gray-400 px-2 py-0.5 mt-1 text-xs font-bold hover:bg-gray-300">Verify Now »</button>
        </div>
    </div>
);

export default VerifyEmailBanner;
