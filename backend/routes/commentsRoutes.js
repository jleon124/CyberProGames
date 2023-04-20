const express = require('express')
const commentsController = require('../controllers/commentsController')
const router = express.Router()
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

// /comment/
router.get('/all', commentsController.getAllComments)
router.get('/:userId/comments', commentsController.getComment)
router.post('/new', commentsController.createComment)
router.patch('/:id/edit', commentsController.updateComment)
router.delete('/:id', commentsController.deleteComment)


module.exports = router