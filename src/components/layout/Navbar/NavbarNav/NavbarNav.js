import React, { memo } from 'react'
import { Nav } from 'shards-react'
import BecomeLecturer from './BecomeLecturer'
// import Notifications from './Notifications'
import UserActions from './UserActions'
// import GroupButton from './GroupButton'

const NavbarNav = memo(() => (
  <Nav navbar className="border-left flex-row">
    {/* <GroupButton /> */}
    {/* <Notifications /> */}
    <BecomeLecturer />
    <UserActions />
  </Nav>
))

export default NavbarNav
