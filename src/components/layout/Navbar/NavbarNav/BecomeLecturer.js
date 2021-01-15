import React, { memo } from 'react'
import { NavItem, NavLink } from 'shards-react'

const BecomeLecturer = memo(() => {
  return (
    <NavItem className="border-right" style={{ width: `120px` }}>
      <NavLink
        className="nav-link-icon text-center"
        href="/admin/create-lecturer"
      >
        <div className="nav-link-icon__wrapper">
          <span className="d-none d-md-inline-block mt-2">
            Create New Lecturer
          </span>
        </div>
      </NavLink>
    </NavItem>
  )
})

export default BecomeLecturer
