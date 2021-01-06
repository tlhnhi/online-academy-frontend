import React, { memo, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Nav } from 'shards-react'
<<<<<<< HEAD
// import BecomeLecturer from './BecomeLecturer'
// import Notifications from './Notifications'
=======
import BecomeLecturer from './BecomeLecturer'
import GroupButton from './GroupButton'
import Notifications from './Notifications'
>>>>>>> d36c07779e0621de49990eca0ecc28df413e1583
import UserActions from './UserActions'

<<<<<<< HEAD
const NavbarNav = memo(() => (
  <Nav navbar className="border-left flex-row">
    {/* <Notifications /> */}
    {/* <BecomeLecturer /> */}
    <UserActions />
    {/* <GroupButton /> */}

  </Nav>
))
=======
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
>>>>>>> d36c07779e0621de49990eca0ecc28df413e1583

export default NavbarNav
