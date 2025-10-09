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
            <div className="flex text-6xl items-center">
              L <img src={logo} className="w-8 h-8 animate-spin" alt="loading..."/> A D I N G
            </div>
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