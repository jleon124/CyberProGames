const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        profilePicture: {
            type: Number,
            required: true
        },
        content: {
            type: String,
            default: "",
            required: true
        },
        likes: {
            type: Array,
            default: []
        },
        dislikes: {
            type: Array,
            default: []
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Comments', commentSchema)