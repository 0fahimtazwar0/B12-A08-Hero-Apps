import React, { Suspense, use, useEffect, useState } from 'react';
import { getAppsDB } from '../../utilities/AddToDB/AddToDb';
import InstalledCard from '../../components/InstalledCard/InstalledCard';
import PageLoadingSpinner from '../../components/PageLoadingSpinner/PageLoadingSpinner';

const InstalledLoaded = ({promise}) => {
    const data = use(promise)
 
    const [storedApps, setStoredApps] = useState(getAppsDB());
    
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        const filtered = data.filter(single => storedApps.includes(single.id))
        setNewData(filtered)
    }, [data, storedApps])

    const handleSort =(e)=>{
        const demo2 = [...newData] 
        if(e.target.value== 'low2high'){
            setNewData(demo2.sort((a,b)=> a.downloads -b.downloads))
        }
        else if(e.target.value== 'high2low'){
            setNewData(demo2.sort((a,b)=> b.downloads -a.downloads))
        }
        else{
            const filtered = data.filter(single => storedApps.includes(single.id))
            setNewData(filtered)
        }
    }
    return (
        <div>
            <div className='flex flex-col gap-4 mb-10'>
            <h1 className='text-[#001931] text-5xl font-bold'>Your Installed Apps</h1>
            <p className='text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
        <div className='max-width text-left flex flex-col gap-4'>
            <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-semibold text-[#001931]'>{storedApps.length} Apps Found</h2>
                
                <select defaultValue="Sort By Downloads" className="select w-48" onChange={handleSort}>
                    <option>Sort By Downloads</option>
                    <option value={'high2low'}>High-Low</option>
                    <option value={'low2high'}>Low-High</option>
                </select>
            </div>
            <div className='flex flex-col gap-4 min-h-[calc(100vh-(338px+80px))]'>
                {newData.map(single => <InstalledCard key={single.id} single={single} setStoredApps={setStoredApps} getAppsDB={getAppsDB} />)}
                
                {
                    storedApps.length == 0 && <div className='w-full min-h-[calc(100vh-(338px+80px))] flex justify-center text-gray-400 items-center pb-[5%]'><h1 className='text-center font-bold text-4xl'>Nothing Here :/</h1> </div>       
                }     
            </div>
        </div>
    </div>
    );
};

const Installed = () => {
    const promise = fetch('https://raw.githubusercontent.com/0fahimtazwar0/B12-A08-Hero-Apps/refs/heads/main/public/Data/Data.json').then(res => res.json());
        return(
            <Suspense fallback={<PageLoadingSpinner/>}>
                    <InstalledLoaded promise={promise}/>
                </Suspense>
        )
}

export default Installed;