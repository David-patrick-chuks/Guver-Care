import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaFile } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoClock } from "react-icons/go";
import { MdNotificationsNone } from "react-icons/md";
import { CiUser } from "react-icons/ci";

function Navdash() {
  return (
    <nav className="flex mb-4 items-center">
    

      <div className="flex w-[100%] bg-dash-200 items-center rounded-xl p-2 text-sm">
        <div className="flex w-[65%]  bg-dash-300 items-center px-3 py-2 rounded-xl ml-2">
          <IoMdSearch />
          <input
            type="text" className="bg-dash-300 w-[60%]"
            placeholder="Search appointment and doctors names"
          />
        </div>
      <div className="flex items-center ml-8 justify-between gap-7 text-sm">
        <div className="flex bg-dash-400 rounded-md items-center gap-2 p-2">
          <FaFile />
          <h1 className="mr-14">Exportsummary</h1>
          <RiArrowDropDownLine  size={25}/>
        </div>
        <GoClock size={30} className="bg-white rounded-xl p-1"/>
        <MdNotificationsNone size={30} className="bg-white rounded-xl p-1"/>
        <CiUser size={30} className="bg-white rounded-xl p-1"/>
      </div>
      </div>

    </nav>
  );
}

export default Navdash;
