import React from 'react'
import './GamePage.css'

const GamePage = () => {
  return (
    <main>
      <h1>CyberProGames</h1>
      <h2>Game Title Here</h2>
      <div className='displayGame'>
        <div className='gameThing'>   
        </div>
      </div>
      <div className='relative'>
        <button className='nav-item'>Like</button>
        <button className='nav-item'><span>Dislike</span></button>
        <span>Rating goes here</span>
        <span className='absolute top-5 right-20'>More games</span>
        <div className='gameBox absolute top-220 right-0'>h</div>
        <div className='gameBox absolute top-80 right-0' >g</div>
        <div className='gameBox absolute top-140 right-0'>f</div>
      </div>
      <div className='gameBox'>
        <span>Description</span><br></br>
        <span>Controls</span><br></br>
        <span>Tips</span>
      </div>
      {/* I'll make a new gamebox that will make the comment box bigger and whatnot. Should the description box be changed too?*/}
      <div className='gameBox'>
        <span>Comments</span>
      </div>
    </main>
  )
}

export default GamePage