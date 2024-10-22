import React from "react";

import { cardstas } from "../../data/db";
import FAQs from "./Faqs";
import Firstsub from "./Firstsub";
import Gettheapp from "./Gettheapp";
import Secondpage from "./Secondpage";
import Steps from "./Steps";
import Testimonial from "./Testimonial";
import Keyfeatures from "./Keyfeatures";

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
