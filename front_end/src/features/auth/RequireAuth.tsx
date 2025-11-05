import React from 'react';

const RequireAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div>{children}</div>;
};

export default RequireAuth;
