import React, { useState } from 'react'

import { MdOutlineStarBorder } from "react-icons/md";

function StarRate (){

    const [rating,SetRating] = useState (null)
    const [rateColor,SetRateColor] = useState (null)

    return(
      <>
      {[...Array(5)].map((star, index) =>{
        const currentRate = index + 1
        return(
          <label key={index} className="relative cursor-pointer">  
          <input  
            type="radio"  
            name="rate"  
            className="hidden"  
            value={currentRate}  
            onClick={() => SetRating(currentRate)}  
          />  
          <div  
            className={`flex justify-center  items-center  w-3 h-3 rounded-full transition duration-200 ${  
              currentRate <= rating ? 'bg-yellow-300' : 'bg-transparent'  
            }`}  
          >  
            <MdOutlineStarBorder size={12} color="grey" />  
          </div>  
        </label>  
           
        )
      })}
     </>
    )
  }

export default StarRate;