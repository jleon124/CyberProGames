const Comment = require('../models/Comment')
const User = require('../models/User')
const Game = require('../models/Game')

// @desc    Get all game comments
// @route   GET /:gameId/comments
// @access  Public
const getGameComments = async (req, res) => {

  const { gameId } = req.params

  const comments = await Comment.find({ gameId: gameId })

  // check if there are any comments
  if (!comments?.length) {
    return res.status(400).json({ message: 'No comments found' })
  }

  // send response with users
  res.status(200).json(comments)
}

// @desc    Get comment
// @route   GET /:userId/comments
// @access  Private
const getUserComments = async (req, res) => {

  // get user id from url
  const { userId } = req.params

  // get comments from the db with specific userId
  const comments = await Comment.find({ userId })

  // check if there are any comments
  if (!comments) {
    return res.status(400).json({ message: 'Comment not found' })
  }

  res.status(200).json(comments)
}

// @desc    Create new comment
// @route   POST /new-comment
// @access  Private
const createComment = async (req, res) => {

  // grab values from request body
  const { userId, gameId, content } = req.body

  if (!userId || !gameId) {
    res.status(400).json({ message: 'No userid or gameid found' })
  }

  // check if values are present
  if (!content) {
    res.status(400).json({ message: 'Content missing' })
  }

  // find user and game by their ids
  const user = await User.findById(userId).exec()
  const game = await Game.findById(gameId).exec()

  // create comment with values
  const comment = await Comment.create({
    userId: user._id,
    gameId: game._id,
    username: user.username,
    profilePicture: user.profilePicture,
    content
  })

  // put comment in beginning 
  user.comments.unshift(comment)
  game.comments.unshift(comment)

  await user.save()
  await game.save()

  // check if comment is created
  if (comment) {
    return res.status(201).json({ user, game, comment })
  } else {
    return res.status(400).json({ message: 'Invalid comment data received' })
  }
}

// @desc    Like comment
// @route   PATCH /:id/liketoggle
// @access  Private
const likeComment = async (req, res) => {
  const { id } = req.params
  const { userId, gameId } = req.body

  const comment = await Comment.findById(id)
  const isLiked = comment.likes.get(userId)

  if (isLiked) {
    comment.likes.delete(userId)
  } else {
    comment.likes.set(userId, true)
  }

  const updatedComment = await Comment.findByIdAndUpdate(
    id,
    { likes: comment.likes },
    { new: true }
  )

  // find user and game by their ids
  const user = await User.findById(userId).exec()
  const game = await Game.findById(gameId).exec()

  user.comments[user.comments.findIndex((theId) => theId == id)] = updatedComment
  game.comments[game.comments.findIndex((theId) => theId == id)] = updatedComment

  await user.save()
  await game.save()

  // check if comment is created
  if (comment) {
    return res.status(201).json({ user, game, comment })
  } else {
    return res.status(400).json({ message: 'Invalid comment data received' })
  }
}

// @desc    Delete comment
// @route   DELETE /:id
// @access  Private
const deleteComment = async (req, res) => {

  // get comment id from url
  const { id } = req.params
  const { userId, gameId } = req.body

  // delete comment with id
  const comment = await Comment.findOneAndDelete({ _id: id })

  // check if there is a comment
  if (!comment) {
    return res.status(400).json({ message: 'Comment not found' })
  }

  // find user and game by their ids
  const user = await User.findById(userId).exec()
  const game = await Game.findById(gameId).exec()

  user.comments = user.comments.filter((commendid) => commendid !== id)
  game.comments = game.comments.filter((commendid) => commendid !== id)

  await user.save()
  await game.save()

  // send response stating what comment id was deleted
  res.status(200).json({ user, game })
}

module.exports = {
  getGameComments,
  getUserComments,
  createComment,
  likeComment,
  deleteComment
}