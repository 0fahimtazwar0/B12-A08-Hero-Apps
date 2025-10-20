import React, { use } from 'react';
import Card from '../Card/Card';

let Cards = ({search, promise, num, data }) => {
    let count = 0;
    if (search) {
        data = use(promise)
        return (
        <>
        <div className='grid grid-cols-4 w-fit mx-auto gap-4'>
            {
                data.map((single, index) => (single.title.toLowerCase()).includes(search.toLowerCase()) && ++count && <Card single={single} key={index} />)
            }
        </div>
            { count == 0 && <div className='w-full min-h-[calc(100vh-(338px+80px))] flex justify-center text-gray-400 items-center'><h1 className='text-center font-bold text-4xl'>No App Found :/</h1> </div> }
        </>
        )
    }
    return (
        <div className='grid grid-cols-4 w-fit mx-auto gap-4'>
            {
                data.map((single, index) => index < num && <Card single={single} key={index} />)
            }
        </div>
    );
};

export default Cards;