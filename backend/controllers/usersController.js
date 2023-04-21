const User = require('../models/User')

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

  // check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID' })
  }

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
// @route   PATCH /user/:id/edit
// @access  Private
const updateUser = async (req, res) => {

  // grab user id from url
  const { id } = req.params

  // check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID' })
  }

  // get the user from the db with id
  const user = await User.findById(id).exec()

  // check if there is a user
  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  // grab description from request body
  const { description } = req.body

  // check if there is a description
  if (!description) {
    return res.status(400).json({ message: 'All fields reqiured' })
  }

  // set description
  user.description = description

  // grab the updated user
  const updatedUser = await user.save()

  // send response stating that user was updated
  res.status(200).json({ message: `${updatedUser.username} updated` })
}

// @desc    Delete a user
// @route   DELETE /user/:id
// @access  Private
const deleteUser = async (req, res) => {

  // get user id from url
  const { id } = req.params

  // check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID' })
  }

  // delete user with id
  const user = await User.findOneAndDelete({ _id: id })

  // check if there is a user
  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  // send response stating what user was deleted
  res.status(200).json({ message: `Username ${user.username} with ID ${user._id} deleted` })
}

module.exports = {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser
}