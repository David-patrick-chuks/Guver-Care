import React from 'react';
import { FaTooth } from 'react-icons/fa6';
import { GrDocument, GrDocumentNotes } from 'react-icons/gr';
import { records } from '../../data/db';

function Health() {
  return (
    <div className='flex overflow-y-hidden gap-5 flex-col px-5'>
      <div className='flex justify-start items-center gap-3'>
        <div >
        <img src="/pictures/Vector.png" className='bg-white rounded-full w-14 h-14' />
        </div>
        <div className='flex gap-1 flex-col w-[30%]'>
          <p className='text-xl leading-none mb-1 font-semibold'>Jayne Liam</p>
          <div className='flex px-3 justify-between items-center w-full text-sm bg-nurse-300/10 py-2 rounded-lg shadow-md border border-gray-600/50'>
            <p className='flex gap-2 justify-center items-center'>

              <GrDocument size={20} />
              <span>Have uneven jawline</span>
            </p>
            <p > Edit</p>
          </div>
        </div>
      </div>
      <div className='flex gap-5'>
        <p>Patient Information</p>
        <p>Appointment History</p>
        <p>Healt Record</p>
      </div>
      <div className='flex'>
        <div className='flex gap-4'>
          <div className='bg-gray-300/20  rounded-xl border border-gray-400/50 px-5'>
            <p className='text-center font-semibold mb-3'>Odontogram</p>
            <img src="/pictures/pix.png" alt="" />
          </div>
          <img src="/pictures/line.png" alt="" />
        </div>
        <div className='flex px-6 w-full flex-col' >
          <header className='flex gap-3 mb-3 text-xl font-semibold'>
            <p className='border-2 flex justify-center items-center gap-1 bg-gray-200/50 border-nurse-300 rounded-lg px-2 py-1 text-xs text-nurse-300 font-medium'><FaTooth /> <span>22</span></p>
            <p>Maxillary Left Lateral Incisor</p>
          </header>
          <div className='flex flex-col gap-3' >
            {
              records.map((record, id) => (
                <div className='flex  px-2  py-2 rounded-lg bg-gray-200/40 gap-3  flex-col ' key={id}>
                  <header className='flex w-full justify-between '>
                    <p>
                      <span>MEI </span>
                      <h2>{record.header[0]} </h2>
                    </p>   <p>
                      <span className='text-gray-400'>CONDITION </span>
                      <h2>{record.header[1]} </h2>
                    </p>   <p>
                      <span className='text-gray-400'>TREATMENT </span>
                      <h2>{record.header[2]} </h2>
                    </p>   <p>
                      <span className='text-gray-400'>DENTIST </span>
                      <h2>{record.header[3]} </h2>
                    </p>
                    <p >
                      <span className='text-gray-400'>STATUS </span>
                      <h2 className={` ${record.status === "done" ? "text-green-500" : "text-orange-500"}`}>{record.status} </h2>
                    </p>
                  </header>

                  <p className='flex px-2 border-l-2 border-l-nurse-300 font-semibold'> {record?.reason && record.reason}</p>

                  <p className='flex w-full px-3 py-2 bg-gray-200 rounded-lg shadow-md justify-start items-center gap-2 text-xs'>
                    <GrDocument size={20} />
                    <span> {
                      record.message
                    }</span>
                  </p>
                </div>
              ))
            }
          </div>
        </div>

      </div>

    </div>
  )
}

export default Health;