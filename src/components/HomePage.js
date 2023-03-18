import React from 'react'

const HomePage = () => {
    return (
        <main class="h-auto bg-[linear-gradient(to_bottom,#050b13,#11131e,#1c1727,#2b192e,#3c1b30,#431a2f,#4a192c,#511929,#511627,#501324,#501022,#4f0c1f)]">
            <h1 class="text-[yellow] bg-black font-cyber">CyberProGames</h1>
            <p>A website with a purpose of hosting various games ranging
                from just-for-fun to game to learning about programming/computer
                science.</p>
            <div class="flex flex-wrap justify-evenly">
                <div class="text-center bg-cyan-600 h-[250px] w-[200px] m-5 gamebox">
                    <p>Game1</p>
                </div>
                <div class="text-center bg-cyan-600 h-[250px] w-[200px] m-5 gamebox">
                    <p>Game2</p>
                </div>
                <div class="text-center bg-cyan-600 h-[500px] w-[500px] float-right leaderboard">
                    <p>Leaderboard</p>
                </div>
            </div>

            {/* <br></br> */}

            <h1 class="text-[yellow] bg-black font-cyber">Trending</h1>

            <div class="flex justify-evenly">
                <div class="text-center bg-cyan-600 h-[250px] w-[200px] m-5 gamebox">
                    <p>Game1</p>
                </div>
                <div class="text-center bg-cyan-600 h-[250px] w-[200px] m-5 gamebox">
                    <p>Game2</p>
                </div>
                <div class="text-center bg-cyan-600 h-[250px] w-[200px] m-5 gamebox">
                    <p>Game3</p>
                </div>
                <div class="text-center bg-cyan-600 h-[250px] w-[200px] m-5 gamebox">
                    <p>Game4</p>
                </div>
            </div>

            {/* <br></br> */}

            <h1 class="text-[yellow] bg-black font-cyber">Programming</h1>
            <div class="flex justify-evenly">
                <div class="text-center bg-cyan-600 h-[250px] w-[200px] m-5 gamebox">
                    <p>Game1</p>
                </div>
                <div class="text-center bg-cyan-600 h-[250px] w-[200px] m-5 gamebox">
                    <p>Game2</p>
                </div>
                <div class="text-center bg-cyan-600 h-[250px] w-[200px] m-5 gamebox">
                    <p>Game3</p>
                </div>
                <div class="text-center bg-cyan-600 h-[250px] w-[200px] m-5 gamebox">
                    <p>Game4</p>
                </div>
            </div>

            {/* <br></br> */}

            <h1 class="text-[yellow] bg-black font-cyber">Fun</h1>
            <div class="flex justify-evenly">
                <div class="text-center bg-cyan-600 h-[250px] w-[200px] m-5 gamebox">
                    <p>Game1</p>
                </div>
                <div class="text-center bg-cyan-600 h-[250px] w-[200px] m-5 gamebox">
                    <p>Game2</p>
                </div>
                <div class="text-center bg-cyan-600 h-[250px] w-[200px] m-5 gamebox">
                    <p>Game3</p>
                </div>
                <div class="text-center bg-cyan-600 h-[250px] w-[200px] m-5 gamebox">
                    <p>Game4</p>
                </div>
            </div>

            {/* <hr></hr> */}

        </main>
    )
}

export default HomePage