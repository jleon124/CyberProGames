const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: "",
        },
        profilePicture: {
            type: Number,
            default: 1,
            required: true
        },
        favGames: {
            type: Array,
            default: []
        },
        recentGames: {
            type: Array,
            default: []
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Users', userSchema)