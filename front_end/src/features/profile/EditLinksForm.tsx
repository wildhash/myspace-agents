import React from 'react';

const LinkField: React.FC<{ label: string; id: string; placeholder: string; icon: string }> = ({ label, id, placeholder, icon }) => (
    <div className="flex flex-col sm:flex-row py-2 border-b border-gray-200">
        <label htmlFor={id} className="w-full sm:w-1/3 font-bold mb-1 sm:mb-0 pr-4 flex items-center gap-2">
            <span className="text-xl">{icon}</span> {label}
        </label>
        <div className="w-full sm:w-2/3">
            <input 
                type="text" 
                id={id} 
                name={id} 
                placeholder={placeholder} 
                className="w-full p-1 border border-black bg-white font-sans text-sm" 
            />
        </div>
    </div>
);

const EditLinksForm: React.FC = () => {
    return (
        <div className="max-w-[800px] mx-auto bg-white border-2 border-[#003399] p-2.5">
            <h1 className="text-lg font-bold text-white bg-[#6699CC] border border-[#003399] p-2 -m-2.5 mb-0">
                Edit Your Links
            </h1>
            <div className="text-xs text-gray-700 bg-gray-100 p-1.5 border-b border-gray-300 mb-4">
                All fields are optional and can be left empty if you want.
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
                <LinkField icon="📷" label="Instagram" id="instagram" placeholder="https://www.instagram.com/" />
                <LinkField icon="🐦" label="Twitter" id="twitter" placeholder="https://twitter.com/" />
                <LinkField icon="▶️" label="YouTube" id="youtube" placeholder="Please enter the full YouTube Link:" />
                <LinkField icon="🎮" label="Twitch" id="twitch" placeholder="https://www.twitch.tv/" />
                <LinkField icon="👍" label="Facebook" id="facebook" placeholder="https://www.facebook.com/" />
                <LinkField icon="🎵" label="TikTok" id="tiktok" placeholder="https://www.tiktok.com/@" />
                <LinkField icon="💻" label="GitHub" id="github" placeholder="https://github.com/" />
                <LinkField icon="🚀" label="ProductHunt" id="producthunt" placeholder="https://producthunt.com/@" />
                <LinkField icon="✈️" label="Telegram" id="telegram" placeholder="https://telegram.me/" />
                <LinkField icon="🌐" label="Website" id="website" placeholder="Please enter the full Website Link:" />
                
                <button type="submit" className="mt-6 font-bold text-white bg-[#003399] border-2 border-outset border-[#6699CC] px-4 py-1 cursor-pointer hover:bg-[#0044AA]">
                    Save All
                </button>
            </form>
        </div>
    );
};

export default EditLinksForm;
