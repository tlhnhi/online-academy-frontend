import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'authSlice',
  initialState: '',
  reducers: {
    setAuthToken(_, { payload }) {
      const { token } = payload
      if (!token) return ''

      return token
    },
    clearAuthToken(_) {
      return ''
    }
  }
})

export const { setAuthToken, clearAuthToken } = authSlice.actions

export default authSlice.reducer
