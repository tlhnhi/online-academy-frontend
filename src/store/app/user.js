import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'userSlice',
  initialState: [],
  reducers: {
    setUsers(_, { payload }) {
      const { users } = payload
      if (!Array.isArray(users) || users.length === 0) return []

      return users
    }
  }
})

export const { setUsers } = userSlice.actions

export default userSlice.reducer
