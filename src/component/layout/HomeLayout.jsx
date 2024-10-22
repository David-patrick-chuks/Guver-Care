import React from "react";
import Navbar from "../homepage/navbar";
import { Outlet,  useLocation } from "react-router-dom";
import Footer from "../homepage/footer";

function HomeLayout() {
  
  const location = useLocation(); 
  const  hideLocation = ['/login',  '/create', '/forgot','/newpass', ];

  
  return (
    <div   
    className=" bg-no-repeat "  
    style={{ backgroundImage: `url("/pictures/Frame.jpg")` , opacity: 1 }}>
       {!hideLocation.includes(location.pathname) && <Navbar />}
      <main className=''>
        <Outlet />
      </main>
      {/* Render Footer only if the current path is not in the noFooterPaths array */}  
      {!hideLocation.includes(location.pathname) && <Footer />} 
    </div>
  );
}

export default HomeLayout;
