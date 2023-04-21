import React from 'react'

const GameBox = ({ src = "gameboxicons/comingsoon.png", alt, link, className }) => {

  return (
    <a href={link} className={className}>
      <div className="text-center bg-black/40 h-[250px] w-[200px] game-box relative flex items-center justify-center text-white/40">
        <img className="" src={src} alt={alt} height={150} width={125} />
      </div>
    </a>
  )

}

export default GameBox