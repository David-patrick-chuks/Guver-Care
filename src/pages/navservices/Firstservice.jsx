import React from "react";
import { servoff } from "../../data/db";
import { Link, useNavigate } from "react-router-dom";


function Firstservice() {
  const navigate = useNavigate();
    const handleNextPage = (path) => {
        navigate(path);
      };
  return (
    <div className="mb-16">
      <p className="text-4xl font-medium text-center">
        See Below for the list of services offered at GuaverCare
      </p>

      <div className="flex mt-14 justify-center gap-12 ">
        {servoff.map((serv, id) => (
          <div
            key={id}
            className="flex flex-col w-[220px] ml-4 gap-2 h-[280px] bg-white border border-white shadow-[12px_17px_51px_rgba(0,0,0,0.22)] backdrop-blur-md rounded-[17px]  cursor-pointer transition-all duration-500   justify-center select-none font-extrabold text-black hover: hover:scale-105 active:scale-95 active:rotate-[1.7deg] px-4"
          >
            <img src={serv.img} className="w-40 h-24" alt="" />
            <h1 className="font-bold text-sm ">{serv.head}</h1>
            <h3 className="font-normal text-sm text-nurse-600 ">{serv.desc}</h3>
            <button className="bg-nurse-300 rounded-lg text-white font-normal mr-8 py-1 text-sm" onClick={() => handleNextPage("/login")}>
              {serv.last}
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Firstservice;
