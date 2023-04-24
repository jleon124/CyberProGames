const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
    },
    likes: {
      type: Map,
      of: Boolean
    },
    dislikes: {
      type: Map,
      of: Boolean
    },
    favorites: {
      type: Map,
      of: Boolean
    },
    description: {
      type: String,
      default: "",
    },
    comments: {
      type: Array,
      default: []
    }
  }
)

module.exports = mongoose.model('Games', gameSchema)