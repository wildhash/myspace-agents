import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="text-center p-10 bg-gray-100 border-2 border-dashed border-gray-400 m-4">
      <h1 className="text-4xl font-bold mb-4">🚧 We Are Under Construction 🚧</h1>
      <p className="text-lg mb-6">
        Sorry, the page you're looking for isn't ready yet. We're working hard to build it!
      </p>
      <a
        href="#"
        className="bg-[#003399] text-white font-bold px-6 py-2 rounded-md hover:bg-blue-800 transition-colors"
      >
        Go Back to Homepage
      </a>
    </div>
  );
};

export default NotFoundPage;
