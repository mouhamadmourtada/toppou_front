import React from 'react';

const IndiquePage = ({children, className}) => {
    return (
        <div>
            <p className={`font-bold text-lg ${className}`}>
                {children}
            </p>
        </div>
    );
}

export default IndiquePage;
