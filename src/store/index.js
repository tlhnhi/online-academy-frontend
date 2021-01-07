import { configureStore } from '@reduxjs/toolkit'
import auth from './app/auth'
import currentUser from './app/current-user'

const store = configureStore({
  reducer: { auth, currentUser }
})

export default store
