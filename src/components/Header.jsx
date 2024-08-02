import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {

  const links = <>
      <li className='text-[#131313CC] text-lg'><NavLink to={'/'} className={({isActive})=> isActive? 'text-[#23BE0A] font-semibold border-2 border-[#23BE0A] rounded-lg' : ''}>Home</NavLink></li>
      <li className='text-[#131313CC] text-lg'><NavLink to={'/bookList'} className={({isActive})=> isActive? 'text-[#23BE0A] font-semibold border-2 border-[#23BE0A] rounded-lg' : ''}>Listed Books</NavLink></li>
      <li className='text-[#131313CC] text-lg'><NavLink to={'/pagesToRead'} className={({isActive})=> isActive? 'text-[#23BE0A] font-semibold border-2 border-[#23BE0A] rounded-lg' : ''}>Pages to Read</NavLink></li>
  </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl text-[#131313] font-bold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4">
       {links}
    </ul>
  </div>
  <div className="navbar-end text-lg font-semibold gap-4">
    <a className="btn text-[#FFFFFF] px-7 bg-[#23BE0A] rounded-lg">Sign In</a>
    <a className="btn text-[#FFFFFF] px-7 bg-[#59C6D2] rounded-lg">Sign Up</a>
  </div>
</div>
        </div>
    );
};

export default Header;