import React from 'react';


import Abs from './Abs';
import Fsub from './Fsub';
import GetApp from './GetApp';

function AboutUs() {
  return (
    <div>
      <div
        className=" w-full px-[75px]"
      >
        <Fsub path="aboutus" />

      </div>

      <Abs />

      <GetApp />
    </div>
  )
}

export default AboutUs