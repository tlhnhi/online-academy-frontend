import { configureStore } from '@reduxjs/toolkit'
import category from './app/category'
import course from './app/course'
import currentUser from './app/current-user'
import user from './app/user'

const store = configureStore({
  reducer: { currentUser, category, course, user }
})

export default store
