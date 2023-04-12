import React from 'react'


const GameBox = ({title = 'Coming Soon', src = "comingsoon.png", alt, link}) => {
  return (
    <a href={link}>
      <div class="text-center bg-black/40 h-[250px] w-[200px] game-box relative flex items-center justify-center text-white/40">
        <a href={link}><img className="" src = {src} alt={alt} height={150} width={125}/></a>
        <a href={link}><p class="absolute bottom-0 left-5">{title}</p></a>
      </div>
    </a>
    
  )
}

export default GameBox