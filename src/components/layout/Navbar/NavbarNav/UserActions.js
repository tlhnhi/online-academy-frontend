import React, { memo, useCallback, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavItem,
  NavLink
} from 'shards-react'
import { removeCurrentUser } from 'store/app/current-user'

const UserActions = memo(() => {
  const dispatch = useDispatch()
  const currentUser = useSelector(x => x.currentUser)
  const [visible, setVisible] = useState(false)

  const handleSignOut = useCallback(() => {
    localStorage.removeItem('token')
    dispatch(removeCurrentUser())
    window.location.reload()
  }, [dispatch])

  const student = useMemo(
    () => (
      <>
        <Link to="/my-courses" style={{ textDecoration: 'none' }}>
          <DropdownItem to="my-course">
            <i className="material-icons">&#xE2C7;</i> My Courses
          </DropdownItem>
        </Link>
        <Link to="/watchlist" style={{ textDecoration: 'none' }}>
          <DropdownItem to="watchlist">
            <i className="material-icons">&#xE896;</i> Watchlist
          </DropdownItem>
        </Link>
      </>
    ),
    []
  )

  const lecturer = useMemo(
    () => (
      <>
        {currentUser?.email === 'quack@domain.com' && (
          <Link to="/admin" style={{ textDecoration: 'none' }}>
            <DropdownItem to="my-courses">
              <i className="material-icons">&#xE2C7;</i> Admin Dashboard
            </DropdownItem>
          </Link>
        )}
        <Link to="/my-courses" style={{ textDecoration: 'none' }}>
          <DropdownItem to="my-courses">
            <i className="material-icons">&#xE2C7;</i> My Course
          </DropdownItem>
        </Link>
        <Link to="/create-course" style={{ textDecoration: 'none' }}>
          <DropdownItem to="create-course">
            <i className="material-icons">&#xe145;</i> Create New Course
          </DropdownItem>
        </Link>
        <Link to="/watchlist" style={{ textDecoration: 'none' }}>
          <DropdownItem to="watchlist">
            <i className="material-icons">&#xE896;</i> Watchlist
          </DropdownItem>
        </Link>
      </>
    ),
    [currentUser]
  )

  return (
    <NavItem tag={Dropdown} caret toggle={() => setVisible(!visible)}>
      <DropdownToggle
        caret
        tag={NavLink}
        className="text-nowrap px-3"
        style={{ minWidth: `200px` }}
      >
        <img
          className="user-avatar rounded-circle mr-2"
          src={currentUser?.avatar}
          alt="User Avatar"
          height="38"
          object-fit="cover"
        />
        <span className="d-none d-md-inline-block">{currentUser?.name}</span>
      </DropdownToggle>

      <Collapse tag={DropdownMenu} right open={visible}>
        <Link to="/me" style={{ textDecoration: 'none' }}>
          <DropdownItem to="user-profile">
            <i className="material-icons">&#xE7FD;</i> Profile
          </DropdownItem>
        </Link>
        <Link to="/change-password" style={{ textDecoration: 'none' }}>
          <DropdownItem to="change-password">
            <i className="material-icons">&#xE8B8;</i> Change Password
          </DropdownItem>
        </Link>
        {currentUser?.isLecturer ? lecturer : student}
        <DropdownItem divider />
        <DropdownItem className="text-danger" onClick={handleSignOut}>
          <i className="material-icons text-danger">&#xE879;</i> Logout
        </DropdownItem>
      </Collapse>
    </NavItem>
  )
})

export default UserActions
