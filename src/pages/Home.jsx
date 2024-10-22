import React from "react";
import { cardstas } from "../data/db";
import Secondpage from "../component/homepage/Secondpage";

import Keyfeatures from "../component/homepage/keyfeatures";

import Testimonial from "../component/homepage/Testimonial";


import Questions from "../component/Questions";
import Fsub from "../component/homepage/Fsub";
import GetApp from "../component/homepage/GetApp";
import Stepper from "../component/homepage/Stepper";



function Home() {
    return (
        <div>

            <div className="bg-cover h-full w-full  bg-no-repeat px-5 lg:px-[75px]">
                <Fsub path="home" />
                <Secondpage cardstas={cardstas} position="flex-row-reverse" />
            </div>
            <Keyfeatures position={"flex-row"} />
            <Stepper />
            <Testimonial />
            <Questions />
            <GetApp />
        </div>
    );
}

export default Home






