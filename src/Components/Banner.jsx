import hero from '../assets/hero.png'
import { Link } from 'react-router';
import playStoreIcon from '../assets/icons/playStore.png'
import appStoreIcon from '../assets/icons/appStore.png'

const Banner = () => {
    return (
        <div className='max-w-9/10 mx-auto text-center pt-10 space-y-5'>
            <div className='space-y-3'>
                <h1 className='text-4xl font-bold'>We Build <br /> <span className='text-violet-500'>Productive</span> Apps</h1>
                <p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex flex-col sm:flex-row gap-5 justify-center items-center'>
                <Link to='https://play.google.com/store/apps?hl=en' className='max-w-40 btn py-5 hover:scale-120 duration-700' target='_blank'><img src={playStoreIcon} alt="PlayStore Icon" /> Google Play</Link>
                <Link to='https://www.apple.com/app-store/' className='max-w-40 btn py-5 hover:scale-120 duration-700' target='_blank'><img src={appStoreIcon} alt="AppStore Icon" />App Store</Link>
            </div>
            <figure className='flex justify-center items-center'>
                <img src={hero} alt="" />
            </figure>
        </div>
    );
};

export default Banner;Banner