import React from 'react';

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div>{children}</div>;
};

export default ThemeProvider;
