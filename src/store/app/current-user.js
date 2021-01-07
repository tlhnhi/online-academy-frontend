import { createSlice } from '@reduxjs/toolkit'

const currentUserSlice = createSlice({
  name: 'currentUserSlice',
  initialState: null,
  reducers: {
    setCurrentUser(_, { payload }) {
      const { user } = payload
      if (!user) return null

      return user
    },
    removeCurrentUser(_) {
      return null
    }
  }
})

export const { setCurrentUser, removeCurrentUser } = currentUserSlice.actions

export default currentUserSlice.reducer
