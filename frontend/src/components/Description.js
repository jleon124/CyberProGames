import { useState } from 'react';
import React from "react";




function Description({desc, contrls, tips})
{


  return(
    <div className=' block text-center bg-cyan-600 h-[250px] w-[600px] mt-2'>
        <span>{desc}</span><br></br>
        <span>Controls: {contrls}</span><br></br>
        <span>Tips: {tips}</span>
    </div>
    
  )

}





export default Description;