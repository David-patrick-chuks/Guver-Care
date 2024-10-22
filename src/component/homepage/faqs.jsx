import React, { useState } from 'react';  

import { ansdata } from '../../data/db';



function FAQs() {  
    
  const [openIndex, setOpenIndex] = useState(null);  

  const toggleQuestion = (index) => {  
    setOpenIndex(openIndex === index ? null : index);  
  };  

  return (  
    <div className="faq-container px-5 lg:px-[115px] pb-5 pt-5 lg:pt-20 border-b border-white bg-nurse-300">  
      <h1 className="text-white font-bold text-3xl lg:text-4xl mb-4">Frequently Asked Questions</h1>  
      {ansdata.map((item, index) => (  
        <div key={index} className="border-b border-white mb-2">  
          <div   
            className="flex  justify-between items-center py-8 cursor-pointer"   
            onClick={() => toggleQuestion(index)}  
          >  
            <h2 className="text-white font-normal text-xl ">{item.question}</h2>  
            <span className="bg-white py-1 px-3 rounded-xl">{openIndex === index ? '-' : '+'}</span>  
          </div>  
          {openIndex === index && (  
            <div className=" text-white font-normal text-l p-4 ">  
              {item.answer}  
            </div>  
          )}  
        </div>  
      ))}  
    </div>  
  );  
}  

export default FAQs;  