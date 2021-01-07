import { createSlice } from '@reduxjs/toolkit'

const categorySlice = createSlice({
  name: 'categorySlice',
  initialState: [],
  reducers: {
    setCategories(_, { payload }) {
      const { categories } = payload
      if (!Array.isArray(categories) || categories.length === 0) return []

      return categories
    }
  }
})

export const { setCategories } = categorySlice.actions

export default categorySlice.reducer
