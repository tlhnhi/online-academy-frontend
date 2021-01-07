import axiosClient from 'api/axiosClient'
import 'bootstrap/dist/css/bootstrap.min.css'
import Loading from 'components/Loading'
import React, { lazy, memo, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { clearAuthToken, setAuthToken } from 'store/app/auth'
import { setCategories } from 'store/app/category'
import { removeCurrentUser, setCurrentUser } from 'store/app/current-user'
import './shards/styles/shards-dashboards.1.1.0.min.css'

const Admin = lazy(() => import('./views/Admin'))
const User = lazy(() => import('./views/User'))

const App = memo(() => {
  const authToken = useSelector(state => state.auth)
  const currentUser = useSelector(state => state.currentUser)
  const categories = useSelector(state => state.category)

  const dispatch = useDispatch()

  useEffect(() => {
    const checkLoggedIn = async () => {
      if (!!authToken) return

      const token = localStorage.getItem('token')
      if (!!token) return dispatch(setAuthToken({ token }))

      dispatch(clearAuthToken())
    }

    const fetchCategories = async () => {
      if (categories.length > 0) return

      const { success, message, data } = await axiosClient({ url: '/category' })
      if (!success) return alert(message)

      dispatch(setCategories({ categories: data }))
    }

    checkLoggedIn()
    fetchCategories()
    return () => checkLoggedIn()
  }, [authToken, categories, dispatch])

  useEffect(() => {
    const fetchProfile = async () => {
      if (!!currentUser) return

      const { success, data } = await axiosClient({ url: '/user/profile' })
      if (!success) return dispatch(removeCurrentUser())

      dispatch(setCurrentUser({ user: data }))
    }

    fetchProfile()
    return () => fetchProfile()
  }, [currentUser, dispatch])

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={User} />
      </Switch>
    </Suspense>
  )
})

export default App
