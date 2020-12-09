import Loading from 'components/Loading'
import React, { lazy, memo, Suspense } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

const Dashboard = lazy(() => import('./Dashboard'))

const Admin = memo(() => {
  const { path } = useRouteMatch()

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path={path} component={Dashboard} />
      </Switch>
    </Suspense>
  )
})

export default Admin
