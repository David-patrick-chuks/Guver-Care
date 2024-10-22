import React from 'react';

import Absoff from './absoff';
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
     
      <Absoff/>
      
      <GetApp />
    </div>
  )
}

export default AboutUs