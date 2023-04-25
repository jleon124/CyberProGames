import { useState } from 'react';
import React from "react";
import { BsFillHandThumbsDownFill, BsFillHandThumbsUpFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { setGameData } from '../state';

function RatingBtn() {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const token = useSelector((state) => state.token)
  const game = useSelector((state) => state.game)

  // const isLiked = Boolean(game.likes[user._id])
  // const likeCount = Object.keys(game.likes).length

  const patchLike = async () => {
    const response = await fetch(`http://localhost:3500/game/${game._id}/liketoggle`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userId: user._id })
    })

    const updatedGame = await response.json()
    dispatch(setGameData({ game: updatedGame }))
  }

  return (
    <>
      <div className='flex '>
        <div className='pl-44 pr-4'>
          {/* <button
            className={`${Boolean(game.likes[user._id])} ? "bg-green-600" : ""} flex items-center justify-evenly h-10 w-[90px] p-[15px] bg-[rgba(44,17,25,0.6)] text-[rgba(88,221,229,255)] border-[3px] border-[rgba(88,221,229,255)]`}
            onClick={patchLike}>
            <BsFillHandThumbsUpFill /> {Object.keys(game.likes).length}
          </button> */}
        </div>

        <div>
          <button
            className={`flex items-center justify-evenly h-10 w-[90px] p-[15px] bg-[rgba(44,17,25,0.6)] text-[rgba(88,221,229,255)] border-[3px] border-[rgba(88,221,229,255)]`}
            >
            <BsFillHandThumbsDownFill /> {1}
          </button>
        </div>
      </div>
    </>
  )

}

export default RatingBtn;