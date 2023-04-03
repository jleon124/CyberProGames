const User = require('../models/User')

const getUsers = async (req, res) => {
    // Get all users from MongoDB
    const users = await User.find().select('-password').lean()

    // If no users 
    if (!users?.length) {
        return res.status(400).json({ message: 'No users found' })
    }

    res.json(users)
}

const getUser = async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id).exec()

    if (!user) {
        return res.status(404).json({ message: 'User not found' })
    }

    res.json(user)
}

const updateUser = async (req, res) => {
    const { id, username, description, profilePicture } = req.body

    const user = await User.findById(id).exec()

    if (!user) {
        return res.status(404).json({ message: 'User not found' })
    }

    user.description = description
    user.profilePicture = profilePicture

    const updatedUser = await user.save()

    res.json({ message: `${updatedUser.username} updated` })
}

const deleteUser = async (req, res) => {
    const { id } = req.body

    if (!id) {
        return res.status(404).json({ message: 'User ID Required' })
    }

    const user = await User.findById(id).exec()

    if (!user) {
        return res.status(404).json({ message: 'User not found'})
    }

    const result = await user.deleteOne()

    const reply = `Username ${result.username} with ID ${result.id} deleted`

    res.json(reply)
}

module.exports = {
    getUsers,
    getUser,
    updateUser,
    deleteUser
}