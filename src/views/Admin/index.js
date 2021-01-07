import Loading from 'components/Loading'
import { AdminLayout } from '../../layouts/Admin'
import React, { lazy, memo, Suspense } from 'react'
import { Route as DefaultRoute, Switch, useRouteMatch } from 'react-router-dom'

const Dashboard = lazy(() => import('./Dashboard'))
const Categories = lazy(() => import('./Categories'))

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
      <Route exact path={path} component={Dashboard} layout={AdminLayout}/>
      <Route exact path='/admin/categories' component={Categories} layout={AdminLayout}/>

    </Switch>
  </Suspense>
  )
})

export default Admin

