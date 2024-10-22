import React from "react";


import Firstservice from "./Firstservice";

import Fsub from "../../component/homepage/Fsub";
import GetApp from "../../component/homepage/GetApp";
import Steps from "../../component/homepage/Steps";
import Sservice from "./Sservice";

function Service() {
  return (
    <div>
      <div
        className=" w-full px-[75px]"
      >
        <Fsub path="service" />
        <Firstservice />

      </div>
      <div
        className=" bg-cover h-fit w-full bg-no-repeat pb-24"
      >
        <Sservice />

      </div>
      <div className="px-[75px] mb-8"> <Steps /> </div>
      <GetApp />
    </div>
  );
}

export default Service;
