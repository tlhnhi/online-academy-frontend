import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { Nav, NavItem, NavLink } from 'shards-react'

const AdminSidebarItem = memo(() => {
  const itemList = [
    { name: 'Dashboard', to: '/admin' },
    { name: 'Categories', to: '/admin/categories' },
    { name: 'Courses', to: '/admin/courses' },
    { name: 'Students', to: '/admin/students' },
    { name: 'Lecturers', to: '/admin/lecturers' }
  ]
  const [items] = useState(itemList)

  return (
    <div className="nav-wrapper">
      <Nav className="nav--no-borders flex-column">
        {items.map((item, idx) => (
          <NavItem key={idx}>
              <NavLink href={item.to}>{item.name}</NavLink>
          </NavItem>
        ))}
      </Nav>
    </div>
  )
})

AdminSidebarItem.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.array
}

export default AdminSidebarItem
