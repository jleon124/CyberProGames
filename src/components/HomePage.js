import React from 'react'

const HomePage = () => {
    return (
        <main>
            <h1>CyberProGames</h1>
            <p>A website with a purpose of hosting various games ranging
                from just-for-fun to game to learning about programming/computer
                science.</p>
            <div className='gameList'>
                <div className='gameBox'>
                    <p> Game1</p>
                </div>
                <div className='gameBox'>
                    <p> Game2</p>
                </div>
                <div className='leaderboard_box'>
                    <p> leaderboard</p>
                </div>
            </div>

            <br></br>

            <h1>Trending</h1>
            
            <div className='trending_gameList'>
                <div className='gameBox'>
                    <p> Game1</p>
                </div>
                <div className='gameBox'>
                    <p> Game2</p>
                </div>
                <div className='gameBox'>
                    <p> Game3</p>
                </div>
                <div className='gameBox'>
                    <p> Game4</p>
                </div>
            </div>
            <br></br>
            <h1>Programming</h1>
            <div className='programming_gameList'>
                <div className='gameBox'>
                    <p> Game1</p>
                </div>
                <div className='gameBox'>
                    <p> Game2</p>
                </div>
                <div className='gameBox'>
                    <p> Game3</p>
                </div>
                <div className='gameBox'>
                    <p> Game4</p>
                </div>
            </div>

            <br></br>
            <h1>Fun</h1>
            <div className='fun_gameList'>
                <div className='gameBox'>
                    <p> Game1</p>
                </div>
                <div className='gameBox'>
                    <p> Game2</p>
                </div>
                <div className='gameBox'>
                    <p> Game3</p>
                </div>
                <div className='gameBox'>
                    <p> Game4</p>
                </div>
            </div>

            <hr></hr>

            

        </main>
    )
}

export default HomePage