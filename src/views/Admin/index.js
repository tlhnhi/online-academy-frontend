import Loading from 'components/Loading'
import { DefaultLayout } from 'layouts'
import React, { lazy, memo, Suspense } from 'react'
import { Route as DefaultRoute, Switch, useRouteMatch } from 'react-router-dom'

const Dashboard = lazy(() => import('./Dashboard'))

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

  return (
    <Suspense fallback={<Loading />}>
    <Switch>
      <Route path={path} component={Dashboard} layout={DefaultLayout}/>
    </Switch>
  </Suspense>
  )
})

export default Admin

