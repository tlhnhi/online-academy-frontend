import React, { memo, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Nav } from 'shards-react'
import BecomeLecturer from './BecomeLecturer'
import GroupButton from './GroupButton'
import Notifications from './Notifications'
import UserActions from './UserActions'

const NavbarNav = memo(() => {
  const authToken = useSelector(state => state.auth)

  const anonymous = useMemo(
    () => (
      <>
        <BecomeLecturer />
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
      {!!authToken ? loggedIn : anonymous}
    </Nav>
  )
})

export default NavbarNav
