import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'authSlice',
  initialState: '',
  reducers: {
    setAuthToken(_, { payload }) {
      const { token } = payload
      if (!token) {
        localStorage.removeItem('token')
        return ''
      }

      localStorage.setItem('token', token)
      return token
    },
    clearAuthToken(_) {
      localStorage.removeItem('token')
      return ''
    }
  }
})

export const { setAuthToken, clearAuthToken } = authSlice.actions

export default authSlice.reducer
