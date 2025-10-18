import React from 'react';
import { Link } from 'react-router';

const BtnPrimary = ({ children, onClick, to }) => {
    
const Btn = () => {
    return( <button onClick={onClick} className='btn primary-gradient text-base font-semibold text-white gap-2.5 rounded-sm w-fit mx-auto'>
            {children}
        </button>)}


    return (
    <>
        {to ? <Link to={to}> <Btn/> </Link> : <Btn />}
        
            
    </>
    );
};



export default BtnPrimary;