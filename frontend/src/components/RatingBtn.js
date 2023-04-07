import { useState } from 'react';
import React from "react";
import {BsFillHandThumbsDownFill,  BsFillHandThumbsUpFill} from 'react-icons/bs'



function RatingBtn()
{

  const [likeCount, setLikeCount] = useState(50);
  const [dislikeCount, setDislikeCount] = useState(25);
 
  const [activeBtn, setActiveBtn] = useState("none");

  const handleLikeClick = () => {
    if (activeBtn === "none") {
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
      return;
    }
 
    if (activeBtn === 'like'){
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      return;
    }
 
    if (activeBtn === "dislike") {
      setLikeCount(likeCount + 1);
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("like");
    }
  };

  const handleDisikeClick = () => {
    if (activeBtn === "none") {
      setDislikeCount(dislikeCount + 1);
      setActiveBtn("dislike");
      return;
    }
   
    if (activeBtn === 'dislike'){
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("none");
      return;
    }
 
    if (activeBtn === "like") {
      setDislikeCount(dislikeCount + 1);
      setLikeCount(likeCount - 1);
      setActiveBtn("dislike");
    }
  };


  return(
    <div className='flex '>
        <div className='pl-44 pr-4'>
            <button
            className={` ${activeBtn === "like" ? "bg-green-600" : ""} flex items-center justify-evenly h-10 w-[90px] p-[15px] bg-[rgba(44,17,25,0.6)] text-[rgba(88,221,229,255)] border-[3px] border-[rgba(88,221,229,255)]`}
            onClick={handleLikeClick}> 
            <BsFillHandThumbsUpFill/> {likeCount}
            </button>
        </div>


    <div>
        <button
        className={` ${activeBtn === "dislike" ? "bg-[#FF0063]" : ""} flex items-center justify-evenly h-10 w-[90px] p-[15px] bg-[rgba(44,17,25,0.6)] text-[rgba(88,221,229,255)] border-[3px] border-[rgba(88,221,229,255)]`}
        onClick={handleDisikeClick}>
        <BsFillHandThumbsDownFill/> {dislikeCount}
        </button>
    </div>


    </div>

  )

}





export default RatingBtn;