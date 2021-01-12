import { createSlice } from '@reduxjs/toolkit'
import {
  createAccountByAdmin,
  deleteAccount,
  fetchUsers,
  updateAccountByAdmin
} from 'api/user'

const userSlice = createSlice({
  name: 'userSlice',
  initialState: [],
  reducers: {
    _setUsers(_, { payload }) {
      if (!Array.isArray(payload) || payload.length === 0) return []
      return payload
    },
    _addUser(state, { payload }) {
      return [...state, payload]
    },
    _editUser(state, { payload }) {
      const categories = [...state]

      const index = categories.findIndex(x => x._id === payload._id)
      if (~index) categories[index] = payload
    },
    _removeUser(state, { payload }) {
      return state.filter(x => x._id !== payload)
    }
  }
})

const { _setUsers, _addUser, _editUser, _removeUser } = userSlice.actions

export const setUsers = () => async dispatch => {
  const users = await fetchUsers()
  if (users.length > 0) dispatch(_setUsers(users))
}

export const addUser = (email, password) => async dispatch => {
  const user = await createAccountByAdmin(email, password)
  dispatch(_addUser(user))
}

export const editUser = profile => async dispatch => {
  const user = await updateAccountByAdmin(profile)
  dispatch(_editUser(user))
}

export const removeUser = id => async dispatch => {
  await deleteAccount(id)
  dispatch(_removeUser(id))
}

export default userSlice.reducer
