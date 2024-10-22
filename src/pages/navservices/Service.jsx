import React from "react";

import Firstsub from "../../component/homepage/Firstsub";
import Gettheapp from "../../component/homepage/Gettheapp";
import Steps from "../../component/homepage/Steps";
import Firstservice from "./Firstservice";
import Secondservice from "./Secondservice";

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
