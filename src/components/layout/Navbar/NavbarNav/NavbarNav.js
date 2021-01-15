import React, { memo, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Nav } from 'shards-react'
import BecomeLecturer from './BecomeLecturer'
import GroupButton from './GroupButton'
import Notifications from './Notifications'
import UserActions from './UserActions'

const NavbarNav = memo(() => {
  const currentUser = useSelector(x => x.currentUser)
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
        {currentUser?.email === 'quack@domain.com' ? (
          <BecomeLecturer />
        ) : (
          <Notifications />
        )}
        <UserActions />
      </>
    ),
    [currentUser]
  )

  return (
    <Nav navbar className="border-left flex-row" style={{ cursor: 'pointer' }}>
      {!!token ? loggedIn : anonymous}
    </Nav>
  )
})

export default NavbarNav
