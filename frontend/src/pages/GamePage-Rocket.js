import React from 'react'
import GameBox from '../components/GameBox'
import RatingBtn from '../components/RatingBtn'
import FavBtn from '../components/FavBtn'
import Description from '../components/Description'
import Comments from '../components/Comments'
import GamePageBox from '../components/GamePageBox'

const GamePageRocket = () => {

  return (
    <main className='h-[1750px] pt-5 pb-5'>
      <h1 className="text-[yellow] font-cyber text-5xl mb-12 ml-36">CyberProGames</h1>
      <GamePageBox
        name={"Rocket"}
        src={'games/rocket'} />
      <br></br>
      <div className='flex'>
        <RatingBtn />
        <FavBtn />
      </div>

      <div className='pr-44 text-center h-44 float-right mb-2'>
        <span className='text-[white]'>More games</span>
        <GameBox />
        <GameBox />
        <GameBox />
      </div>

      <div className='pl-44'>
        <Description
          desc={'You are lost in space due to a meteor shower. Navigate yourself through the cosmos by dodging any obstacles'}
          contrls={'Use your clicker on the game to operate the spaceship upwards'}
          tips={"Don't get hit and use Chrome for a better experience"} />
        <Comments />
      </div>
    </main>
  )

}

export default GamePageRocket