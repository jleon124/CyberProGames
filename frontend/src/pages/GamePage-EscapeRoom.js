import React from 'react'
import GameBox from '../components/GameBox'
import RatingBtn from '../components/RatingBtn'
import FavBtn from '../components/FavBtn'
import Description from '../components/Description'
import Comments from '../components/Comments'
import GamePageBox from '../components/GamePageBox'

const GamePageEscape = () => {

  return (
    <main className='h-[1750px] pt-5 pb-5'>
      <h1 className="text-[yellow] font-cyber text-5xl mb-12 ml-36">CyberProGames</h1>
      <GamePageBox
        name={"Escape the House"}
        src={'games/adventure'} />
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
          desc={'Use your wits to escape the mysterious house you wake up in.'}
          contrls={'Click on the options with the mouse.'}
          tips={"You can always try again if you get a bad end."} />
        <Comments />
      </div>
    </main>
  )

}

export default GamePageEscape