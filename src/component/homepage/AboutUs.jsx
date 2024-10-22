import React from 'react'
import Firstsub from "../../component/homepage/firstsub";
import bg from "/pictures/Frame.jpg";

import secbg from "/pictures/secbg.jpg";
import Gettheapp from "../../component/homepage/gettheapp";
import Firstservice from '../../pages/navservices/Firstservice';
import Secondservice from '../../pages/navservices/secondservice';
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