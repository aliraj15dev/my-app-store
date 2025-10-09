import './Navbar.css'
import { Link, NavLink } from "react-router";
import { FaAppStore, FaGithub } from "react-icons/fa";
import logo from '../assets/logo.png'
import { TiHomeOutline } from 'react-icons/ti';
import { MdInstallDesktop } from 'react-icons/md';

const Navbar = () => {
  return (
    <>
      <nav className="shadow-sm">
        <div className="max-w-9/10 mx-auto navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-30 p-2 shadow">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="apps">Apps</NavLink></li>
                <li><NavLink to='installation'>Installation</NavLink></li>
              </ul>
            </div>
            <Link to='/' className='flex gap-2'>
              <figure className="w-10">
                <img src={logo} alt="" />
              </figure>
              <button className="hidden sm:block text-xl font-bold text-violet-500">HERO.IO</button>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-2xl">
              <li className='mr-5'><NavLink to="/"><TiHomeOutline />Home</NavLink></li>
              <li className='mr-5'><NavLink to="apps"><FaAppStore />Apps</NavLink></li>
              <li><NavLink to='installation'><MdInstallDesktop />My Installation</NavLink></li>
            </ul>
          </div>
          <div className="navbar-end">
            <NavLink to='https://github.com/aliraj15dev' target="_blank" className="btn text-white bg-gradient-to-r from-blue-700 to-violet-600"><FaGithub />Contribute</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
