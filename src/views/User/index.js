import Loading from 'components/Loading'
import React, { lazy, memo, Suspense } from 'react'
import { Route as DefaultRoute, Switch, useRouteMatch } from 'react-router-dom'
import { DefaultLayout } from 'layouts'

const Home = lazy(() => import('./Home'))
const Category = lazy(() => import('./Category'))
const Course = lazy(() => import('./Course'))
const Profile = lazy(() => import('./Profile'))
const Login = lazy(() => import('./Login'))
const Register = lazy(() => import('./Register'))
const ForgotPassword = lazy(() => import('./ForgotPassword'))





const Route = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
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
        <Route path="/course" component={Course} layout={DefaultLayout} />
        <Route path="/category" component={Category} layout={DefaultLayout} />
        <Route path="/profile" component={Profile} layout={DefaultLayout} />
        <Route path="/login" component={Login} layout={DefaultLayout} />
        <Route path="/register" component={Register} layout={DefaultLayout} />
        <Route path="/forgot-password" component={ForgotPassword} layout={DefaultLayout} />

      </Switch>
    </Suspense>
  )
})

export default User
