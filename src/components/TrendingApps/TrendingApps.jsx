import React, { Suspense } from 'react';
import Cards from '../Cards/Cards';
import BtnPrimary from '../BtnPrimary/BtnPrimary';

const TrendingApps = () => {
    const promise = fetch('https://raw.githubusercontent.com/0fahimtazwar0/B12-A08-Hero-Apps/refs/heads/main/public/Data/Data.json').then(res => res.json());

    return (
        <div className='my-20 flex flex-col gap-10'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-[#001931] text-5xl font-bold'>Trending Apps</h1>
            <p className='text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <Suspense fallback={
                <div className='h-[911.823px] w-full flex items-center justify-center'>
                    <span class="loading loading-spinner text-primary w-28"></span>
                </div>
            }>
                <Cards promise={promise} />
            </Suspense>
           
            <BtnPrimary>
                Show All
            </BtnPrimary>
        </div>
    );
};

export default TrendingApps;