import React from 'react'

const GameBox = ({title, src, alt, link}) => {
  return (
    <a href={link}>
      <div class="text-center bg-cyan-600 h-[250px] w-[200px] game-box relative flex items-center justify-center">
        <a href={link}><img className="" src = {src}  width={200} height={200} alt={alt}/></a>
        <a href={link}><p class="absolute bottom-0 left-5">{title}</p></a>
      </div>
    </a>
    
  )
}

export default GameBox