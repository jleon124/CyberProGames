import React from "react";

function Description({ desc, contrls, tips }) {

  return (
    <div className='block text-left bg-[rgba(44,17,25,0.9)] pl-5 pt-5 h-[225px] w-[800px] mt-2'>
      <strong>
        <span className="text-white"><span className="text-[rgba(26,250,141,255)]">Description: </span>{desc}</span><br></br>
        <span className="text-white"><span className="text-[rgba(26,250,141,255)]">Controls: </span>{contrls}</span><br></br>
        <span className="text-white"><span className="text-[rgba(26,250,141,255)]">Tips: </span>{tips}</span>
      </strong>
    </div>
  )

}

export default Description;