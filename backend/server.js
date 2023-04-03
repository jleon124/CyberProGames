// IMPORTS
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const { logger, logEvents } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/dbConn')

// CONFIGURATIONS
require('dotenv').config()

require('express-async-errors')

const app = express()

app.use(logger)

app.use(errorHandler)

app.use(cors())

app.use(express.json())

// ROUTES
// Once users go to these routes on root, it will load router info
app.use('/', express.static('public'), require('./routes/root'))
app.use('/users', require('./routes/usersRoutes'))
// app.use('/comments', require('./routes/commentsRoutes'))


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