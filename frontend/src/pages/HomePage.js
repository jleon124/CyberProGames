import React from 'react'
import GameBox from '../components/GameBox'


const HomePage = () => {

  return (
    <main className=" pt-5 pb-5 h-auto bg-[linear-gradient(to_bottom,#050b13,#11131e,#1c1727,#2b192e,#3c1b30,#431a2f,#4a192c,#511929,#511627,#501324,#501022,#4f0c1f)]">
      <h1 className="text-[yellow] font-cyber text-5xl mb-12 ml-36">CyberProGames</h1>

      <div className="grid grid-cols-4 grid-rows-2 mx-36 ">

        <div data-aos="zoom-out-down" className="bg-black/40 col-span-2 mb-4 ">
          <div className="text-[#58dde5] text-lg p-5">Hello, world! Welcome to the AFK gaming website. This website was created for the purpose
           of teaching you the basics of programming. This website hosts various games from helping you understand programming/computer science 
           to playing mindless fun games. You can create a profile like, favorite, and comment on each game. WOW, that's amazing! You can start 
           with a few clicks. Click login in the far right corner to get started.</div>
        </div>

        <div data-aos="zoom-out-down" className="justify-self-center col-span-2 row-span-2 text-center bg-black/40 text-[#58dde5] w-[500px] leaderboard-box ">
          <div className='p-5'>Leaderboard</div>
          <div className="grid grid-cols-[repeat(2,1fr)] grid-rows-[repeat(11,1fr)] gap-x-0 gap-y-0 text-left p-5">
            <div class="div1">Bullet-Blitz</div>
            <div class="div2">The-Linux-Quiz-Show</div>
            <div class="div3">Samuri-Fight </div>
            <div class="div4">Data-Froger </div>
            <div class="div5">Escape-The-House </div>
            <div class="div6">Rocket </div>
            <div class="div7">Six-Game </div>
            <div class="div8">Seven-Game </div>
            <div class="div9">Eight-Game </div>
            <div class="div10">Nine-Game </div>
            <div class="div11">Ten-Game </div>
            <div class="div12">Likes: 10 </div>
            <div class="div13">Likes: 9 </div>
            <div class="div14">Likes: 8 </div>
            <div class="div15">Likes: 7 </div>
            <div class="div16">Likes: 6 </div>
            <div class="div17">Likes: 5 </div>
            <div class="div18">Likes: 4 </div>
            <div class="div19">Likes: 3 </div>
            <div class="div20">Likes: 2 </div>
            <div class="div21">Likes: 1 </div>
            <div class="div22">Likes: 20 </div>
          </div>

        </div>

        <div data-aos="zoom-out-down" className=" col-span-2 flex ">
          <GameBox
            src={"gameboxicons/quizshow.png"}
            link={"quizshow"}
            className="mr-24" />
          <GameBox 
          src={'gameboxicons/zombiehunter.png'}
          link={"zombiehunter"}/>
        </div>

      </div>

      <h1 className="text-[rgb(255,255,255,0.4)] font-valo text-3xl mb-6 ml-36 pt-20 pb-4">Programming</h1>
      <div data-aos="zoom-out-down" className="flex justify-evenly pb-6">
        <GameBox 
          src={"gameboxicons/quizshow.png"}
          link={"quizshow"}/>
        <GameBox          
          src={"gameboxicons/quizshow.png"}
          link={"matching"}/>
        <GameBox />
        <GameBox />
      </div>

      <h1 className="text-[rgb(255,255,255,0.4)] font-valo text-3xl mb-6 ml-36 py-4">Fun</h1>
      <div data-aos="zoom-out-down" className="flex justify-evenly pb-6">
        <GameBox 
          src={'gameboxicons/zombiehunter.png'}
          link={"zombiehunter"}/>
        <GameBox 
        src={'gameboxicons/rocket.png'}
        link={"rocket"}/>
        <GameBox 
        src={'gameboxicons/samuraifight.png'}/>
        <GameBox 
        src={'gameboxicons/escaperoom.png'}
        link={'escape'}/>
      </div>

      <h1 className="text-[rgb(255,255,255,0.4)] font-valo text-3xl mb-6 ml-36 py-4">Coming Soon</h1>
      <div data-aos="zoom-out-down" className="flex justify-evenly pb-6">
        <GameBox />
        <GameBox />
        <GameBox />
        <GameBox />
      </div>
    </main>
  )

}

export default HomePage