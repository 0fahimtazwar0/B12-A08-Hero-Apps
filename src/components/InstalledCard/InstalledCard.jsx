import React from 'react';
import { shortNum } from '../../utilities/shortNum/shortNum';
import { TbDownload } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa';
import { removeDB } from '../../utilities/removeDB/removeDB';
import { toast } from 'react-toastify';

const InstalledCard = ({ single, setStoredApps, getAppsDB }) => {
    let { title, image, downloads, ratingAvg, size, id } = single
    downloads = shortNum(downloads);

    const handleUninstall = () => {
        removeDB(id)
        setStoredApps(getAppsDB)
        toast.warn('App Uninstalled Successfully')
    }
    return (
        <div className='bg-white w-full p-4 rounded-sm flex justify-between items-center'>
            <div className='flex gap-4 items-center'>
                <div className='w-20 aspect-square'><img className='rounded-lg' src={image} alt={`${title} Logo`} /></div>
                <div className='flex flex-col gap-4'>
                    <div className='text-[#001931] text-xl font-medium'>{title}</div>
                        <div className='flex gap-4'>
                            <div className='flex items-center gap-1 rounded-sm text-[#00D390] font-medium'><TbDownload size='16px' /> {downloads}</div>
                            <div className='flex items-center gap-1 rounded-sm text-[#F81] font-medium'><FaStar size='16px' /> {ratingAvg}</div>
                            <div className='text-[#627382]'>{size} MB</div>
                        </div>
                </div>
            </div>
            <div>
                <button onClick={handleUninstall} className='btn bg-[#00D390] py-3 px-4 text-base font-semibold text-white'>Uninstall</button>
            </div>
        </div>
    );
};

export default InstalledCard;