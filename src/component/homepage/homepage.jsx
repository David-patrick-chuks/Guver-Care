import React from "react";

import { cardstas } from "../../data/db";
import FAQs from "./faqs";
import Firstsub from "./firstsub";
import Gettheapp from "./gettheapp";
import Keyfeatures from "./keyfeatures";
import Secondpage from "./secondpage";
import Steps from "./steps";
import Testimonial from "./testimonial";

function Homepage() {
  return (
    <div>
      <div className="bg-cover h-full w-full  bg-no-repeat px-5 lg:px-[75px]">
        <Firstsub path="home" />
        <Secondpage cardstas={cardstas} position="flex-row-reverse" />
      </div>
      <Keyfeatures position={"flex-row"} />
      <Steps />
      <Testimonial />
      <FAQs />
      <Gettheapp />
    </div>
  );
}

export default Homepage;
