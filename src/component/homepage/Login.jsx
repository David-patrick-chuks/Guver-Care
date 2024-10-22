import React, { useState } from 'react';  
import { useNavigate } from "react-router-dom";  

function Login() {  
  // State to hold the input values and errors  
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const [error, setError] = useState('');  

  const navigate = useNavigate();  

  // Handle form submission  
  const handleLogin = (e) => {  
    e.preventDefault(); // Prevent page refresh  

    // Basic validation  
    if (!email || !password) {  
      setError('Please fill in all fields.');  
      return;  
    }  

    // Proceed with login (this is where you would handle the actual login logic)  
    console.log('Logging in with', { email, password });  

    // Clear the error if validation passes  
    setError('');  

    // Navigate to the dashboard if login is successful  
    navigate("/dashboard");  
  };  
  const handleNextPage = (path) => {
    navigate(path);
  };

  return (  
    <div className='flex w-full h-screen gap-11 bg-white'>  
      <div className='flex items-end w-[60%] bg-gradient-to-b from-[#ffffff] via-[#e5edf7] to-[#ffffff]'>  
        <img src="/pictures/handtogeda.png" className='h-5/6 w-full' alt="" />  
      </div>  

      <div className='w-[30%] flex flex-col gap-14 justify-center bg-white'>  
        <div className='flex justify-center'>  
          <img src="/pictures/logo.png" className='w-20' alt="" />  
        </div>  
        <div className='flex flex-col items-center justify-between gap-5'>  
          <p className='text-5xl font-bold'>Welcome back!</p>  
          <p>Please enter your details</p>  
        </div>  

        {error && <p className='text-red-500 text-center'>{error}</p>}  

        <form className='w-full flex flex-col gap-4' onSubmit={handleLogin}>  
          <p className='font-light text-xl'>Email</p>  
          <input  
            type="text"  
            value={email}  
            onChange={(e) => setEmail(e.target.value)}  
            className='border border-black focus:outline-none focus:border-blue-500 w-full py-1 rounded-md'  
          />  
          <p className='font-light text-xl'>Password</p>  
          <input  
            type="password"  
            value={password}  
            onChange={(e) => setPassword(e.target.value)}  
            className='border border-black focus:outline-none focus:border-blue-500 w-full py-1 rounded-md'  
          />  
          <div className='flex justify-between mt-7'>  
            <div className='flex gap-2 items-center'>  
              <input type="checkbox" />  
              <p className='font-extralight text-sm'> Remember for 30 days</p>  
            </div>  
            <p className='font-extralight text-sm' onClick={() => handleNextPage("/forgot")} style={{ cursor: 'pointer' }}>Forgot password?</p>  
          </div>  
          <button  
            type="submit" // Ensures form handles the submit event  
            className='bg-nurse-300 rounded-2xl ml-36 mt-5 w-40 text-lg text-white py-1'  
            style={{ cursor: 'pointer' }}  
          >  
            Login  
          </button>  
        </form>  
      </div>  
    </div>  
  );  
}  

export default Login;