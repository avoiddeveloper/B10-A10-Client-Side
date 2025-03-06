import React from 'react';

const Loading = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <span className="loading loading-spinner text-error"></span>
        </div>
    );
};

export default Loading;