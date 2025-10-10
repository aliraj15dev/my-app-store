import Banner from '../Components/Banner';
import StatesSection from '../Components/StatesSection';
import TopApps from '../Components/TopApps';
import logo from '../assets/logo.png'
import useApps from '../Hooks/useApps';

const Home = () => {

  const {loading} = useApps()

      if (loading){
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