import { createSlice } from '@reduxjs/toolkit'
import {
  createCourse,
  deleteCourse,
  deleteCourseByAdmin,
  fetchCourses,
  updateCourse
} from 'api/course'

const courseSlice = createSlice({
  name: 'courseSlice',
  initialState: [],
  reducers: {
    _setCourses(_, { payload }) {
      if (!Array.isArray(payload) || payload.length === 0) return []
      return payload
    },
    _addCourse(state, { payload }) {
      return [...state, payload]
    },
    _editCourse(state, { payload }) {
      const categories = [...state]

      const index = categories.findIndex(x => x._id === payload._id)
      if (~index) categories[index] = payload
    },
    _removeCourse(state, { payload }) {
      return state.filter(x => x._id !== payload)
    }
  }
})

const {
  _setCourses,
  _addCourse,
  _editCourse,
  _removeCourse
} = courseSlice.actions

export const setCourses = () => async dispatch => {
  const courses = await fetchCourses()
  if (courses.length > 0) dispatch(_setCourses(courses))
}

export const addCourse = course => async dispatch => {
  const c = await createCourse(course)
  dispatch(_addCourse(c))
}

export const editCourse = course => async dispatch => {
  const c = await updateCourse(course)
  dispatch(_editCourse(c))
}

export const removeCourse = id => async dispatch => {
  await deleteCourseByAdmin(id)
  dispatch(_removeCourse(id))
}

export const removeCourseLecturer = id => async dispatch => {
  await deleteCourse(id)
  dispatch(_removeCourse(id))
}

export default courseSlice.reducer
