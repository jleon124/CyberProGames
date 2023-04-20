const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
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
    favorites: {
      type: Array,
      default: []
    },
    views: {
      type: Array,
      default: []
    },
    description: {
      type: String,
      default: "",
      required: true
    },
    comments: {
      type: Array,
      default: []
    }
  }
)

module.exports = mongoose.model('Games', gameSchema)