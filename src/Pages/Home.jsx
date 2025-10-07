import React from 'react';
import Banner from '../Components/Banner';
import StatusSection from '../Components/StatusSection';

const Home = () => {
    return (
        <div className='bg-gray-100'>
            <Banner/>
            <StatusSection/>
        </div>
    );
};

export default Home;