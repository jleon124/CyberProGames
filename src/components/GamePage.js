import React from 'react'

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
        <br></br>
        <button className='nav-item mr-4 ml-44'>Like</button>
        <button className='nav-item ml-4'><span>Dislike</span></button>
        <span className='ml-4'>Rating goes here</span>
        <table className='absolute top-5 right-20 text-center'>
          <span>More games</span>
          <div className='gameBox'>h</div>
          <div className='gameBox' >g</div>
          <div className='gameBox'>f</div>
        </table>
      </div>
      <div className='gameBox ml-44 mr-4'>
        <span>This is a game. A sort of gamey-game</span><br></br>
        <span>Controls:</span><br></br>
        <span>Tips:</span>
      </div>
      {/* I'll make a new gamebox that will make the comment box bigger and whatnot. Should the description box be changed too?*/}
      <div className='gameBox'>
        <span>Comments</span>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </main>
  )
}

export default GamePage