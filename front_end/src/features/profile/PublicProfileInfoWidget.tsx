import React from 'react';

const PublicProfileInfoWidget: React.FC = () => {
  const viewMyLinks = ["Blog", "Bulletins", "Forum Topics"];

  return (
    <div className="p-2.5 text-center">
      <img src="https://placehold.co/200x220/EFEFEF/333333?text=Profile\nPhoto" alt="User profile" className="w-[200px] h-[220px] object-cover mx-auto" />
      <div className="relative -top-6 text-center">
        <span className="bg-white px-2 text-green-600 font-bold text-sm">
          <a href="#/wip" className="hover:underline">[edit]</a> ONLINE!
        </span>
      </div>
      <div className="text-sm text-left -mt-2">
        <p><span className="font-bold">Mood:</span> <a href="#/wip" className="text-[#6699CC] hover:underline">[edit]</a></p>
        <p className="font-bold">
          View my: {viewMyLinks.map((link, index) => (
            <React.Fragment key={link}>
              <a href="#/wip" className="font-normal text-[#0059B3] hover:underline">{link}</a>
              {index < viewMyLinks.length - 1 && ' | '}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default PublicProfileInfoWidget;
