import React from 'react';

const FormRow: React.FC<{ label: string; children: React.ReactNode; description?: string }> = ({ label, children, description }) => (
    <div className="flex flex-col sm:flex-row py-2 border-b border-gray-200">
        <div className="w-full sm:w-1/3 font-bold mb-1 sm:mb-0 pr-4">{label}</div>
        <div className="w-full sm:w-2/3">
            {children}
            {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
        </div>
    </div>
);


const AccountSettingsForm: React.FC = () => {
    return (
        <div className="max-w-[800px] mx-auto bg-white border-2 border-[#003399] p-2.5">
            <h1 className="text-lg font-bold text-white bg-[#6699CC] border border-[#003399] p-2 -m-2.5 mb-4">
                Account Settings
            </h1>

            <form onSubmit={(e) => e.preventDefault()}>
                <section>
                    <h2 className="font-bold text-base mb-2 border-b-2 border-[#6699CC] pb-1">Basic Details</h2>
                    <FormRow label="Account ID:">
                        <span>4298956</span>
                    </FormRow>
                    <FormRow label="Email Address:">
                        <span>matrixly.ai@gmail.com</span>
                    </FormRow>
                    <FormRow label="Your Name:">
                        <input type="text" defaultValue="matter" className="w-full sm:w-2/3 p-1 border border-black bg-white" />
                    </FormRow>
                    <FormRow label="Username: (optional)" description="If you set a Username, you will get a custom URL for your Profile. Example: https://spacehey.com/username. Attention: If you change your Username, your previous Profile URL won't work anymore and your Username will be available for other people again!">
                         <div className="flex items-center">
                            <span className="bg-gray-200 p-1 border border-r-0 border-black">https://spacehey.com/</span>
                            <input type="text" className="w-full sm:w-1/3 p-1 border border-black bg-white" />
                         </div>
                    </FormRow>
                </section>
                
                <section className="mt-6">
                    <h2 className="font-bold text-base mb-2 border-b-2 border-[#6699CC] pb-1">Privacy</h2>
                    <FormRow label="Online Status:">
                        <select className="p-1 border border-black bg-white">
                            <option>Show Online Status on your Profile</option>
                            <option>Hide Online Status on your Profile</option>
                        </select>
                    </FormRow>
                    <FormRow label="Who can start an IM conversation with you:">
                         <select className="p-1 border border-black bg-white">
                            <option>Your Friends</option>
                            <option>Everyone</option>
                             <option>No one</option>
                        </select>
                    </FormRow>
                    <FormRow label="Who can view your Profile:" description="If your Profile is set to private, only Friends can view the content of your Profile. Comments, Forum Topics, public Blog Entries, and other content posted by you will stay public.">
                         <select className="p-1 border border-black bg-white">
                            <option>Everyone (Public)</option>
                            <option>Your Friends</option>
                        </select>
                    </FormRow>
                </section>

                <section className="mt-6">
                    <h2 className="font-bold text-base mb-2 border-b-2 border-[#6699CC] pb-1">Security & Account Access</h2>
                    <FormRow label="2-Factor-Authentication:">
                        <span>not enabled <a href="#/wip" className="text-[#0059B3] hover:underline">[enable]</a></span>
                    </FormRow>
                    <FormRow label="Active Sessions:">
                        <div className="border border-gray-300">
                           <div className="hidden sm:grid grid-cols-4 font-bold bg-gray-200">
                               <div className="p-1 border-b border-r border-gray-300">Client</div>
                               <div className="p-1 border-b border-r border-gray-300">Device</div>
                               <div className="p-1 border-b border-r border-gray-300">Last used</div>
                               <div className="p-1 border-b border-gray-300">Action</div>
                           </div>
                           <div className="grid grid-cols-1 sm:grid-cols-4">
                               <div className="p-1 border-b border-r-0 sm:border-r border-gray-300"><strong className="sm:hidden">Client: </strong>SpaceHey Web<br/>(this session)</div>
                               <div className="p-1 border-b border-r-0 sm:border-r border-gray-300"><strong className="sm:hidden">Device: </strong>Macintosh Chrome</div>
                               <div className="p-1 border-b border-r-0 sm:border-r border-gray-300"><strong className="sm:hidden">Last used: </strong>a few seconds ago</div>
                               <div className="p-1 border-b sm:border-b-0 border-gray-300"><strong className="sm:hidden">Action: </strong><a href="#/wip" className="text-[#0059B3] hover:underline">logout</a></div>
                           </div>
                        </div>
                    </FormRow>
                </section>

                 <button type="submit" className="mt-6 font-bold text-white bg-[#003399] border-2 border-outset border-[#6699CC] px-4 py-1 cursor-pointer hover:bg-[#0044AA]">
                    Save All
                </button>
            </form>
        </div>
    );
};

export default AccountSettingsForm;
