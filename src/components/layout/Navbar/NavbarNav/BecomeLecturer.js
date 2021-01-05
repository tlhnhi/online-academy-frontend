import React, { memo } from 'react'
import { NavItem, NavLink } from 'shards-react'

const BecomeLecturer = memo(() => {
  return (
    <NavItem className="border-right" style={{ width: `120px` }}>
      <NavLink className="nav-link-icon text-center">
        <div className="nav-link-icon__wrapper">
          <span
            className="d-none d-md-inline-block mt-2"
            style={{ cursor: 'pointer' }}
          >
            Become A Lecturer
          </span>
        </div>
      </NavLink>
    </NavItem>
  )
})

export default BecomeLecturer
