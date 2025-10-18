import React from 'react';
import { FaStar } from 'react-icons/fa';
import { TbDownload } from 'react-icons/tb';

const Card = ({img}) => {
    return (
        <div className='bg-white w-fit flex flex-col gap-4 p-4 rounded-sm shadow-[0_10px_20px_-12px_rgba(0,0,0,0.10)]'>
            {!img ? <img src='https://play-lh.googleusercontent.com/7xe4HwAUuehKpNfWi4cAjVmtpdQIft6aoyWl-wX05UcI3FPE9xsVSP21Gcf22nCtqrmlkyo7udpzhnN-worHdQ=w240-h480-rw' alt="Card Image" /> : <div className='h-80 aspect-square bg-[#D9D9D9] rounded-lg'></div>}
            
            <p className='text-left'>Forest: Focus for Productivity</p>
            <div className='flex justify-between'>
                <div className='py-1.5 px-2.5 flex items-center gap-2 rounded-sm bg-[#F1F5E8]'><TbDownload size='16px'/> 9M</div>
                <div className='py-1.5 px-2.5 flex items-center gap-2 rounded-sm bg-[#FFF0E1]'><FaStar size='16px'/> 5</div>
            </div>
        </div>
    );
};

export default Card;