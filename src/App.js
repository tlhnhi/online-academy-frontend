import Loading from 'components/Loading'
import React, { lazy, memo, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards/styles/shards-dashboards.1.1.0.min.css";

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
