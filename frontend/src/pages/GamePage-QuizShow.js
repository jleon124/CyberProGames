import React from 'react'
import GameBox from '../components/GameBox'
import RatingBtn from '../components/RatingBtn'
import FavBtn from '../components/FavBtn'
import Description from '../components/Description'
import Comments from '../components/Comments'
import GamePageBox from '../components/GamePageBox'

const GamePage = () => {

  return (
    <main className='h-[1750px] pt-5 pb-5'>
      <h1 className="text-[yellow] font-cyber text-5xl mb-12 ml-36">CyberProGames</h1>
      <GamePageBox
        name={"Linux Quiz Show"}
        src={'games/quiz/index.html'} />
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
          desc={'How much do you know Linux? Play along to earn points!'}
          contrls={'click on the right answer and go inbetween questions with the right and left buttons'}
          tips={'Just know Linux lol.'} />
        <Comments />
      </div>
    </main>
  )

}

export default GamePage