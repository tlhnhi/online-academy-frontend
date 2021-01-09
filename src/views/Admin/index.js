import React, { memo } from 'react'
import { Route as DefaultRoute, Switch, useRouteMatch } from 'react-router-dom'
import { AdminLayout } from '../../layouts/Admin'
import Categories from './Category'
import Courses from './Course'
import Dashboard from './Dashboard'
import Lecturers from './Lecturer'
import Students from './Student'

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
    <Switch>
      <Route exact path={path} component={Dashboard} layout={AdminLayout} />
      <Route
        exact
        path="/admin/categories"
        component={Categories}
        layout={AdminLayout}
      />
      <Route
        exact
        path="/admin/courses"
        component={Courses}
        layout={AdminLayout}
      />
      <Route
        exact
        path="/admin/students"
        component={Students}
        layout={AdminLayout}
      />
      <Route
        exact
        path="/admin/lecturers"
        component={Lecturers}
        layout={AdminLayout}
      />
    </Switch>
  )
})

export default Admin
