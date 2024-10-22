import React from "react";
import { hospitems } from "../../data/db";



function Keyfeatures({ data, position, }) {
  return (
    <div style={{ backgroundImage: `url("/pictures/Frame.jpg")` }}>
      <div className=" px-5 lg:px-[75px] pt-1"> <p className=" mt-8 lg:mt-[120px] text-4xl  font-semibold text-nurse-300 border-b border-blue-500 pb-1 lg:pb-12 ">
        Key Features
      </p>
        {hospitems.map((item, id) => (
          <div key={id} className={` flex ${position} items-center lg:flex-row flex-col  gap-7 lg:gap-12 mt-8 mb-5 lg:mb-32 lg:mt-24`}>
            <div className=" w-full lg:w-[45%] flex  ">
              <img src={item.universe} className="  " alt="" />
            </div>
            <div className=" flex flex-col gap-7">
              <h1 className="font-medium text-3xl">{item.header}</h1>
              {
                item.link.map((link, id) => (
                  <div key={id}>
                    <h1 className="font-medium text-nurse-300 text-2xl">{link.subhead}</h1>
                    <h3 className="font-light text-nurse-500 text-xl">{link.desc}</h3>
                  </div>
                ))
              }
            </div>
          </div>
        ))}</div>
    </div>
  );
}

export default Keyfeatures;
