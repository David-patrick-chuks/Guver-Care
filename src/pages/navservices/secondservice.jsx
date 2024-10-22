import React from 'react'
import { servoffsec } from '../../data/db';
import { Link, useNavigate } from "react-router-dom";


function Secondservice() {
  const navigate = useNavigate();
    const handleNextPage = (path) => {
        navigate(path);
      };
  return (
    <div className='py-14 px-[75px] w-full '  style={{ backgroundImage: `url("/pictures/Frame.jpg")`}}>
        <p className='text-4xl font-bold border-b border-blue-500 pb-20'>Our Services</p>
        <div className="flex mt-24 justify-between w-full">
        {servoffsec.map((serv, id) => (
          <div
            key={id}
            className="flex flex-col w-[18%] justify-between items-start h-[280px] bg-white border border-white shadow-[12px_17px_51px_rgba(0,0,0,0.22)] backdrop-blur-md rounded-[17px]  cursor-pointer transition-all duration-500  select-none font-extrabold text-black hover: hover:scale-105 active:scale-95 active:rotate-[1.7deg] p-4"
          >
            <img src={serv.img} className="w-full" alt="" />
            <h1 className="font-bold text-sm ">{serv.head}</h1>
            <h3 className="font-normal text-xs text-nurse-600 ">{serv.desc}</h3>
            <button className="bg-nurse-300 rounded-lg text-white font-normal w-fit py-1 px-3 text-sm" onClick={() => handleNextPage("/login")}>
              {serv.last}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Secondservice;