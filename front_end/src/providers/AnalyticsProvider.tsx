import React from 'react';

const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div>{children}</div>;
};

export default AnalyticsProvider;
