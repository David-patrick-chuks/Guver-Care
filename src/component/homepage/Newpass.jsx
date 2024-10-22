 import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import {  useNavigate } from "react-router-dom";

function Newpass() {
    const navigate = useNavigate();
    const handleNextPage = (path) => {
        navigate(path);
      };
  return (
    <div className='flex flex-col justify-center h-[100vh]  items-center bg-white'>

<div className='flex flex-col gap-8 w-[50vh]'>
<IoIosArrowRoundBack size={60} onClick={() => handleNextPage("/forgot")} style={{ cursor: 'pointer' }}/> 
    <p className='text-3xl font-bold'>Create new password</p>
    <p className='text-lg'>This password should be different from the
    previous password.</p>
<input type="password" placeholder='New Password'  className='border rounded-lg py-1 px-3 border-black focus:outline-none focus:border-blue-500' />
<input type="password" placeholder='Confirm Password'  className='border rounded-lg py-1 px-3 border-black focus:outline-none focus:border-blue-500' />
<button className='bg-nurse-300 rounded-xl mt-6 text-white py-2' onClick={() => handleNextPage("/login")}>Reset password</button>
</div>
    </div>
 
  )
}

export default Newpass