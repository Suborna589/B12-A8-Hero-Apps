import React from 'react';
import logoImg from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router';

const Navbar = () => { 

    const links = <>
  <Link to='/'>  <li className="m-3">Home</li></Link>
   <Link to='/apps'> <li className="m-3">Apps</li></Link>
    <Link to="/installation" className="m-3">Installation </Link> 

    
    </>
    return (
       <div className="navbar  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      {links}
      </ul>
    </div>
  <Link to='/'>  <img src={logoImg} alt="" className='w-[40px]'/></Link>
    <a className="btn btn-ghost text-xl">HERO.IO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="https://github.com/Suborna589" className=" text-white btn bg-linear-to-r from-[#632ee3] to-[#9f62f2]"><FaGithub />Contribute</Link>
  </div>
</div>
    );
};

export default Navbar;