import React from "react";
import RightAppoint from "./rightdash";

function MainDash() {
  return (
    <section className="h-full w-full mx-11 flex flex-row gap-11">
      <div className="w-[45%] h-full flex flex-col justify-between ">
        <div className="flex flex-col justify-between overflow-hidden bg-dash-300 rounded-3xl pl-10 pt-5 h-[40%] gap-5">
          <p className="text-3xl font-semibold"> Good Morning, Jayne</p>
          <p className="text-xl font-light">
            You have 6 Health task for the day
          </p>
          <img src="/pictures/FlowerDash.png" className="w-72 " alt="" />
        </div>

        <div className="h-[55%] overflow-hidden p-3  bg-dash-300 rounded-3xl flex justify-around  ">
          <div className="flex flex-col  justify-around">
            {" "}
            <img src="/pictures/w45kg.png" className="w-48" alt="" />
            <img src="/pictures/fitness.png" className="w-56" alt="" />
          </div>
          <div className="flex flex-col h-full justify-between gap-3">
            {" "}
            <img src="/pictures/sleepstat.png" className="w-28" alt="" />
            <img src="/pictures/streeschat.png" className="w-28" alt="" />
            <img src="/pictures/heartrate.png" className="w-28" alt="" />
          </div>
        </div>
      </div>

      <div className="w-[45%] bg-dash-300 rounded-2xl ">
        <RightAppoint />
      </div>
    </section>
  );
}

export default MainDash;
