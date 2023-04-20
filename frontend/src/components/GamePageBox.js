import React from "react";

function GamePageBox({ name, src, w = 900, h = 475 }) {

  return (
    <div>
      <h2 className='text-center text-[white] font-sans text-3xl pb-4'>{name}</h2>
      <div className='text-center bg-black/40 m-auto justify-center items-center flex h-[600px] w-9/12'>
        <div className='text-center bg-black m-auto justify-center items-center h-[475px] w-[900px]'>
          <iframe frameborder="0" src={src} allowfullscreen="" width={w} height={h}></iframe>
        </div>
      </div>
    </div>
  )

}

export default GamePageBox;