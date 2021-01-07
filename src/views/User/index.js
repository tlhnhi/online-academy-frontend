import Loading from 'components/Loading'
import { DefaultLayout } from 'layouts'
import React, { lazy, memo, Suspense } from 'react'
import { Route as DefaultRoute, Switch, useRouteMatch } from 'react-router-dom'

const Home = lazy(() => import('./Home'))
const Category = lazy(() => import('./Category'))
const Course = lazy(() => import('./Course'))
const WatchList = lazy(() => import('./WatchList'))
const UsersCourse = lazy(() => import('./UsersCourse'))
const Profile = lazy(() => import('./Profile'))
const Login = lazy(() => import('./Login'))
const Register = lazy(() => import('./Register'))
const ForgotPassword = lazy(() => import('./ForgotPassword'))
const ChangePassword = lazy(() => import('./ChangePassword'))
const CreateCourse = lazy(() => import('./CreateCourse'))
const LecturerCourse = lazy(() => import('./LecturerCourse'))

const Error = lazy(() => import('./Error'))

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
    <Suspense fallback={<Loading />}>
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
          path="/lecturer-course"
          component={LecturerCourse}
          layout={DefaultLayout}
        />
        <DefaultRoute path="/error" component={Error} />
      </Switch>
    </Suspense>
  )
})

export default User
