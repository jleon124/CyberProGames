const Comment = require('../models/Comment')
const User = require('../models/User')

// @desc    Get all comments
// @route   GET /api/comment
// @access  Private
const getAllComments = async (req, res) => {
    const comments = await Comment.find().lean()

    if (!comments?.length) {
        return res.status(400).json({ message: 'No comments found' })
    }

    res.json(comments)
}

// @desc    Get comment
// @route   GET /api/comment
// @access  Private
const getComment = async (req, res) => {
    const { id } = req.params

    const comment = await Comment.findById(id).exec()

    if (!comment) {
        return res.status(400).json({ message: 'Comment not found' })
    }

    res.json(comment)
}

// @desc    Create new comment
// @route   POST /api/comment
// @access  Private
const createComment = async (req, res) => {
    const { content } = req.body

    if (!content) {
        res.status(400).json({ message: 'Content missing' })
    }

    const comment = await Comment.create({ content })

    if (comment) {
        return res.status(201).json({ message: 'New comment created' })
    } else {
        return res.status(400).json({ message: 'Invaldi comment data received' })
    }
}

// @desc    Update comment
// @route   PATCH /api/comment/:id
// @access  Private
const updateComment = async (req, res) => {
    const { id, content } = req.body

    if (!content) {
        return res.status(400).json({ message: 'All fields required' })
    }

    const comment = await Comment.findById(id).exec()

    if (!comment) {
        return res.status(400).json({ message: 'Comment not found' })
    }

    comment.content = content

    const updatedComment = await comment.save()

    res.json(`Comment with id: ${updateComment.id} updated`)
}

// @desc    Delete comment
// @route   DELETE /api/comment/:id
// @access  Private
const deleteComment = async (req, res) => {
    const { id } = req.params

    if (!id) {
        return res.status(400).json({ message: 'Comment ID required' })
    }

    const comment = await Comment.findById(id).exec()

    if (!comment) {
        return res.status(400).json({ message: 'Comment not found' })
    }

    const result = await comment.deleteOne()

    res.json(`Comment with ID: ${result.id} deleted`)
}

module.exports = {
    getAllComments,
    getComment,
    createComment,
    updateComment,
    deleteComment
}

// // Create
// const createComment = async (req, res) => {
//     const { userId, content } = req.body

//     const user = await User.findById(userId)

//     const newComment = new Comment({
//         userId,
//         author: user.username,
//         content,
//         likes: {},
//         dislikes: {},
//     })
//     await newComment.save()

//     const comment = await Comment.find()

//     res.status(201).json(comment)
// }

// // Get
// const getComments = async (req, res) => {
//     const comment = await Comment.find().lean()
//     if (!notes?.length) {
//         return res.status(404).json({ message: 'No notes found' })
//     }

//     res.status(200).json(comment)
// }

// // Update
// const likeComment = async (req, res) => {
//     const { id } = req.params
//     const { userId } = req.body
//     const comment = await Comment.findById(id)
//     const isLiked = comment.likes.get(userId)

//     if (isLiked) {
//         comment.likes.delete(userId)
//     } else {
//         comment.likes.set(userId, true)
//     }

//     const updatedComment = await Comment.findByIdAndUpdate(
//         id,
//         { likes: comment.likes },
//         { new: true }
//     )

//     res.status(200).json(updatedComment)
// }