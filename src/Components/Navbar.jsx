import './Navbar.css'
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="shadow-sm">
        <div className="max-w-9/10 mx-auto navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-30 p-2 shadow">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="apps">Apps</NavLink></li>
                <li><NavLink to='installation'>My Installation</NavLink></li>
              </ul>
            </div>
            <figure className="w-10">
              <img src="../../src/assets/logo.png" alt="" />
            </figure>
            <Link to='/' className="text-xl font-bold text-violet-500">HERO.IO</Link>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1 text-2xl">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="apps">Apps</NavLink></li>
              <li><NavLink to='installation'>My Installation</NavLink></li>
            </ul>
          </div>
          <div className="navbar-end">
            <NavLink to='https://github.com/aliraj15dev/my-app-store.git' target="_blank" className="btn text-white bg-gradient-to-r from-blue-700 to-violet-600"><FaGithub />Contribute</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
