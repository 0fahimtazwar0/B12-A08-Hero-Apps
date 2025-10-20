import React from 'react';

const PageLoadingSpinner = () => {
    return (
        <div className='min-h-[calc(100vh-(158px+80px))] w-full flex items-center justify-center'>
                               <span className="loading loading-spinner text-primary w-28"></span>
        </div>
    );
};

export default PageLoadingSpinner;