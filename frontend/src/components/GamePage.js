import React from 'react'
import GameBox from './GameBox'

const GamePage = () => {
  return (
    <main className='h-[1750px] pt-5 pb-5'>
      <h1 class="text-[yellow] font-cyber text-5xl mb-12 ml-36">CyberProGames</h1>
      <h2 className='text-center text-[white]'>Game Title Here</h2>
      <div className='text-center bg-cyan-600 m-auto justify-center items-center flex h-[600px] w-9/12'>
        <div className='text-center bg-black m-auto justify-center items-center h-[400px] w-[600px]'>   
        </div>
      </div>
        <br></br>
        <div className='flex'>
          <div className=' pl-44 pr-4'>
            <button className='nav-item'>Like</button>
          </div>
          <div className=''>
            <button className='nav-item'>Dislike</button>
          </div>
          <div>
            <span className='ml-4'>Rating goes here</span>
          </div> 
        </div >
        <div className='pr-44 text-center h-44 float-right mb-2'>
            <span>More games</span>
            <GameBox />
            <GameBox />
            <GameBox />
        </div>
        
        <div className='pl-44'>
          <div className=' block text-center bg-cyan-600 h-[250px] w-[200px] mt-2'>
            <span>This is a game. A sort of gamey-game</span><br></br>
            <span>Controls:</span><br></br>
            <span>Tips:</span>
          </div>
          {/* I'll make a new gamebox that will make the comment box bigger and whatnot. Should the description box be changed too?*/}
          <div className='text-center bg-cyan-600 h-[250px] w-[600px] mt-2'>
            <span>Comments</span>
          </div>
        </div>
      

    </main>
  )
}

export default GamePage