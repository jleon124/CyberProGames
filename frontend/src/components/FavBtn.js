import { useState } from 'react';
import React from "react";
import { BsFillHeartFill } from 'react-icons/bs'

function FavBtn() {

  const [activeBtn, setActiveBtn] = useState("none");

  const handleClick = () => {
    if (activeBtn === "none") {
      setActiveBtn("heart");
      return;
    }

    if (activeBtn === 'heart') {
      setActiveBtn("none");
      return;
    }

  }

  return (
    <div className='pl-4'>
      <button className={` ${activeBtn === "heart" ? "bg-[yellow] text-black" : "bg-black/40 text-[rgba(88,221,229,255)]"}  flex items-center justify-evenly h-10 w-[125px] p-[15px] bg-[rgba(44,17,25,0.6)]  border-[3px] border-[rgba(88,221,229,255)]`}
        onClick={handleClick}>
        <BsFillHeartFill /> Favorite
      </button>
    </div>
  )

}

export default FavBtn;