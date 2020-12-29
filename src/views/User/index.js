import Loading from 'components/Loading'
import React, { lazy, memo, Suspense } from 'react'
import { Route as DefaultRoute, Switch, useRouteMatch } from 'react-router-dom'
import { DefaultLayout } from 'layouts'

const Home = lazy(() => import('./Home'))
const Course = lazy(() => import('./Course'))


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
      </Switch>
    </Suspense>
  )
})

export default User
