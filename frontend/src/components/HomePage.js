import React from 'react'
import GameBox from './GameBox'

const HomePage = () => {
    return (
        <main class=" pt-5 pb-5 h-auto bg-[linear-gradient(to_bottom,#050b13,#11131e,#1c1727,#2b192e,#3c1b30,#431a2f,#4a192c,#511929,#511627,#501324,#501022,#4f0c1f)]">
            <h1 class="text-[yellow] font-cyber text-5xl mb-12 ml-36">CyberProGames</h1>

            <div class="grid grid-cols-4 grid-rows-2 mx-36 ">

                <p class=" col-span-2 text-[#1afa8d] text-xl ">A website with a purpose of hosting various games ranging
                    from just-for-fun to game to learning about programming/computer
                    science.</p>

                <div class="justify-self-center col-span-2 row-span-2 text-center bg-cyan-600 h-[500px] w-[500px] leaderboard-box ">
                    <p>Leaderboard</p>
                </div>

                <div class=" col-span-2 flex justify-evenly">
                    <GameBox 
                    title={"Linux Quiz Show"}
                    src={"Quizshowgraphic.png"}
                    link={"gamepage"}/>
                    <GameBox 
                    title={"Game 2"}/>
                </div>

            </div>
            <h1 class="text-[rgb(255,255,255,0.4)] font-valo text-3xl mb-6 ml-36 py-4">Trending</h1>
            <div class="flex justify-evenly">
                <GameBox />
                <GameBox />
                <GameBox />
                <GameBox />
            </div>

            <h1 class="text-[rgb(255,255,255,0.4)] font-valo text-3xl mb-6 ml-36 py-4">Programming</h1>
            <div class="flex justify-evenly">
                <GameBox />
                <GameBox />
                <GameBox />
                <GameBox />
            </div>

            <h1 class="text-[rgb(255,255,255,0.4)] font-valo text-3xl mb-6 ml-36 py-4">Fun</h1>
            <div class="flex justify-evenly ">
                <GameBox />
                <GameBox />
                <GameBox />
                <GameBox />
            </div>
        </main>
    )
}

export default HomePage