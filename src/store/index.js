import { configureStore } from '@reduxjs/toolkit'
import auth from './app/auth'
import currentUser from './app/current-user'
import category from './app/category'

const store = configureStore({
  reducer: { auth, currentUser, category }
})

export default store
