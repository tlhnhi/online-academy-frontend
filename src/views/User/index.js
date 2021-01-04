import Loading from 'components/Loading'
import { DefaultLayout } from 'layouts'
import React, { lazy, memo, Suspense } from 'react'
import { Route as DefaultRoute, Switch, useRouteMatch } from 'react-router-dom'

const Home = lazy(() => import('./Home'))
const Category = lazy(() => import('./Category'))
const Course = lazy(() => import('./Course'))
const Profile = lazy(() => import('./Profile'))

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
        <Route path="/courses/:id" component={Course} layout={DefaultLayout} />
        <Route
          path="/categories/:id"
          component={Category}
          layout={DefaultLayout}
        />
        <Route path="/profile" component={Profile} layout={DefaultLayout} />
      </Switch>
    </Suspense>
  )
})

export default User
