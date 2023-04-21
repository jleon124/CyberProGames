const Comment = require('../models/Comment')

// @desc    Get all comments
// @route   GET /comment/all
// @access  Private
const getAllComments = async (req, res) => {

  // get comments quickly with lean
  const comments = await Comment.find({}).lean()

  // check if there are any comments
  if (!comments?.length) {
    return res.status(400).json({ message: 'No comments found' })
  }

  // send response with users
  res.status(200).json(comments)
}

// @desc    Get comment
// @route   GET /comment/:userId/comments
// @access  Private
const getComment = async (req, res) => {

  // get user id from url
  const { userId } = req.params

  // check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID' })
  }

  // get comments from the db with specific userId
  const comments = await Comment.find({ userId })

  // check if there are any comments
  if (!comments) {
    return res.status(400).json({ message: 'Comment not found' })
  }


  res.status(200).json(comments)
}

// @desc    Create new comment
// @route   POST /comment/new
// @access  Private
const createComment = async (req, res) => {

  // grab values from request body
  const { content } = req.body

  // check if values are present
  if (!content) {
    res.status(400).json({ message: 'Content missing' })
  }

  // create comment with values
  const comment = await Comment.create({ content })

  // check if comment is created
  if (comment) {
    return res.status(201).json({ message: 'New comment created' })
  } else {
    return res.status(400).json({ message: 'Invaldi comment data received' })
  }
}

// @desc    Update comment
// @route   PATCH /comment/:id/edit
// @access  Private
const updateComment = async (req, res) => {

  // grab comment id from url
  const { id } = req.body

  // check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID' })
  }

  // get the comment from the db with id
  const comment = await Comment.findById(id).exec()

  // check if there is a comment
  if (!comment) {
    return res.status(400).json({ message: 'Comment not found' })
  }

  // grab content from request body
  const { content } = req.body

  // check if there is content
  if (!content) {
    return res.status(400).json({ message: 'All fields required' })
  }

  // set content
  comment.content = content

  // grab the updated comment
  const updatedComment = await comment.save()

  // send response stating comment was updated
  res.status(200).json(`Comment with id: ${updatedComment.id} updated`)
}

// @desc    Delete comment
// @route   DELETE /comment/:id
// @access  Private
const deleteComment = async (req, res) => {

  // get comment id from url
  const { id } = req.params

  // check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID' })
  }

  // delete comment with id
  const comment = await Comment.findOneAndDelete({ _id: id })

  // check if there is a comment
  if (!comment) {
    return res.status(400).json({ message: 'Comment not found' })
  }

  // send response stating what comment id was deleted
  res.status(200).json({ message: `Comment with ID ${comment._id} deleted` })
}

module.exports = {
  getAllComments,
  getComment,
  createComment,
  updateComment,
  deleteComment
}