import React from 'react';
import { FaStar } from 'react-icons/fa';
import { TbDownload } from 'react-icons/tb';
import { Link } from 'react-router';
import { shortNum } from '../../utilities/shortNum/shortNum';

const Card = ({ single }) => {
    let { image, title, ratingAvg, downloads, id } = single
    
    downloads = shortNum(downloads)
    return (
        <Link to={`/app/${id}`}>
            <div className='bg-white w-fit flex flex-col gap-4 p-4 rounded-sm shadow-[0_10px_20px_-12px_rgba(0,0,0,0.10)]'>
            {image ? <img className='w-80 aspect-square rounded-lg' src={image} alt="Card Image" /> : <div className='h-80 aspect-square bg-[#D9D9D9] rounded-lg'></div>} 
            <p className='text-left flex-1 text-xl font-medium text-[#001931]'>{title}</p>
            <div className='flex justify-between'>
                <div className='py-1.5 px-2.5 flex items-center gap-2 rounded-sm bg-[#F1F5E8] text-[#00D390] font-medium'><TbDownload size='16px' /> {downloads}</div>
                <div className='py-1.5 px-2.5 flex items-center gap-2 rounded-sm bg-[#FFF0E1] text-[#F81] font-medium'><FaStar size='16px' /> {ratingAvg}</div>
            </div>
        </div>
        </Link>
    );
};

export default Card;