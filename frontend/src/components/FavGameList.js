import React from 'react'
import GameBox from './GameBox'

const FavGameList = ({ favorites, className }) => {

  const gameConverter = (favorite) => {
    switch (favorite) {
      case '64446517836062ea7c5bc61f':
        return <GameBox
          src='gameboxicons/quizshow.png'
          link={"quizshow"} className="mr-6"/>
      case '6448424dd440c3788337942f':
        return <GameBox
          src={'gameboxicons/escaperoom.png'}
          link={'escape'} className="mr-6"/>
      case '64485825d440c37883379430':
        return <GameBox
          src={"gameboxicons/quizshow.png"}
          link={"matching"} className="mr-6"/>
      case '6448594dd440c37883379431':
        return <GameBox
          src={'gameboxicons/rocket.png'}
          link={"rocket"} className="mr-6"/>
      case '64485b00d440c37883379432':
        return <GameBox
          src={'gameboxicons/zombiehunter.png'}
          link={"zombiehunter"} className="mr-6"/>
      default:
        return <GameBox />
    }
  }

  return (
    <div className={className}>
      {favorites.map((game) => (
        gameConverter(game)
      ))}
    </div>
  )
}

export default FavGameList