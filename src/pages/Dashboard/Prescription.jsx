import React from 'react'
import {  Presdata, Presec } from '../../data/db';

function Prescription() {
  return (
    <div className='w-full h-full   p-10 flex flex-col gap-12'>
      <h1 className='text-lg font-extralight h-[5%]'>Week <span className='font-semibold'>: 17 October - 24 October </span></h1>
<div className='flex flex-col gap-24 w-full h-[95%]]'>
      <div className='flex justify-between w-[70%] h-[15%] '>
        {Presdata.map((pres,index)=>(
          <div key={index} >
            <h1 className= {`${index === 0 ? 'break-words max-w-[180px]' : ''} text-lg font-light`} >{pres.drug}</h1>
            <h2 className= 'text-sm font-medium' >{pres.dosage}</h2>
          </div>
        ))}
      </div>

      <div className='flex w-[90%]  justify-between h-[85%] border-t border-black py-14 '>
        {Presec.map((pre,index)=>(
          <div key={index} className='flex flex-col gap-12'>
            <div className='flex items-center gap-2 '>
            <pre.icon className={  `${index === 1 ? 'transform rotate-180' : ''} text-3xl `} />
              <h2>{pre.time}</h2>
            </div>
            <h2 className='text-lg font-light'>{pre.drug1}</h2>
            <h2 className='text-lg font-light'>{pre.drug2}</h2>
            <h2 className={`${index === 0 ? 'break-words max-w-[180px]' : ''} text-lg font-light`}>{pre.drug3}</h2>
          </div>
        ))}
      </div>

      </div>

    </div>
  )
}

export default Prescription;