import React, { useState } from 'react';  

function Help() {  
  const [title, setTitle] = useState('');  
  const [description, setDescription] = useState('');  
  const [isSubmitted, setIsSubmitted] = useState(false);  

  const handleSubmit = (e) => {  
    e.preventDefault(); // Prevent the default form submission  
    if (title && description) {  
      // Logic to handle the valid form submission  
      console.log('Title:', title);  
      console.log('Description:', description);  
      setIsSubmitted(true); // Indicate that submission was successful  
      // Clear fields after submission (optional)  
      setTitle('');  
      setDescription('');  
    } else {  
      setIsSubmitted(false); // Indicate that submission failed due to validation  
    }  
  };  

  return (  
    <div className='flex flex-col h-full w-full pl-14 gap-11'>  
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>  
        <div className='flex flex-col gap-5 w-[30%]'>  
          <p>Title</p>  
          <textarea  
            name="title"  
            rows="5"  
            cols="40"  
            className='border border-black focus:outline-none focus:border-blue-500'  
            value={title}  
            onChange={(e) => setTitle(e.target.value)} // Update title state  
            required  
          ></textarea>  
        </div>  

        <div className='flex flex-col gap-11 w-[40%]'>  
          <p>Description</p>  
          <textarea  
            name="description"  
            rows="7"  
            cols="40"  
            className='border border-black focus:outline-none focus:border-blue-500'  
            value={description}  
            onChange={(e) => setDescription(e.target.value)} // Update description state  
            required  
          ></textarea>  
        </div>  

        <button  
          type="submit"  
          className={`bg-nurse-300 rounded-xl w-40 ml-36 text-white py-1 ${!title || !description ? 'opacity-50 cursor-not-allowed' : ''}`}  
          disabled={!title || !description} // Disable button if fields are empty  
        >  
          Report  
        </button>  

        {isSubmitted && <p className="text-green-500">Report submitted successfully!</p>}  
        
      </form>  
    </div>  
  );  
}  

export default Help;