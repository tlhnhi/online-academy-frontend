import Loading from 'components/Loading'
import React, { lazy, memo, Suspense } from 'react'
import { Route as DefaultRoute, Switch, useRouteMatch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../shards/styles/shards-dashboards.1.1.0.min.css'
import { DefaultLayout } from 'layouts'

const Home = lazy(() => import('./Home'))

const Route = ({
  component: Component,
  layout: Layout = DefaultLayout,
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
        <Route path={path} component={Home} layout={DefaultLayout} />
      </Switch>
    </Suspense>
  )
})

export default User
