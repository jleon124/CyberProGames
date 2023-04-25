const express = require('express')
const gameController = require('../controllers/gameController')
const router = express.Router()
const verifyJWT = require('../middleware/verifyJWT')

// /game/
router.get('/:gameId', gameController.getGameData)
router.patch('/:gameId/liketoggle', verifyJWT, gameController.updateLike)
router.patch('/:gameId/favtoggle', verifyJWT, gameController.favoriteGame)

module.exports = router