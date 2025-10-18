import React from 'react';

const Trusted = () => {
    return (
        <div className='primary-gradient text-white py-20 flex flex-col gap-10'>
            <h2 className='text-5xl font-bold'>Trusted by Millions, Built for You</h2>
            <div className='flex gap-6 justify-center'>
                <Div top='Total Downloads' middle='29.6M' bottom='21% more than last month'/>
                <Div top='Total Reviews' middle='906K' bottom='46% more than last month' />
                <Div top='Active Apps' middle='132+' bottom='31 more will Launch'/>
            </div>
        </div>
    );
};


const Div = ({top, middle, bottom}) => {
    return (
        <div className='max-w-xs w-full'>
            <p>{top}</p>
            <h2 className='text-[4rem] font-extrabold'>{middle}</h2>
            <p>{bottom}</p>
        </div>
    )
}

export default Trusted;