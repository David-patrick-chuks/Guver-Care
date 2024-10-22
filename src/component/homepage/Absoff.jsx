import React from 'react'
import { aboutusoff, abtdat, updateabt } from '../../data/db'
import { Link, useNavigate } from "react-router-dom";

function Absoff() {
  const navigate = useNavigate();
    const handleNextPage = (path) => {
        navigate(path);
      }
  return (
    <div className='px-[75px] ' style={{ backgroundImage: `url("/pictures/Frame.jpg")`}} >
        <p className='text-3xl font-bold mb-11'>Learn about our offerings</p>
        <div className='flex justify-between gap-3 mb-24'>
            {aboutusoff.map((abt,index)=>(
                <div key={index} className="flex flex-col w-[22%] gap-3 justify-between items-start h-[215px] bg-white border border-white shadow-[12px_17px_51px_rgba(0,0,0,0.22)] backdrop-blur-md rounded-[17px]  cursor-pointer transition-all duration-500  select-none font-extrabold text-black hover: hover:scale-105 active:scale-95 active:rotate-[1.7deg] p-4">
                <h1>{abt.head}</h1>
                <h1 className='font-light text-lg'>{abt.desc}</h1>
                <button className="bg-nurse-300 rounded-lg text-white font-normal w-fit py-1 px-3 text-sm" onClick={() => handleNextPage("/login")}>{abt.but}</button>
                </div>
            ))}
        </div>

        <div className=" border-t border-blue-500 pt-24" style={{ backgroundImage: `url("/pictures/Frame.jpg")`}}>
    <p className='text-4xl font-bold text-nurse-300 mb-12'>About Us</p>
      {abtdat.map((item, id) => (
        <div key={id} className=  {` flex  items-center gap-20   w-[88%]  ` }>
          
          <div className=" flex flex-col gap-7 w-[53%]">
            <h1 className="font-medium  text-4xl">{item.header}</h1>
            
            
            
            
            {
              item.link.map((link, id) => (
                <div key={id}>
                  <h1 className="font-medium text-nurse-300 text-2xl">{link.subhead}</h1>
                  <h3 className="font-light text-nurse-500 text-xl">{link.desc}</h3>
                </div>
                
              ))
            }
            
            
          </div>
          <div className=" w-[42%] flex mt-24 ">
            <img src={item.universe} className="  " alt="" />
          </div>
         
        </div>
       
       
      ))}
      <div className="mt-10 ">  
        <button className="bg-blue-500 text-white px-6 py-2 rounded-3xl hover:bg-blue-600 transition" onClick={() => handleNextPage("/dashboard")}>  
          Book Consultation  
        </button>  
      </div> 
      
    </div>


    <div className='mt-56 mb-20 pb-5' >
        <p className='text-4xl font-bold border-b pb-24 border-blue-500'>Recent Updates</p>
        <div className='flex justify-center gap-11 mt-28'>
        {updateabt.map((upda,index)=>(
            <div key={index}  className="flex flex-col w-[22%]   items-start h-[420px] bg-white border border-white shadow-[12px_17px_51px_rgba(0,0,0,0.22)] backdrop-blur-md rounded-[17px]  cursor-pointer transition-all duration-500  select-none font-extrabold text-black hover: hover:scale-105 active:scale-95 active:rotate-[1.7deg] ">
          <img src={upda.pic} alt="" className='rounded-2xl' />
          <div className='p-4 flex flex-col gap-1'><h1>{upda.head}</h1>
          <h1 className='mb-24'>{upda.desc}</h1>
          <h1>{upda.down}</h1></div>
            </div>
        ))} </div>
    </div>
    </div>
  )
}

export default Absoff