const Game = require('../models/Game')
const User = require('../models/User')

// @desc    Get game data
// @route   GET /game/:id
// @access  Public
const getGameData = async (req, res) => {

    // get gameId from the url
    const { gameId } = req.params

    // find game by gameId
    const game = await Game.findById(gameId).exec()

    // if cannot find game
    if (!game) {
        return res.status(400).json({ message: 'No game found' })
    }

    // return the game
    res.status(200).json(game)
}

// @desc    Update like and dislike
// @route   PATCH /game/:gameId/liketoggle
// @access  Private
const updateLikeDislike = async (req, res) => {

    // grab gameId from url
    const { gameId } = req.params

    // grab userId and rating status from request body
    const { userId, rtnStatus } = req.body

    // find game by gameId
    const game = await Game.findById(gameId).exec()

    // check if the user has like or disliked the game
    const isLiked = game.likes.get(userId)
    const isDisliked = game.dislikes.get(userId)

    // if cannot find game
    if (!game) {
        return res.status(400).json({ message: `No game found id is ${gameId}` })
    }

    // adds or removes user from game ratings depending on
    // if rating status is like, dislike, or neither
    if (rtnStatus === "like") {
        if (isLiked) { game.likes.delete(userId) }
        else {
            game.likes.set(userId, true)
            game.dislikes.delete(userId)
        }
    } else if (rtnStatus === "dislike") {
        if (isDisliked) { game.dislikes.delete(userId) }
        else {
            game.dislikes.set(userId, true)
            game.likes.delete(userId)
        }
    } else {
        game.likes.delete(userId)
        game.dislikes.delete(userId)
    }

    // update the game with updates
    const updatedGame = await Game.findByIdAndUpdate(
        gameId,
        { likes: game.likes, dislikes: game.dislikes },
        { new: true }
    )

    // return the updated game
    res.status(200).json({ updatedGame })
}

// @desc    Update game fav map and user fav array
// @route   PATCH /game/:id/favtoggle
// @access  Private
const favoriteGame = async (req, res) => {
    
    // grab gameId from url
    const { gameId } = req.params

    // grab userId from request body
    const { userId } = req.body

    // find user and game by their ids
    const user = await User.findById(userId).exec()
    const game = await Game.findById(gameId).exec()

    // add each other to favorites depending
    // if user has favorited or not
    if (user.favGames.includes(gameId)) {
        user.favGames = user.favGames.filter((gameid) => gameid !== gameId)
        game.favorites.delete(userId)
    } else {
        user.favGames.push(gameId)
        game.favorites.set(userId, true)
    }

    // save the updated user
    await user.save()

    // update the game with updated favorites
    const updatedGame = await Game.findByIdAndUpdate(
        gameId,
        { favorites: game.favorites },
        { new: true }
    )

    // return the updated user and game
    res.status(200).json({ user, updatedGame })
}

module.exports = {
    getGameData,
    updateLikeDislike,
    favoriteGame
}