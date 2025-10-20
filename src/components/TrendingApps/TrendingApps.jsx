import React, { Suspense } from 'react';
import { Link } from "react-router";
import Cards from '../Cards/Cards';
import BtnPrimary from '../BtnPrimary/BtnPrimary';
import PageLoadingSpinner from '../PageLoadingSpinner/PageLoadingSpinner';

const TrendingApps = ({data}) => {

    return (
        <div className='mt-20 flex flex-col gap-10'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-[#001931] text-5xl font-bold'>Trending Apps</h1>
            <p className='text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
                <Cards data={data} num={8} />
                <BtnPrimary to='/all-apps'>
                Show All
                </BtnPrimary>
        </div>
    );
};

export default TrendingApps;