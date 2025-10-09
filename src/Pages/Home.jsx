import { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import StatesSection from '../Components/StatesSection';
import TopApps from '../Components/TopApps';
import logo from '../assets/logo.png'

const Home = () => {

    const [delayOver, setDelayOver] = useState(false)
      useEffect(() => {
        const timer = setTimeout(() => setDelayOver(true), 300)
        return () => clearTimeout(timer)
      }, [])

      if (!delayOver){
        return (
          <div className="flex justify-center items-center h-screen bg-gray-100">
            <img src={logo} className="w-30 animate-spin"></img>
          </div>
        )
      }

    return (
        <div className='bg-gray-100'>
            <Banner/>
            <StatesSection/>
            <TopApps/>
        </div>
    );
};

export default Home;