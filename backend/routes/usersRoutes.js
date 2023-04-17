const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
// const verifyJWT = require('../middleware/verifyJWT')
// router.use(verifyJWT)

router.post('/login', usersController.loginUser)
router.post('/register', usersController.createUser)

router.get('/all', usersController.getAllUsers)
router.delete('/:id', usersController.deleteUser)
// router.get('/:id', usersController.getUser)
// router.patch('/:id', usersController.updateUser)

module.exports = router