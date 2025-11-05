import React from 'react';

const ProfileInfoWidget: React.FC = () => {
  const links = [
    { text: "Edit Profile", href: "#/profile/edit" },
    { text: "Edit Your Links", href: "#/profile/links" },
    { text: "Add/Edit Photo", href: "#/wip" },
    { text: "Manage Blog", href: "#/wip" },
    { text: "Account Settings", href: "#/settings" }
  ];
  
  const viewMyLinks = [
    { text: "Profile", href: "#/view-profile" },
    { text: "Blog", href: "#/wip" },
    { text: "Layouts", href: "#/wip" },
    { text: "Friends", href: "#/wip" },
    { text: "Blocks", href: "#/wip" },
    { text: "Requests", href: "#/wip" },
  ];

  return (
    <div className="bg-[#D5E8FB] border-2 border-[#6699CC] px-2.5 pt-1 pb-6">
      <h2 className="text-2xl font-bold text-black pb-6">Hello, matter!</h2>
      <div className="flex gap-2.5">
        <img src="https://placehold.co/150x180/EFEFEF/333333?text=Profile\nPhoto" alt="User profile" className="w-[150px] h-[180px] object-cover flex-shrink-0" />
        <div className="flex flex-col justify-center space-y-2 text-sm font-bold text-[#0059B3]">
          {links.map(link => (
            <a key={link.text} href={link.href} className="hover:underline">{link.text}</a>
          ))}
        </div>
      </div>
      <div className="mt-2.5 text-sm">
        <p className="font-bold">
          View My: {viewMyLinks.map((link, index) => (
            <React.Fragment key={link.text}>
              <a href={link.href} className="font-normal text-[#0059B3] hover:underline">{link.text}</a>
              {index < viewMyLinks.length - 1 && ' | '}
            </React.Fragment>
          ))}
        </p>
        <p className="font-bold mt-1">
          My URL: <a href="#/wip" className="font-normal text-[#0059B3] hover:underline">https://spacehey.com/profile?id=4298956</a>
        </p>
      </div>
    </div>
  );
};

export default ProfileInfoWidget;
