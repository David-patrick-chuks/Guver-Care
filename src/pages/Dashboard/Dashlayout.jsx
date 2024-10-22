import React from "react";
import { Outlet } from "react-router-dom";
import Navdash from "./Navdash";
import Sidebar from "./Sidebar";

function Dashlayout() {
  return (
    <div className="flex overflow-y-hidden h-screen p-3">
      <div className=" w-[20%] h-screen   ">
        <Sidebar />
      </div>
      <div className="flex overflow-y-scroll flex-col w-[80%]">
        <div>
          <Navdash />
        </div>
        <main className="  h-full w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Dashlayout;
