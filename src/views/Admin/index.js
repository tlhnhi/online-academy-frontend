import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Redirect,
  Route as DefaultRoute,
  Switch,
  useRouteMatch
} from 'react-router-dom'
import { setUsers } from 'store/app/user'
import { AdminLayout } from '../../layouts/Admin'
import Categories from './Category'
import Courses from './Course'
import Dashboard from './Dashboard'
import Lecturers from './Lecturer'
import Students from './Student'

const Route = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <DefaultRoute
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

const Admin = memo(() => {
  const { path } = useRouteMatch()
  const dispatch = useDispatch()

  const currentUser = useSelector(x => x.currentUser)
  const users = useSelector(x => x.user)

  useEffect(() => {
    if (users.length === 0) dispatch(setUsers())
  }, [users, dispatch])

  console.log('Admin', { users }, { currentUser })

  if (currentUser?.email !== 'quack@domain.com') {
    return <Redirect to="/error" />
  }

  return (
    <Switch>
      <Route exact path={path} component={Dashboard} layout={AdminLayout} />
      <Route
        exact
        path={`${path}/categories`}
        component={Categories}
        layout={AdminLayout}
      />
      <Route
        exact
        path={`${path}/courses`}
        component={Courses}
        layout={AdminLayout}
      />
      <Route
        exact
        path={`${path}/students`}
        component={Students}
        layout={AdminLayout}
      />
      <Route
        exact
        path={`${path}/lecturers`}
        component={Lecturers}
        layout={AdminLayout}
      />
    </Switch>
  )
})

export default Admin
