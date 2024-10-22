import React from 'react'
import { data } from '../../data/db'
import { FaClock } from 'react-icons/fa6'
import { CgArrowDown, CgDanger } from 'react-icons/cg'

function Appointment() {
  return (
    <div className='lg:px-8 px-2 flex flex-col gap-5'>
      <div>
        <p>Appointment</p>
        <p>see your schedule events from your calendar </p>
      </div>

      <div className=' h-full w-full flex  flex-col' >
        {
          data.map((dat, i) =>(
            <div key={i} className= {`gap-2 ${i > 2 ? "bg-gray-300" : "bg-gray-100/80"} justify-between items-center p-3 flex border-gray-700/30 border  w-full mb-4 rounded-xl`}>
              <div className= {`px-5 border-r flex justify-center items-center flex-col border-r-black  ${i > 2 ? "text-nurse-300" : "text-red-700"} `}>
                <p  className='font-semibold   text-2xl'>{dat.date.dayEn}</p>
                <p>{dat.date.day}</p>
              </div>
              <div className='flex text-gray-400 gap-2 justify-center items-center'>
                <FaClock />
                <span className='text-sm'>{dat.time}</span>
              </div>
              <div className='flex w-[40%] gap-2 justify-center items-center'>
                <img src={dat.profile.img} className='h-full rounded-full' />
                <div>
                  <p>{dat.profile.role}</p>
                  <p className='text-gray-400'>{dat.profile.name}</p>
                </div>
              </div>
              <div className='flex  w-[30%] gap-5 justify-end px-5 items-center'>

                <p className='flex border py-2 px-2 border-black rounded-lg text-red-700 gap-2 justify-center items-center' ><span>cancel</span> <CgDanger /></p>
                <p className='flex text-white bg-nurse-300 px-2 py-2 capitalize rounded-lg gap-2 justify-center items-center'><span>edit</span> <CgArrowDown /></p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Appointment