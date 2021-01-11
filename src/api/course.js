import axiosClient from './axiosClient'

export const searchCourses = async keyword => {
  const { success, message, data } = await axiosClient({
    url: '/search',
    method: 'post',
    data: { keyword }
  })

  return success ? data : alert(message)
}

export const fetchCourses = async () => {
  const { success, message, data } = await axiosClient({ url: '/course' })
  return success ? data : alert(message)
}

export const fetchCourse = async id => {
  const { success, message, data } = await axiosClient({ url: `/course/${id}` })
  return success ? data : alert(message)
}

export const fetchEnrolledCourses = async () => {
  const { success, message, data } = await axiosClient({
    url: '/course-enroll'
  })

  return success ? data : alert(message)
}

export const fetchUploadedCourses = async () => {
  const { success, message, data } = await axiosClient({
    url: '/course-lecturer'
  })

  return success ? data : alert(message)
}

export const fetchFavoriteCourses = async () => {
  const { success, message, data } = await axiosClient({
    url: '/course-favorite'
  })

  return success ? data : alert(message)
}

export const fetchRatedCourses = async () => {
  const { success, message, data } = await axiosClient({
    url: '/course-rating'
  })

  return success ? data : alert(message)
}

export const fetchRatedInfo = async id => {
  const { success, message, data } = await axiosClient({
    url: `/course-rating/${id}`
  })

  return success ? data : alert(message)
}

export const checkIsEnrolledCourse = async id => {
  const { success, message, data } = await axiosClient({
    url: `/course-enroll/${id}`
  })

  return success ? data : alert(message)
}

export const checkIsFavoritedCourse = async id => {
  const { success, message, data } = await axiosClient({
    url: `/course-favorite/${id}`
  })

  return success ? data : alert(message)
}

export const enrollNewCourse = async id => {
  const { success, message, data } = await axiosClient({
    url: '/course-enroll',
    method: 'post',
    data: { course: id }
  })

  return success ? data : alert(message)
}

export const updateEnrolledCourses = async courses => {
  const { success, message, data } = await axiosClient({
    url: '/course-enroll',
    method: 'post',
    data: { courses }
  })

  return success ? data : alert(message)
}

export const addCourseToFavorite = async id => {
  const { success, message, data } = await axiosClient({
    url: '/course-favorite',
    method: 'post',
    data: { course: id }
  })

  return success ? data : alert(message)
}

export const removeCourseFromFavorite = async id => {
  const { success, message, data } = await axiosClient({
    url: `/course-favorite/${id}`,
    method: 'delete'
  })

  return success ? data : alert(message)
}

export const createCourse = async course => {
  const { success, message, data } = await axiosClient({
    url: '/course-lecturer',
    method: 'post',
    data: course
  })

  return success ? data : alert(message)
}

export const createCourseRating = async (courseId, comment, star) => {
  const { success, message, data } = await axiosClient({
    url: '/course-rating',
    method: 'post',
    data: { course_id: courseId, comment, star }
  })

  return success ? data : alert(message)
}

export const createCourseByAdmin = async course => {
  const { success, message, data } = await axiosClient({
    url: '/course',
    method: 'post',
    data: course
  })

  return success ? data : alert(message)
}

export const updateCourse = async course => {
  const { success, message, data } = await axiosClient({
    url: `/course-lecturer/${course._id}`,
    method: 'put',
    data: course
  })

  return success ? data : alert(message)
}

export const updateCourseContent = async (id, content) => {
  const { success, message, data } = await axiosClient({
    url: `/course-lecturer/${id}`,
    method: 'post',
    data: { content }
  })

  return success ? data : alert(message)
}

export const updateCourseByAdmin = async course => {
  const { success, message, data } = await axiosClient({
    url: `/course/${course._id}`,
    method: 'put',
    data: course
  })

  return success ? data : alert(message)
}

export const deleteCourse = async id => {
  const { success, message, data } = await axiosClient({
    url: `/course-lecturer/${id}`,
    method: 'delete'
  })

  return success ? data : alert(message)
}

export const deleteCourseByAdmin = async id => {
  const { success, message, data } = await axiosClient({
    url: `/course/${id}`,
    method: 'delete'
  })

  return success ? data : alert(message)
}
