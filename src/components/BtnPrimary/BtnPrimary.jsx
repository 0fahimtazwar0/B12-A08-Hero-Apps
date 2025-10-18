import React from 'react';

const BtnPrimary = ({children, onClick}) => {
    return (
        <button onClick={onClick} className='btn primary-gradient text-base font-semibold text-white gap-2.5 rounded-sm w-fit mx-auto'>
            {children}
        </button>
    );
};

export default BtnPrimary;