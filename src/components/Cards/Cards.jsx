import React, { use } from 'react';
import Card from '../Card/Card';

const Cards = ({ promise }) => {
    const data = use(promise)
    return (
        <div className='grid grid-cols-4 w-fit mx-auto gap-4'>
            {
                data.map((single, index) => index < 8 && <Card single={single} key={index} />)
            }
        </div>
    );
};

export default Cards;