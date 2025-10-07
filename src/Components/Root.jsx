import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Root;