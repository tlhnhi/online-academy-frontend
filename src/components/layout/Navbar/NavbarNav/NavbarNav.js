import React, { memo, useMemo } from 'react'
import { Nav } from 'shards-react'
import GroupButton from './GroupButton'
import Notifications from './Notifications'
import UserActions from './UserActions'

const NavbarNav = memo(() => {
  const token = localStorage.getItem('token')

  const anonymous = useMemo(
    () => (
      <>
        <GroupButton />
      </>
    ),
    []
  )

  const loggedIn = useMemo(
    () => (
      <>
        <Notifications />
        <UserActions />
      </>
    ),
    []
  )

  return (
    <Nav navbar className="border-left flex-row">
      {!!token ? loggedIn : anonymous}
    </Nav>
  )
})

export default NavbarNav
