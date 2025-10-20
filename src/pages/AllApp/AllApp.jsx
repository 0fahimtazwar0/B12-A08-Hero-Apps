import React, { Suspense, use, useState } from 'react';
import Cards from '../../components/Cards/Cards';
import PageLoadingSpinner from '../../components/PageLoadingSpinner/PageLoadingSpinner';
// import { useLoaderData } from 'react-router';

const AllAppLoaded = ({promise}) => {
    const data = use(promise)
    
    const [search, setSearch] = useState('');
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const promise2 = fetch('https://raw.githubusercontent.com/0fahimtazwar0/B12-A08-Hero-Apps/refs/heads/main/public/Data/Data.json').then(res => res.json());
    return (
        <div>
            <div className='max-width'>
            <div className='flex flex-col gap-4'>
            <h1 className='text-[#001931] text-5xl font-bold'>Our All Applications</h1>
            <p className='text-xl text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between items-center mt-10 mb-4'>
            <p className='text-2xl font-semibold text-[#001931]'>({data.length}) Apps Found</p>


            <label className="input bg-transparent">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
                >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
                </g>
            </svg>
            <input type="search" onChange={handleSearch} placeholder="Search Apps" />
            </label>
                
            </div>
            </div>
            <Suspense fallback={<div className='min-h-[calc(100vh-(338px+80px))] w-full flex items-center justify-center'>
                               <span className="loading loading-spinner text-gray-400 w-28"></span></div>}>
                <Cards search={search} promise={promise2} data={data} num={99999} />
            </Suspense>
        </div>
    );
};



const AllApp =()=>{
    const promise = fetch('https://raw.githubusercontent.com/0fahimtazwar0/B12-A08-Hero-Apps/refs/heads/main/public/Data/Data.json').then(res => res.json());
    return(
        <Suspense fallback={<PageLoadingSpinner/>}>
                <AllAppLoaded promise={promise}/>
            </Suspense>
    )
}
export default AllApp;