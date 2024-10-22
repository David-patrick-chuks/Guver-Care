import React from 'react'
import { BiDownload } from 'react-icons/bi'

function Payment() {


  const header = [
    "Appointment", "Amount", "Date", "status", ""
  ]
  const paymentData = [
    {
      appointment: "dentist",
      amount: "1500",
      date: "APr 14,2024",
      status: "paid",
      icon: <BiDownload />
    }, {
      appointment: "dentist",
      amount: "1500",
      date: "APr 14,2024",
      status: "paid",
      icon: <BiDownload />
    }, {
      appointment: "dentist",
      amount: "1500",
      date: "APr 14,2024",
      status: "paid",
      icon: <BiDownload />
    }, {
      appointment: "dentist",
      amount: "1500",
      date: "APr 14,2024",
      status: "paid",
      icon: <BiDownload />
    },{
      appointment: "dentist",
      amount: "1500",
      date: "APr 14,2024",
      status: "paid",
      icon: <BiDownload />
    }, {
      appointment: "dentist",
      amount: "1500",
      date: "APr 14,2024",
      status: "paid",
      icon: <BiDownload />
    }, {
      appointment: "dentist",
      amount: "1500",
      date: "APr 14,2024",
      status: "paid",
      icon: <BiDownload />
    },
  ]

  return (

    <div className='px-10'>
      <div className='text-3xl font-bold'>Payment</div>
      <div >
        <div className='bg-[#ECECEC] mt-5 capitalize border border-black py-2 text-base font-bold w-full rounded-lg flex px-5 '>
          <p className='w-[60%]'>{header[0]}</p>
          <div className='flex w-[40%]'>
            <p className='flex w-[30%]'>{header[1]}</p>
            <p className='flex w-[40%]'>{header[2]}</p>
            <p className='flex w-[25%]'>{header[3]}</p>
            <p className='flex w-[5%]'>{header[4]}</p>
          </div>
        </div>

      </div>
      <div className='flex flex-col gap-4 mt-4'>
        {
          paymentData.map((pay, id) => {
            const { amount, appointment, date, icon, status } = pay
            return (
              <div key={id} className='bg-[#ECECEC] capitalize border border-black py-2 text-base font-semibold w-full rounded-lg flex px-5 '>
                <p className='w-[60%]'>{appointment}</p>
                <div className='flex w-[40%]'>
                  <p className='flex w-[30%]'>{"$ "}{amount}</p>
                  <p className='flex w-[40%]'>{date}</p>
                  <p className='flex w-[25%]'>{status}</p>
                  <p className='flex w-[5%]'>{icon}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Payment