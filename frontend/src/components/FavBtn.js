import { useState } from 'react';
import React from "react";
import { BsFillHeartFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { setGameData, updateUser } from '../state';

function FavBtn() {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const token = useSelector((state) => state.token)
  const game = useSelector((state) => state.game)

  const patchFavorite = async () => {
    const response = await fetch(`https://cyber-pro-games-backend.vercel.app/game/${game._id}/favtoggle`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userId: user._id })
    })

    const favStatus = await response.json()

    if (favStatus) {
      dispatch(
        updateUser({
          user: favStatus.user
        }),
        setGameData({
          game: favStatus.game
        })
      )
    }
  }

  const [activeBtn, setActiveBtn] = useState("none");

  const handleFavClick = () => {
    if (activeBtn === "none") {
      setActiveBtn("heart");
      patchFavorite()
    }

    if (activeBtn === 'heart') {
      setActiveBtn("none");
      patchFavorite()
    }

  }

  return (
    <div className='pl-4'>
      <button className={` ${activeBtn === "heart" ? "bg-[yellow] text-black" : "bg-black/40 text-[rgba(88,221,229,255)]"}  flex items-center justify-evenly h-10 w-[125px] p-[15px] bg-[rgba(44,17,25,0.6)]  border-[3px] border-[rgba(88,221,229,255)]`}
        onClick={handleFavClick}>
        <BsFillHeartFill /> Favorite
      </button>
    </div>
  )

}

export default FavBtn;