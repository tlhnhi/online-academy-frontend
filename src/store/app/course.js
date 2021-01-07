import { createSlice } from '@reduxjs/toolkit'

const courseSlice = createSlice({
  name: 'courseSlice',
  initialState: [],
  reducers: {
    setCourses(_, { payload }) {
      const { courses } = payload
      if (!Array.isArray(courses) || courses.length === 0) return []

      return courses
    }
  }
})

export const { setCourses } = courseSlice.actions

export default courseSlice.reducer
