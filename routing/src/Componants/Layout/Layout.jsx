import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = () => {
 const {pathname} = useLocation() 
 console.log(pathname);
 
  return (
<>
      <Navbar />
      <div className={ `${pathname ==="/" || pathname ==="/About" ?  "bg-[#1abc9c]"  : "bg-white"}  min-h-dvh center`} >
      <div className="container text-center">
      <Outlet/>
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
