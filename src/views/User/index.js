import { DefaultLayout } from 'layouts'
import React, { memo } from 'react'
import { Route as DefaultRoute, Switch, useRouteMatch } from 'react-router-dom'
import Category from './Category'
import ChangePassword from './ChangePassword'
import Course from './Course'
import CreateCourse from './CreateCourse'
import Error from './Error'
import ForgotPassword from './ForgotPassword'
import Home from './Home'
import LecturerCourse from './LecturerCourse'
import Login from './Login'
import Profile from './Profile'
import Register from './Register'
import UsersCourse from './UsersCourse'
import WatchList from './WatchList'

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

const User = memo(() => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={path} component={Home} layout={DefaultLayout} />
      <Route exact path="/home" component={Home} layout={DefaultLayout} />
      <Route path="/courses/:id" component={Course} layout={DefaultLayout} />
      <Route
        path="/categories/:id"
        component={Category}
        layout={DefaultLayout}
      />
      <Route path="/watchlist" component={WatchList} layout={DefaultLayout} />
      <Route
        path="/my-courses"
        component={UsersCourse}
        layout={DefaultLayout}
      />
      <Route path="/profile" component={Profile} layout={DefaultLayout} />
      <Route path="/login" component={Login} layout={DefaultLayout} />
      <Route path="/register" component={Register} layout={DefaultLayout} />
      <Route
        path="/forgot-password"
        component={ForgotPassword}
        layout={DefaultLayout}
      />
      <Route
        path="/change-password"
        component={ChangePassword}
        layout={DefaultLayout}
      />
      <Route
        path="/create-course"
        component={CreateCourse}
        layout={DefaultLayout}
      />
      <Route
        path="/lecturer-courses/:id"
        component={LecturerCourse}
        layout={DefaultLayout}
      />
      <DefaultRoute path="/error" component={Error} />
    </Switch>
  )
})

export default User
