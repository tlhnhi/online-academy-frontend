import Loading from 'components/Loading'
import React, { lazy, memo, Suspense } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

const Home = lazy(() => import('./Home'))

const User = memo(() => {
  const { path } = useRouteMatch()

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path={path} component={Home} />
      </Switch>
    </Suspense>
  )
})

export default User
