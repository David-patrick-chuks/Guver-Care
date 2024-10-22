import React from "react";
import { Link } from "react-router-dom";

import Firstsub from "../../component/homepage/firstsub";
import bg from "/pictures/Frame.jpg";
import Firstservice from "./Firstservice";
import Secondservice from "./secondservice";
import secbg from "/pictures/secbg.jpg";
import Gettheapp from "../../component/homepage/gettheapp";
import Steps from "../../component/homepage/steps";

function Service() {
  return (
    <div>
      <div
        className=" w-full px-[75px]"
      >
        <Firstsub path="service" />
        <Firstservice />
        
      </div>
      <div
        className=" bg-cover h-fit w-full bg-no-repeat pb-24"
      >
        <Secondservice />
        
      </div>
     <div className="px-[75px] mb-8"> <Steps/> </div>
      <Gettheapp />
    </div>
  );
}

export default Service;
