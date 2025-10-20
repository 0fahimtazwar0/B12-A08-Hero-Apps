import React, { Suspense, use } from 'react';
import Banner from '../../components/Banner/Banner';
import Trusted from '../../components/Trusted/Trusted';
import TrendingApps from '../../components/TrendingApps/TrendingApps';
import PageLoadingSpinner from '../../components/PageLoadingSpinner/PageLoadingSpinner';

const HomeLoaded = ({promise}) => {
const data = use(promise)
    return (
        <div>
            <Banner />
            <Trusted />
            <TrendingApps data={data}/>
        </div>
    );
};


const Home = ()=>{
    const promise = fetch('https://raw.githubusercontent.com/0fahimtazwar0/B12-A08-Hero-Apps/refs/heads/main/public/Data/Data.json').then(res => res.json());
        return(
        <Suspense fallback={<PageLoadingSpinner/>}>

        <HomeLoaded promise ={promise}/>    
        </Suspense>
    )
}
export default Home;