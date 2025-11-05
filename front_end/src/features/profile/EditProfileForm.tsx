import React from 'react';

const FormField: React.FC<{ label: string, id: string }> = ({ label, id }) => (
    <div className="mb-4">
        <label htmlFor={id} className="block font-bold text-gray-700 mb-1.5">{label}</label>
        <textarea id={id} name={id} className="w-full h-24 p-1.5 border border-black bg-white font-sans text-sm" />
    </div>
);

const EditProfileForm: React.FC = () => {
    return (
        <div className="max-w-[700px] mx-auto bg-white border-2 border-[#003399] p-2.5">
            <h1 className="text-lg font-bold text-white bg-[#6699CC] border border-[#003399] p-2 -m-2.5 mb-0">
                Edit Your Profile
            </h1>
            <div className="text-xs text-gray-700 bg-gray-100 p-1.5 border-b border-gray-300 mb-4">
                All fields are optional and can be left empty if you want.
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
                <fieldset className="border border-gray-300 p-2.5 mt-5">
                    <legend className="text-base font-bold text-[#003399] px-1.5">Blurbs</legend>
                    <FormField label="About me:" id="about-me" />
                    <FormField label="Who I'd like to meet:" id="meet" />
                </fieldset>

                <fieldset className="border border-gray-300 p-2.5 mt-5">
                    <legend className="text-base font-bold text-[#003399] px-1.5">Interests</legend>
                    <FormField label="General:" id="general" />
                    <FormField label="Music:" id="music" />
                    <FormField label="Movies:" id="movies" />
                    <FormField label="Television:" id="television" />
                    <FormField label="Books:" id="books" />
                    <FormField label="Heroes:" id="heroes" />
                </fieldset>

                <button type="submit" className="mt-4 font-bold text-white bg-[#003399] border-2 border-outset border-[#6699CC] px-4 py-1 cursor-pointer hover:bg-[#0044AA]">
                    Save All Changes
                </button>
            </form>
        </div>
    );
};

export default EditProfileForm;
