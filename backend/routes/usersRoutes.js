const express = require('express')
const usersController = require('../controllers/usersController')
const router = express.Router()
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

// /user/
router.get('/all', usersController.getAllUsers)
router.get('/:id', usersController.getUser)
router.patch('/:id/editPicture', usersController.updatePicture)
router.patch('/:id/editDescription', usersController.updateDescription)
router.patch('/:id/editPassword', usersController.updatePassword)
router.delete('/:id', usersController.deleteUser)

module.exports = router