// IMPORTS
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { logger, logEvents } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/dbConn')
const app = express()

// CONFIGURATIONS
require('dotenv').config()
require('express-async-errors')
app.use(logger, errorHandler)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROUTES
app.use('/', express.static('public'), require('./routes/root'))
app.use('/auth', require('./routes/authRoutes'))
app.use('/user', require('./routes/usersRoutes'))
app.use('/comment', require('./routes/commentsRoutes'))

// MONGOOSE SETUP
const PORT = process.env.PORT || 3500
console.log(process.env.NODE_ENV)
connectDB()

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})