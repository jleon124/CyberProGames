const express = require('express')
const gameController = require('../controllers/gameController')
const router = express.Router()

// /game/
router.get('/:gameId', gameController.getGameData)
router.patch('/:gameId/liketoggle', gameController.updateLikeDislike)
router.patch('/:gameId/favtoggle', gameController.favoriteGame)

module.exports = router