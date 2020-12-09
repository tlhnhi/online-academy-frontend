import Loading from 'components/Loading'
import React, { lazy, memo, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

const Admin = lazy(() => import('./views/Admin'))
const User = lazy(() => import('./views/User'))

const App = memo(() => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={User} />
      </Switch>
    </Suspense>
  )
})

export default App
