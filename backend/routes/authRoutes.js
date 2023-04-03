const express = require('express')
const authController = require('../controllers/authController')
const loginLimiter = require('../middleware/loginLimiter')
const router = express.Router()

// inside auth route (auth/login)
// router.post(loginLimiter, authController.login)

module.exports = router