const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            min: 3,
            max: 30,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 5,
        },
        description: {
            type: String,
            default: "",
            max: 1200,
        },
        profilePicture: {
            type: Number,
            required: true,
            default: 1,
        },
        favGames: {
            type: Array,
            default: [],
        },
        recentlyPlayed: {
            type: Array,
            default: [],
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Users', userSchema)