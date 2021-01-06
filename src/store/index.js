import { configureStore } from '@reduxjs/toolkit'
import auth from './app/auth'

const store = configureStore({
  reducer: { auth }
})

export default store
