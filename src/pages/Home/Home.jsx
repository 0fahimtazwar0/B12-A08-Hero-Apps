import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Trusted from '../../components/Trusted/Trusted';
import TrendingApps from '../../components/TrendingApps/TrendingApps';

const Home = () => {
    return (
        <div>
            <Banner />
            <Trusted />
            <TrendingApps />
        </div>
    );
};

export default Home;