const express = require('express')
const commentsController = require('../controllers/commentsController')
const router = express.Router()

router.get('/all', commentsController.getAllComments)
router.get('/', commentsController.getComment)
router.post('/new', commentsController.createComment)
router.patch('/:id', commentsController.updateComment)
router.delete('/:id', commentsController.deleteComment)


module.exports = router