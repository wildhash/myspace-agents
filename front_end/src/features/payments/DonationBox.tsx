import React from 'react';

const DonationBox: React.FC = () => (
    <div className="bg-[#D5E8FB] border-2 border-[#6699CC] p-2.5 text-center text-sm">
        <p>
            <strong>SpaceHey is a small, independent social network, funded by your donations.</strong>
            <br/>
            <a href="#/wip" className="text-[#0059B3] hover:underline">[more details]</a>
        </p>
        <form action="#/wip" method="get" className="my-2">
            <button type="submit" className="bg-gradient-to-b from-[#FFDF85] to-[#FFC529] border border-[#A97F00] rounded-sm px-4 py-1 shadow-sm hover:from-[#FFD25D] hover:to-[#FFB80C]">
                <span className="italic font-bold text-[#003C74]">P</span>
                <span className="italic font-bold text-[#179BD7]">ay</span>
                <span className="italic font-bold text-[#002856]">Pal</span>
                <span className="ml-1 font-sans font-bold text-black">Donate</span>
            </button>
        </form>
        <img src="https://www.paypalobjects.com/en_US/i/bnr/horizontal_solution_PPeCheck.gif" alt="Visa, Mastercard, American Express, Discover, Paypal" className="mx-auto h-6" />
    </div>
);

export default DonationBox;
