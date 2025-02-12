import React from 'react';
import { Link,NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=' fixed top-0 right-0 left-0 z-10 bg-[#2c3e50] py-10'>
      <div className='container flex justify-between'>
        <h1>
          <Link className='uppercase text-white font-bold text-2xl' to={""}>
          Start Framework
          </Link>
        </h1>
      <ul className='center gap-4 '>
        
        <li><NavLink className={'uppercase text-white font-bold p-4'}  to="About">About</NavLink></li>
        <li><NavLink className={'uppercase text-white font-bold  p-4'} to="portoflio">Portoflio</NavLink></li>
        <li><NavLink className={'uppercase text-white font-bold  p-4'} to="contact">Contact</NavLink></li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
