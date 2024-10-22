import React, { useState } from 'react';  
import Switch from '../../data/style';


function General() {  
  const [name, setName] = useState('');  
  const [password, setPassword] = useState('');  
  const [email, setEmail] = useState('');  
  const [language, setLanguage] = useState('mainDoc'); // Default option  
  const [errorMessage, setErrorMessage] = useState(''); // State for error message  

  const handleSubmit = () => {  
    if (!name || !password || !email) {  
      setErrorMessage('Please fill out all required fields.'); // Set error message  
    } else {  
      setErrorMessage(''); // Clear error message  
      // Add your submit logic here  
      alert("Changes saved!");  
    }  
  };  

  return (  
    <div className='pl-20 pt-4 h-full w-full'>  
      <div className='flex justify-between w-full'>  
        <h1 className='font-semibold text-lg'>Profile Details</h1>  
        <button   
          className='bg-nurse-300 rounded-md text-white px-3 py-1 text-sm font-medium'   
          onClick={handleSubmit}  
          disabled={!name || !password || !email} // Disable if required fields are not filled  
        >  
          Save changes  
        </button>  
      </div>  

      {errorMessage && <p className='text-red-500 pt-2'>{errorMessage}</p>} {/* Display error message */}  

      <div className='w-[35%] h-[90%] flex flex-col gap-1 pt-7'>  
        <p className='font-light'>Name</p>  
        <input   
          type="text"   
          placeholder='Enter your name'   
          className='border border-black focus:outline-none focus:border-blue-500 rounded-lg px-3 py-1'   
          value={name}  
          onChange={(e) => setName(e.target.value)} // Update name state  
        />  
        <p className='font-light'>Password</p>  
        <input   
          type="password"   
          placeholder='Enter your password'   
          className='border border-black focus:outline-none focus:border-blue-500 rounded-lg px-3 py-1'   
          value={password}  
          onChange={(e) => setPassword(e.target.value)} // Update password state  
        />  
        <p className='font-light'>Email</p>  
        <input   
          type="email"   
          placeholder='example@gmail.com'   
          className='border border-black focus:outline-none focus:border-blue-500 rounded-lg px-3 py-1'   
          value={email}  
          onChange={(e) => setEmail(e.target.value)} // Update email state  
        />  
        <p className='font-light'>Language</p>  
        <select   
          className="border border-black focus:outline-none focus:border-blue-500 rounded-lg px-3 py-1"  
          value={language}  
          onChange={(e) => setLanguage(e.target.value)} // Update language state  
        >  
          <option value="mainDoc">English</option>  
          <option value="Ahaed">Yoruba</option>  
          <option value="Dara">French</option>  
          <option value="Dara">Hausa</option>  
        </select>  

        <div className='flex flex-col gap-4 pt-8'>  
          <p className='font-semibold text-lg'>Notification Preferences</p>  
          <div className='flex items-center justify-between font-light'>  
            <p>Email Notification</p>   
            <Switch />  
          </div>  
          <div className='flex items-center justify-between font-light'>   
            <p>SMS Notification</p>   
            <Switch />  
          </div>  
          <div className='flex items-center justify-between font-light'>   
            <p>Push Notification</p>   
            <Switch />  
          </div>   
        </div>  

        <div className='pt-5 flex flex-col gap-3'>   
          <p className='font-semibold text-lg'>Privacy Settings</p>  
          <div className='flex items-center gap-2 font-light'>   
            <input type="checkbox" />   
            <p>Allow Data Sharing with Third Party</p>  
          </div>  
          <div className='flex items-center gap-2 font-light'>   
            <input type="checkbox" />   
            <p>Make my profile visible</p>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
}  

export default General;