const express = require('express')
const commentsController = require('../controllers/commentsController')
const router = express.Router()
const verifyJWT = require('../middleware/verifyJWT')

// /comment/
router.get("/:gameId/comments", commentsController.getGameComments)
router.get("/:userId/comments", verifyJWT, commentsController.getUserComments)
router.post("/new-comment", verifyJWT, commentsController.createComment)
router.patch("/:id/liketoggle", verifyJWT, commentsController.likeComment)
router.delete("/:id", verifyJWT, commentsController.deleteComment)


module.exports = router