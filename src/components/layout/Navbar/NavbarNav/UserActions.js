import React, { memo, useState } from 'react'
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

const UserActions = memo(() => {
  const [visible, setVisible] = useState(false)

  return (
    <NavItem tag={Dropdown} caret toggle={() => setVisible(!visible)}>
      <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
        <img
          className="user-avatar rounded-circle mr-2"
          src={require('../../../../images/avatars/n.png').default}
          alt="User Avatar"
          height="38"
          object-fit="cover"
        />
        <span className="d-none d-md-inline-block">Nhi Tran</span>
      </DropdownToggle>
      <Collapse tag={DropdownMenu} right open={visible}>
        <Link to="/profile" style={{ textDecoration: 'none' }}>
          <DropdownItem to="user-profile">
            <i className="material-icons">&#xE7FD;</i> Profile
          </DropdownItem>
        </Link>
        <DropdownItem to="my-course">
          <i className="material-icons">&#xE2C7;</i> My Courses
        </DropdownItem>
        <DropdownItem to="watchlist">
          <i className="material-icons">&#xE896;</i> Watchlist
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem to="/" className="text-danger">
          <i className="material-icons text-danger">&#xE879;</i> Logout
        </DropdownItem>
      </Collapse>
    </NavItem>
  )
})

export default UserActions
