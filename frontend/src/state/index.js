import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  game: null,
  comments: [],
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
    setLogout: (state) => {
      state.user = null
      state.token = null
    },
    updateUser: (state, action) => {
      state.user = action.payload.user
    },
    setGameData: (state, action) => {
      state.game = action.payload.game
    },
    setComments: (state, action) => {
      state.comments = action.payload.comments
    },
    setComment: (state, action) => {
      const updatedComments = state.comments.map((comment) => {
        if (comment._id === action.payload.comment._id) return action.payload.comment
        return comment
      })
      state.comments = updatedComments
    }
  }
})

export const {
  setLogin,
  setLogout,
  updateUser,
  setGameData,
  setComments,
  setComment
} = authSlice.actions

export default authSlice.reducer