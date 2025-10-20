import React from 'react';
import image from '/src/assets/error-404.png'
import { useNavigate } from 'react-router';
const Error = () => {
    const navigate = useNavigate()
    return (
        <div className='min-h-[calc(100vh-(158px+80px))] flex flex-col items-center justify-center gap-4'>
            <div className='pb-7'><img src={image} alt="404 Image" /></div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-[#001931] text-5xl font-semibold'>Oops, page not found!</h1>
                <p className='text-[#627382] text-xl'>The page you are looking for is not available.</p>
            </div>
            <button className='btn primary-gradient w-[150px] h-12 text-white font-semibold text-base' onClick={()=>navigate(-1)}>Go Back!</button>
        </div>
    );
};

export default Error;