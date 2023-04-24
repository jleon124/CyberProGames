import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  comments: [],
  game: null
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
    }
  }
})

export const { setLogin, setLogout, updateUser, setGameData } = authSlice.actions

export default authSlice.reducer