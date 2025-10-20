import React from 'react';

const Description = ({description}) => {
    return (
        <div className='text-left'>
            <h3 className="text-[#001931] text-2xl font-semibold mb-6">Description</h3>
            <p className='text-[#627382] text-xl'>{description}</p>
        </div>
    );
};

export default Description;