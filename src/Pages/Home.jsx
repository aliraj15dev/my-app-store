import React from 'react';
import Banner from '../Components/Banner';
import StatesSection from '../Components/StatesSection';
import TopApps from '../Components/TopApps';

const Home = () => {
    return (
        <div className='bg-gray-100'>
            <Banner/>
            <StatesSection/>
            <TopApps/>
        </div>
    );
};

export default Home;