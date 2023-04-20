const express = require('express')
const usersController = require('../controllers/usersController')
const router = express.Router()
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

// /user/
router.get('/all', usersController.getAllUsers)
router.get('/:id', usersController.getUser)
router.patch('/:id/edit', usersController.updateUser)
router.delete('/:id', usersController.deleteUser)

module.exports = router