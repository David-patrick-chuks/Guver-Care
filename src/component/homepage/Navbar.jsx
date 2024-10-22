import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { NavBarLinks } from "../../data/db";
import { MdClose, MdMenu } from "react-icons/md";

function Navbar() {



  const [mobileNav, setMobileNav] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMobileNav(!mobileNav);
  };

  const handleRegister = (path) => {
    navigate(path);
    setMobileNav(false);
  };
  const returnHome = () => {
    setMobileNav(false);
    navigate("/");
  };
  return (
    <div className="flex cursor-pointer relative flex-col">
      <nav className="flex  w-full  items-center justify-between  lg:px-[75px] px-5 py-3  lg:py-8 ">
        <div
          onClick={returnHome} className="flex w-[20%]  items-end">
          <img src="/pictures/logo.png" className="w-10" alt="" />
          <p>GuverCare</p>
        </div>

        <div className="lg:flex hidden justify-between px-16 text-base items-center w-[40%] font-normal ">
          {NavBarLinks.map((link, i) => (
            <NavLink
              to={link.path}
              key={i}
              className={({ isActive }) =>
                isActive
                  ? " text-nurse-300 font-semibold"
                  : "  text-black font-normal"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="lg:flex hidden justify-between px-5 items-center w-[35%]">
          <button
            className="py-[7px] px-[40px] border-solid border-[3px] rounded-[40px] "
            style={{
              borderColor: "rgb(1, 123, 255)",
              color: "rgb(1, 123, 255)",
              cursor: "pointer",
            }}
            onClick={() => handleRegister("/login")}
          >
            Log in
          </button>
          <button
            className="py-[10px] px-[40px] text-white  rounded-[40px] "
            style={{ backgroundColor: "rgb(1, 123, 255)", cursor: "pointer" }}
            onClick={() => handleRegister("create")}
          >
            Create account
          </button>
        </div>
        <div className="flex lg:hidden" onClick={toggleMenu}>
         {
          mobileNav ? ( <MdClose size={40} />) : ( <MdMenu size={40} />)
         }
        </div>
      </nav>
      {
        mobileNav && (<div className="flex lg:hidden py-5 gap-4 text-2xl flex-col bg-white w-full justify-between px-16 items-center font-normal ">
          {NavBarLinks.map((link, i) => (
            <NavLink
            onClick={toggleMenu}
              to={link.path}
              key={i}
              className={({ isActive }) =>
                isActive
                  ? " text-nurse-300 hover:font-bold font-semibold"
                  : "  text-black font-normal"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>)
      }
    </div>
  );
}

export default Navbar;
