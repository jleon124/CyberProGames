import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <footer class="flex flex-col font-mono bg-[linear-gradient(to_bottom,#4f0c1f,#410f28,#30122b,#201428,#131221,#0e101d,#090e18,#050b13,#050b13,#050b13,#050b13,#050b13)]">
      <img src='/footer_razor_img.png' alt="footer" class="absolute w-full" />

      <section class="my-20 w-full flex justify-evenly">

        <div class="text-[white] flex flex-col">
          <h1 class="text-[#29bffd] text-xl"><strong>CyberProGames</strong></h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/profile">Profile</Link>
        </div>

        <div class="text-white flex flex-col">
          <h1 class="text-[#29bffd] text-xl"><strong>Browse Games</strong></h1>
          <Link to="/gamepage">Game</Link>
          <Link to="/gamepage">Game</Link>
          <Link to="/gamepage">Game</Link>
          <Link to="/gamepage">Game</Link>
        </div>

        <div class="text-white flex flex-col">
          <h1 class="text-[#29bffd] text-xl"><strong>Follow Us</strong></h1>
          <Link to="https://www.linkedin.com/in/m1darl1ng/" target="blank">Miranda</Link>
          <Link to="https://www.linkedin.com/in/jafet-leon-perez/" target="blank">Jafet</Link>
          <Link to="https://www.linkedin.com/in/-saif-shaikh/" target="blank">Saif</Link>
          <Link to="https://www.linkedin.com/in/javier-zarate-zaragoza-7b6817240/" target="blank">Javier</Link>
        </div>


      </section>

      <h1 class="text-[yellow] mt-0.5 mb-14 self-center">© 2023 CyberProGames All Rights Reserved. </h1>

    </footer>
  )
  
}

export default Footer