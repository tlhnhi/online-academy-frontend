import { configureStore } from '@reduxjs/toolkit'
import auth from './app/auth'
import currentUser from './app/current-user'
import category from './app/category'
import course from './app/course'
import user from './app/user'

const store = configureStore({
  reducer: { auth, currentUser, category, course, user }
})

export default store
