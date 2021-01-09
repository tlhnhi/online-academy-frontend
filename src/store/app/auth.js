import { createSlice } from '@reduxjs/toolkit'
import { signIn, signUp } from 'api/auth'

const authSlice = createSlice({
  name: 'authSlice',
  initialState: '',
  reducers: {
    setAuthToken(_, { payload }) {
      if (!payload) {
        localStorage.removeItem('token')
        return ''
      }

      localStorage.setItem('token', payload)
      return payload
    },
    clearAuthToken(_) {
      localStorage.removeItem('token')
      return ''
    }
  }
})

export const { setAuthToken, clearAuthToken } = authSlice.actions

export const authSignUp = (name, email, password) => async dispatch => {
  const token = await signUp(name, email, password)
  if (!token) return dispatch(clearAuthToken())

  dispatch(setAuthToken(token))
}

export const authSignIn = (email, password) => async dispatch => {
  const { token } = await signIn(email, password)
  if (!token) return dispatch(clearAuthToken())

  dispatch(setAuthToken(token))
}

export default authSlice.reducer
