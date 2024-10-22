import React from 'react';
import Firstsub from "../../component/homepage/firstsub";

import Gettheapp from "../../component/homepage/gettheapp";
import Absoff from './absoff';

function AboutUs() {
  return (
    <div>
      <div
        className=" w-full px-[75px]"
      >
        <Firstsub path="aboutus" />
       
      </div>
     
      <Absoff/>
      
      <Gettheapp />
    </div>
  )
}

export default AboutUs