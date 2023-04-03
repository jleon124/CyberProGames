const express = require('express')
const usersController = require('../controllers/usersController')
const router = express.Router()
const verifyJWT = require('../middleware/verifyJWT')

// router.use(verifyJWT)

router.route('/')
    .get(usersController.getUsers)
    .get(usersController.getUser)
    .patch(usersController.updateUser)
    .delete(usersController.deleteUser)

module.exports = router