import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <footer className="flex flex-col font-mono bg-[linear-gradient(to_bottom,#4f0c1f,#410f28,#30122b,#201428,#131221,#0e101d,#090e18,#050b13,#050b13,#050b13,#050b13,#050b13)]">
      <img src='/footer_razor_img.png' alt="footer" className="absolute w-full" />

      <section className="my-20 w-full flex justify-evenly">

        <div className="text-[white] flex flex-col">
          <h1 className="text-[#29bffd] text-xl"><strong>CyberProGames</strong></h1>
          <Link to="/" className=' hover:underline hover:text-[yellow]'>Home</Link>
          <Link to="/about" className=' hover:underline hover:text-[yellow]'>About</Link>
          <Link to="/settings" className=' hover:underline hover:text-[yellow]'>Settings</Link>
          <Link to="/profile" className=' hover:underline hover:text-[yellow]'>Profile</Link>
        </div>

        <div className="text-white flex flex-col">
          <h1 className="text-[#29bffd] text-xl"><strong>Browse Games</strong></h1>
          <Link to="/quizshow" className=' hover:underline hover:text-[yellow]'>Linux Quiz Show</Link>
          <Link to="/bulletblitz" className=' hover:underline hover:text-[yellow]'>Bullet Blitz</Link>
          <Link to="/rocket" className=' hover:underline hover:text-[yellow]'>Rocket</Link>
          <Link to="/matching" className=' hover:underline hover:text-[yellow]'>The Matching Game</Link>
        </div>

        <div className="text-white flex flex-col">
          <h1 className="text-[#29bffd] text-xl"><strong>Follow Us</strong></h1>
          <Link to="https://www.linkedin.com/in/m1darl1ng/" target="blank" className=' hover:underline hover:text-[yellow]'>Miranda</Link>
          <Link to="https://www.linkedin.com/in/jafet-leon-perez/" target="blank" className=' hover:underline hover:text-[yellow]'>Jafet</Link>
          <Link to="https://www.linkedin.com/in/-saif-shaikh/" target="blank" className=' hover:underline hover:text-[yellow]'>Saif</Link>
          <Link to="https://www.linkedin.com/in/javier-zarate-zaragoza-7b6817240/" target="blank" className=' hover:underline hover:text-[yellow]'>Javier</Link>
        </div>


      </section>

      <h1 className="text-[yellow] mt-0.5 mb-14 self-center">© 2023 CyberProGames All Rights Reserved. </h1>

    </footer>
  )

}

export default Footer