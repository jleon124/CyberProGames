import React from 'react'
import GameBox from '../components/GameBox'
import Description from '../components/Description'
import GamePageBox from '../components/GamePageBox'

import { useDispatch, useSelector } from 'react-redux'
import { setComments, setGameData, updateUser } from '../state'
import { useEffect } from 'react'
import CreateComment from '../components/CreateComment'
import CommentsSection from '../components/CommentsSection'
import { BsFillHandThumbsUpFill, BsFillHeartFill } from 'react-icons/bs'

const GamePageSamurai = () => {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const game = useSelector((state) => state.game)
  const token = useSelector((state) => state.token)

  const getGameData = async () => {
    const response = await fetch('https://cyber-pro-games-backend.vercel.app/game/6448a15bcd81248913feefb3', {
      method: 'GET'
    })
    const gameData = await response.json()
    if (gameData) {
      dispatch(
        setGameData({
          game: gameData
        })
      )
    }
  }

  const setGameComments = async () => {
    const response = await fetch(`https://cyber-pro-games-backend.vercel.app/comment/6448a15bcd81248913feefb3/comments`, {
      method: 'GET',
    })
    const commentData = await response.json()
    if (commentData) {
      dispatch(
        setComments({
          comments: commentData
        })
      )
    }
  }

  const patchLike = async () => {
    const response = await fetch(`https://cyber-pro-games-backend.vercel.app/game/${game._id}/liketoggle`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userId: user._id })
    })
    const updatedGame = await response.json()
    if (updatedGame) {
      dispatch(
        setGameData({
          game: updatedGame.game
        })
      )
    }
  }

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

  useEffect(() => {
    if (!game || game.title !== "Samurai Fight") {
      getGameData()
      setGameComments()
    }
  }, [])

  return (
    <main className='h-[1750px] pt-5 pb-5'>
      <h1 className="text-[yellow] font-cyber text-5xl mb-12 ml-36">CyberProGames</h1>
      <GamePageBox
        name={"Samurai Fight"}
        src={'games/samurai/index.html'} />
      <br></br>
      <div className='flex'>
        <div className='flex '>
          <div className='pl-44 pr-4'>
            <button
              className={`flex items-center justify-evenly h-10 w-[90px] p-[15px] bg-[rgba(44,17,25,0.6)] text-[rgba(88,221,229,255)] border-[3px] border-[rgba(88,221,229,255)]`}
              onClick={patchLike}>
              <BsFillHandThumbsUpFill /> {Object.keys(game.likes).length}
            </button>
          </div>


        </div>

        <div className='pl-4'>
          <button className={` flex items-center justify-evenly h-10 w-[125px] p-[15px] bg-[rgba(44,17,25,0.6)]  border-[3px] border-[rgba(88,221,229,255)]`}
            onClick={patchFavorite}>
            <BsFillHeartFill /> Favorite
          </button>
        </div>
      </div>

      <div className='pr-44 text-center h-44 float-right mb-2'>
        <span className='text-[white]'>More games</span>
        <GameBox />
        <GameBox />
        <GameBox />
      </div>

      <div className='ml-44 mt-5'>
        <Description
          desc={'A fight between two mad samurai.'}
          contrls={'Player 1 uses WASD and Player 2 uses the arrow keys.'}
          tips={'Use spacebar and the down arrow key to fight.'} />
      </div>

      <div className='ml-44 mt-5 w-[800px] bg-black/40 text-white h-auto pl-5 py-5'>
        <CreateComment user={user} game={game} />
        <CommentsSection gameId={game._id} userId={user._id} />
      </div>
    </main>
  )

}

export default GamePageSamurai