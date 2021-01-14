import { createSlice } from '@reduxjs/toolkit'
import {
  createCategory,
  deleteCategory,
  fetchCategories,
  updateCategory
} from 'api/category'

const categorySlice = createSlice({
  name: 'categorySlice',
  initialState: [],
  reducers: {
    _setCategories(_, { payload }) {
      if (!Array.isArray(payload) || payload.length === 0) return []
      return payload
    },
    _addCategory(state, { payload }) {
      return [...state, payload]
    },
    _editCategory(state, { payload }) {
      const categories = [...state]

      const index = categories.findIndex(x => x._id === payload._id)
      if (~index) categories[index] = { ...categories[index], payload }
    },
    _removeCategory(state, { payload }) {
      return state.filter(x => x._id !== payload)
    }
  }
})

const { _setCategories, _removeCategory } = categorySlice.actions

export const setCategories = () => async dispatch => {
  const categories = await fetchCategories()
  if (categories.length > 0) dispatch(_setCategories(categories))
}

export const addCategory = (name, parent) => async dispatch => {
  await createCategory(name, parent)
  alert('Category created')
  window.location.reload()
}

export const editCategory = (id, name) => async dispatch => {
  await updateCategory(id, name)
  alert('Category updated')
  window.location.reload()
}

export const removeCategory = id => async dispatch => {
  await deleteCategory(id)
  alert('Category removed')
  dispatch(_removeCategory(id))
  window.location.reload()
}

export default categorySlice.reducer
