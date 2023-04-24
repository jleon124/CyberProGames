import { useState } from 'react';
import React from "react";
import { BsFillHandThumbsDownFill, BsFillHandThumbsUpFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { setGameData } from '../state';

function RatingBtn() {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const game = useSelector((state) => state.game)

  const patchRating = async (rtnStatus) => {
    const response = await fetch(`http://localhost:3500/game/${game._id}/liketoggle`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userId: user._id, rtnStatus })
    })

    const updatedGame = await response.json()
    dispatch(setGameData({ updatedGame }))
  }

  const [activeBtn, setActiveBtn] = useState("");

  const handleLikeClick = () => {
    patchRating("like")
  };

  const handleDisikeClick = () => {
    patchRating("dislike")
  };

  return (
    <>
      <div className='flex '>
        <div className='pl-44 pr-4'>
          <button
            className={` ${activeBtn === "like" ? "bg-green-600" : ""} flex items-center justify-evenly h-10 w-[90px] p-[15px] bg-[rgba(44,17,25,0.6)] text-[rgba(88,221,229,255)] border-[3px] border-[rgba(88,221,229,255)]`}
            onClick={handleLikeClick}>
            <BsFillHandThumbsUpFill /> {1}
          </button>
        </div>

        <div>
          <button
            className={` ${activeBtn === "dislike" ? "bg-red-600" : ""} flex items-center justify-evenly h-10 w-[90px] p-[15px] bg-[rgba(44,17,25,0.6)] text-[rgba(88,221,229,255)] border-[3px] border-[rgba(88,221,229,255)]`}
            onClick={handleDisikeClick}>
            <BsFillHandThumbsDownFill /> {1}
          </button>
        </div>
      </div>
    </>
  )

}

export default RatingBtn;