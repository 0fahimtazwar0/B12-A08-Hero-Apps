import React from 'react';
import image from '/src/assets/App-Error.png'
import { useNavigate } from 'react-router';
const AppError = () => {
    const navigate = useNavigate()
    return (
        <div className='min-h-[calc(100vh-(158px+80px))] flex flex-col items-center justify-center gap-4'>
            <div className='pb-7'><img src={image} alt="App Not Found Image" /></div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-[#001931] text-5xl font-semibold'>OPPS!! APP NOT FOUND</h1>
                <p className='text-[#627382] text-xl'>The App you are requesting is not found on our system.  please try another apps</p>
            </div>
            <button className='btn primary-gradient w-[150px] h-12 text-white font-semibold text-base' onClick={()=>navigate(-1)}>Go Back!</button>
        </div>
    );
};

export default AppError;