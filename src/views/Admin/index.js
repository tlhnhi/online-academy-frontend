import Loading from 'components/Loading'
import { AdminLayout } from '../../layouts/Admin'
import React, { lazy, memo, Suspense } from 'react'
import { Route as DefaultRoute, Switch, useRouteMatch } from 'react-router-dom'

const Dashboard = lazy(() => import('./Dashboard'))
const Categories = lazy(() => import('./Category'))
const Courses = lazy(() => import('./Course'))
const Students = lazy(() => import('./Student'))
const Lecturers = lazy(() => import('./Lecturer'))

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
      <Route exact path='/admin/courses' component={Courses} layout={AdminLayout}/>
      <Route exact path='/admin/students' component={Students} layout={AdminLayout}/>
      <Route exact path='/admin/lecturers' component={Lecturers} layout={AdminLayout}/>
    </Switch>
  </Suspense>
  )
})

export default Admin

