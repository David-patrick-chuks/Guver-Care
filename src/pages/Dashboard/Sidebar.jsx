import React from "react";
import { Dashboardhome } from "../../data/db";
import { NavLink } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { TbHelpSquare } from "react-icons/tb";
import StarRate from "./StarRate";

function Sidebar() {
  const withoutLogout = Dashboardhome.filter(
    (dash) => dash.path !== "logout" && dash.path !== "general"
  );

  const withLogout = [
    {
      icon: FiSettings,
      head: "General",
      path: "general",
    },
    {
      icon: RiLogoutBoxLine,
      head: "Logout",
      path: "/login",
    },
    {
      icon: TbHelpSquare,
      head: "Help Center",
      path: "Help",
    },
  ];

  return (
    <div className="h-full flex  w-full  ">
      <div className="h-full flex flex-col w-full  justify-between">
      <div className="flex">
        <img src="/pictures/logo.png" className="w-12" alt="" />
        <h1 className="text-dash-100 text-end text-lg font-semibold">
          GuverCare
        </h1>
      </div>
        <div className="rounded-3xl bg-dash-300 text-lg p-4 gap-5 flex flex-col ">
          {" "}
          {withoutLogout.map((dash, id) => {
            const { path, head } = dash;
            return (
              <NavLink
                key={id}
                className={({ isActive }) =>
                  isActive
                    ? "text-nurse-300 font-normal flex items-center gap-2"
                    : " font-normal flex items-center gap-2"
                }
                to={path}
              >
                <dash.icon className="text-xl" />
                {head}
              </NavLink>
            );
          })}
        </div>

        <h1 className="text-xl font-normal px-4 ">Settings</h1>
        <div className="rounded-3xl bg-dash-300  p-4 text-lg flex flex-col gap-5">
          {withLogout.map((dash, id) => {
            const { path, head } = dash;
            return (
              <div>
                {" "}
                <NavLink
                  key={id}
                  className={({ isActive }) =>
                    isActive
                      ? "text-nurse-300 font-normal flex items-center gap-2"
                      : " font-normal flex items-center gap-2"
                  }
                  to={path}
                >
                  <dash.icon />
                  {head}
                </NavLink>{" "}
              </div>
            );
          })}
        </div>

        <div className=" flex items-center  text-lg  p-4">
          <h1 className="font-medium text-nurse-300">Ratings</h1>
          <h1 className="flex px-3">
            <StarRate />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
