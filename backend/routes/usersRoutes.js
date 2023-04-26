const express = require('express')
const usersController = require('../controllers/usersController')
const router = express.Router()
const verifyJWT = require('../middleware/verifyJWT')

// /user/
router.get('/all', usersController.getAllUsers)
router.get('/:id', usersController.getUser)
router.patch('/:id/editPicture', verifyJWT, usersController.updatePicture)
router.patch('/:id/editDescription', verifyJWT, usersController.updateDescription)
router.patch('/:id/editPassword', verifyJWT, usersController.updatePassword)
router.delete('/:id', verifyJWT, usersController.deleteUser)

module.exports = router