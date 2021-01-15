import { createSlice } from '@reduxjs/toolkit'
import { fetchProfile } from 'api/user'

const currentUserSlice = createSlice({
  name: 'currentUserSlice',
  initialState: null,
  reducers: {
    _setCurrentUser(_, { payload }) {
      if (!payload?._id) return null
      return payload
    },
    _removeCurrentUser(_) {
      localStorage.removeItem('token')
      return null
    }
  }
})

const { _setCurrentUser, _removeCurrentUser } = currentUserSlice.actions

export const setCurrentUser = () => async dispatch => {
  const me = await fetchProfile()

  if (me?._id) {
    if (me.isBlocked) {
      return alert('Your account has been blocked!')
    }

    dispatch(_setCurrentUser(me))
  }
}

export const removeCurrentUser = () => dispatch => {
  dispatch(_removeCurrentUser())
}

export default currentUserSlice.reducer
