const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
            ref: 'User',
        },
        author: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        likes: {
            type: Map,
            of: Boolean,
        },
        dislikes: {
            type: Map,
            of: Boolean,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Comment', commentSchema)