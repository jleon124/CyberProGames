import React from 'react'

const GameBox = ({title, src, alt, descp}) => {
  return (
    <div class="text-center bg-cyan-600 h-[250px] w-[200px] game-box relative">
        <img className="" src = {src}  width={200} height={200} alt={alt}/>
        <p class="absolute bottom-0 left-5">{title}</p>
    </div>
  )
}

export default GameBox