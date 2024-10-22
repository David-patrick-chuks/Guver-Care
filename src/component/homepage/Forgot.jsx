import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

function Forgot() {
    const navigate = useNavigate();
    const handleNextPage = (path) => {
        navigate(path);
      };
  return (
    <div className='flex flex-col justify-center h-[100vh]  items-center bg-white'>

<div className='flex flex-col gap-8 w-[50vh]'>
<IoIosArrowRoundBack size={60} onClick={() => handleNextPage("/login")} style={{ cursor: 'pointer' }}/> 
    <p className='text-3xl font-bold'>Reset Password</p>
    <p className='text-lg'>Enter the email with your account and we’ll
send an email with confirmation to reset your
password.</p>
<input type="text" placeholder='xxxxx'  className='border rounded-lg py-1 px-3 border-black focus:outline-none focus:border-blue-500' />
<button className='bg-nurse-300 rounded-xl mt-6 text-white py-2' onClick={() => handleNextPage("/newpass")}>Continue</button>
</div>
    </div>
  )
}

export default Forgot