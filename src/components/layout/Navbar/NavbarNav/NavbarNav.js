import React, { memo } from 'react'
import { Nav } from 'shards-react'
import Notifications from './Notifications'
import UserActions from './UserActions'

const NavbarNav = memo(() => (
  <Nav navbar className="border-left flex-row">
    <Notifications />
    <UserActions />
  </Nav>
))

export default NavbarNav
