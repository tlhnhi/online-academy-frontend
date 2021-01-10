import 'bootstrap/dist/css/bootstrap.min.css'
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { setCategories } from 'store/app/category'
import { setCourses } from 'store/app/course'
import { removeCurrentUser, setCurrentUser } from 'store/app/current-user'
import './shards/styles/shards-dashboards.1.1.0.min.css'
import Admin from './views/Admin'
import User from './views/User'

const App = memo(() => {
  const dispatch = useDispatch()

  const courses = useSelector(x => x.course)
  const categories = useSelector(x => x.category)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      return dispatch(setCurrentUser())
    }

    dispatch(removeCurrentUser())
  }, [dispatch])

  useEffect(() => {
    if (courses.length === 0) dispatch(setCourses())
    if (categories.length === 0) dispatch(setCategories())
  }, [courses, categories, dispatch])

  console.log('App', { courses }, { categories })

  return (
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/" component={User} />
    </Switch>
  )
})

export default App
