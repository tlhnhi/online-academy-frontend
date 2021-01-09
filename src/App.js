import axiosClient from 'api/axiosClient'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { clearAuthToken, setAuthToken } from 'store/app/auth'
import { setCategories } from 'store/app/category'
import { setCourses } from 'store/app/course'
import { removeCurrentUser, setCurrentUser } from 'store/app/current-user'
import { setUsers } from 'store/app/user'
import './shards/styles/shards-dashboards.1.1.0.min.css'
import Admin from './views/Admin'
import User from './views/User'

const App = memo(() => {
  const authToken = useSelector(state => state.auth)
  const currentUser = useSelector(state => state.currentUser)
  const categories = useSelector(state => state.category)
  const courses = useSelector(state => state.course)
  const users = useSelector(state => state.user)

  const dispatch = useDispatch()

  useEffect(() => {
    const checkLoggedIn = async () => {
      if (!!authToken) return

      const token = localStorage.getItem('token')
      if (!!token) return dispatch(setAuthToken({ token }))

      dispatch(clearAuthToken())
    }

    checkLoggedIn()
    return () => checkLoggedIn()
  }, [authToken, dispatch])

  useEffect(() => {
    const fetchProfile = async () => {
      if (!authToken || !!currentUser) return

      const { success, data } = await axiosClient({ url: '/user/profile' })
      if (!success) return dispatch(removeCurrentUser())

      dispatch(setCurrentUser({ user: data }))
    }

    fetchProfile()
    return () => fetchProfile()
  }, [authToken, currentUser, dispatch])

  useEffect(() => {
    const fetchCategories = async () => {
      if (categories.length > 0) return

      const { success, message, data } = await axiosClient({ url: '/category' })
      if (!success) return alert(message)

      dispatch(setCategories({ categories: data }))
    }

    const fetchCourses = async () => {
      if (courses.length > 0) return

      const { success, message, data } = await axiosClient({ url: '/course' })
      if (!success) return alert(message)

      dispatch(setCourses({ courses: data }))
    }

    const fetchUsers = async () => {
      if (users.length > 0) return

      const { success, message, data } = await axiosClient({ url: '/users' })

      if (!success) return alert(message)
      dispatch(setUsers({ users: data }))
    }

    fetchCategories()
    fetchCourses()
    fetchUsers()
  }, [categories.length, courses.length, users.length, dispatch])

  return (
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/" component={User} />
    </Switch>
  )
})

export default App
