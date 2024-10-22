import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoSearchCircleSharp } from "react-icons/io5";
import { stats } from "../../data/db";

function Firstsub({path}) {
  return (
    <div className=" mb-5 lg:mb-0 flex items-center h-full lg:h-[90dvh] " 
       >
      <div className="flex items-center lg:items-start   lg:flex-row flex-col w-full justify-between relative  h-full lg:h-[90%] ">
        <div className=" flex flex-col lg:items-start items-center w-full lg:w-[40%] ">
          <div>
            <div className="relative lg:flex-row flex-col flex items-center justify-center">
              {path == "service" ?
              (<div>
                <p className="text-[50px] font-bold ">
                  Services  Available at Guver    
                </p>
                
                 <p className="text-[18px] font-extralight mt-5">
                 Guver is not only for urgent call,but to help book appointment and get reminders on current medication.
            </p>
              </div>) : path == "aboutus" ? (<div>
                <p className="text-[50px] font-bold ">
                About us    
                </p>
                
                 <p className="text-[18px] font-extralight mt-5">
                 We offer healthcare byoffering remote acess to medical consultation amd health monitoring.
            </p>
              </div>)
               :
              <div className="flex-col flex justify-center items-center">
                <p className="lg:text-[50px] lg:text-start text-center text-4xl font-bold ">
                  Find & Search Your Favourite Doctor
                </p>
                <img
                  src="/pictures/vec.png"
                  alt=""
                  className="absolute bottom-28 lg:bottom-24 w-1/2 lg:w-[40%]"
                />
                 <p className=" text-center lg:text-start  p-3 lg:text-[18px]  font-extralight mt-5">
              Take the leap and join us today to pave the way for a brighter and healthier tomorrow. Together, we can create a future where your well-being is our top priority.
            </p>
              </div>}
            </div>
           
          </div>

          <div className="flex items-center justify-between w-[80%] lg:w-full  pl-5 lg:px-[30px] mt-4 bg-nurse-400 mb-5 lg:mb-0 rounded-[40px]">
          <div className="flex items-center text-nurse-300">  <IoLocationOutline />
            <select className="outline-none">
              <option value="mainDoc"> Location </option>
              <option value="Ahaed">Tanke</option>
              <option value="Dara">Taiwo</option>
              <option value="Dara">Asa dam</option>
            </select> </div>
            <IoSearchCircleSharp className="w-[55px] h-[53px] text-nurse-300"/>
          </div>
        </div>

        <div className="bg-gradient-to-br to-nurse-100 from-blue-200 flex justify-center h-full lg:h-[78%] w-full   lg:w-[40%] rounded-full overflow-hidden">
          
            
            <img
            src={path === "service" ? "/pictures/Blackservdoc.png" : "/pictures/frontdoc.png"}
            className={` object-cover flex self-end w-[65%] ${path === "service" ? " h-full w-full": " w-[65%]"}`}
            alt=""
          />
          
        </div>

        <div className={`h-[13dvh]  flex justify-center items-center lg:mt-0 -mt-10 lg:absolute w-full left-0 ${path === "service" ? "bottom-20" : "bottom-28" }`}>
          <div className=" bg-nurse-300 flex px-2 lg:px-10 items-center gap-10 justify-between lg:justify-start  h-full w-full">
            {stats.map((stat, id) => (
              <div key={id} className="text-white border-r-2 lg:w-[13%] w-full border-white">
                <h1 className="text-4xl font-bold">{stat.header}</h1>
                <p className="font-normal mt-2 text-xs">{stat.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Firstsub;
