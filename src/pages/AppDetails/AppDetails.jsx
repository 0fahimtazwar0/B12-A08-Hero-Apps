import React, { Suspense, use } from 'react';
import { Navigate, useParams } from 'react-router';
import InstallCard from '../../components/InstallCard/InstallCard';
import RatingChart from '../../components/RatingChart/RatingChart';
import Description from '../../components/Description/Description';
import AppError from '../AppError/AppError';
import PageLoadingSpinner from '../../components/PageLoadingSpinner/PageLoadingSpinner';

const AppDetailsLoaded = ({promise}) => {
    const { id } = useParams();
    const data = use(promise);
    let count=0;
    data.map(single => single.id != id && count++)
    if (count == data.length) {
        return(<AppError/>)
    }
    return (
        <div className='max-width'>
            {
                data.map(single => single.id == id && <Details single={single} key={single.id}/> )
            }
            <div>
    
            </div>
        </div>
    );
};


const Details = ({single}) => {
    return (
        <>
            <InstallCard single={single} />
            <Line/>
            <RatingChart ratings={single.ratings} />
            <Line/>
            <Description description={single.description}/>
        </>
    );
};



const Line = () => {
    return (
        <div className='my-10'>
            <hr className='w-full h-[1px] opacity-20 text-[#001931]'/>
        </div>
    );
};

const AppDetails =()=>{
   const promise = fetch('https://raw.githubusercontent.com/0fahimtazwar0/B12-A08-Hero-Apps/refs/heads/main/public/Data/Data.json').then(res => res.json());
       return(
           <Suspense fallback={<PageLoadingSpinner/>}>
                   <AppDetailsLoaded promise={promise}/>
               </Suspense>
       )
}
export default AppDetails;