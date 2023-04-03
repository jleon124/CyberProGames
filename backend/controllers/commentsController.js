// const Comment = require('../models/Comment')
// const User = require('../models/User')

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