import React from "react";
import { cardstas } from "../data/db";
import Secondpage from "../component/homepage/Secondpage";
import Firstsub from "../component/homepage/Firstsub";
import Keyfeatures from "../component/homepage/keyfeatures";
import Steps from "../component/homepage/Steps";
import Testimonial from "../component/homepage/Testimonial";

import Gettheapp from "../component/homepage/Gettheapp";
import Questions from "../component/Questions";



function Home() {
    return (
        <div>

            <div className="bg-cover h-full w-full  bg-no-repeat px-5 lg:px-[75px]">
                <Firstsub path="home" />
                <Secondpage cardstas={cardstas} position="flex-row-reverse" />
            </div>
            <Keyfeatures position={"flex-row"} />
            <Steps />
            <Testimonial />
            <Questions />
            <Gettheapp />
        </div>
    );
}

export default Home






