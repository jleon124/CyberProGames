const User = require('../models/User')
const bcrypt = require('bcrypt')

// @desc    Get all users
// @route   GET /user/all
// @access  Private
const getAllUsers = async (req, res) => {

  // get users quickly with lean
  const users = await User.find({}).lean()

  // check if there are any users
  if (!users?.length) {
    return res.status(400).json({ message: 'No users found' })
  }

  // send response with users
  res.status(200).json(users)
}

// @desc    Get user
// @route   GET /user/:id
// @access  Private
const getUser = async (req, res) => {

  // get user id from url
  const { id } = req.params

  // get the user from the db with id
  const user = await User.findById(id).exec()

  // check if there is a user
  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  // send response with user
  res.status(200).json(user)
}

// @desc    Update a user
// @route   PATCH /user/:id/editPicture
// @access  Private
const updatePicture = async (req, res) => {

  // grab user id from url
  const { id } = req.params

  // grab profile pic from request body
  const { profilePicture } = req.body

  if (!profilePicture) {
    return res.status(400).json({message: 'No pic found'})
  }

  // get the user from the db with id
  const user = await User.findById(id).exec()

  // check if there is a user
  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  // set profile picture
  user.profilePicture = profilePicture

  // grab the updated user
  user.save()

  // send response stating that user was updated
  res.status(200).json({ user })
}

// @desc    Update a user
// @route   PATCH /user/:id/editDescription
// @access  Private
const updateDescription = async (req, res) => {

  // grab user id from url
  const { id } = req.params

  // grab description from request body
  const { description } = req.body

  if (!description) {
    return res.status(400).json({message: 'No pic found'})
  }

  // get the user from the db with id
  const user = await User.findById(id).exec()

  // check if there is a user
  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  // set description
  user.description = description

  // grab the updated user
  user.save()

  // send response stating that user was updated
  res.status(200).json({ user })
}

// @desc    Update a user
// @route   PATCH /user/:id/editPassword
// @access  Private
const updatePassword = async (req, res) => {

  // grab user id from url
  const { id } = req.params

  // grab description from request body
  const { oldPassword, newPassword } = req.body

  if (!oldPassword || !newPassword) {
    return res.status(400).json({message: 'No values found'})
  }

  // get the user from the db with id
  const user = await User.findById(id).exec()

  // check if there is a user
  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  // see if passwords match
  const isMatch = await bcrypt.compare(oldPassword, user.password)
  if (!isMatch) {
    return res.status(400).json({ message: 'Passwords do not match' })
  }

  const newHashedPassword = await bcrypt.hash(newPassword, 10)

  // set description
  user.password = newHashedPassword

  // grab the updated user
  user.save()

  // send response stating that user was updated
  res.status(200).json({ user })
}

// @desc    Delete a user
// @route   DELETE /user/:id
// @access  Private
const deleteUser = async (req, res) => {

  // get user id from url
  const { id } = req.params

  // delete user with id
  const user = await User.findOneAndDelete({ _id: id })

  // check if there is a user
  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  // send response stating what user was deleted
  res.status(200).json({ user })
}

module.exports = {
  getAllUsers,
  getUser,
  updatePicture,
  updateDescription,
  updatePassword,
  deleteUser
}