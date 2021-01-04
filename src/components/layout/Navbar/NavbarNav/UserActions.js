import React from 'react'
import {
  Collapse,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavItem,
  NavLink
} from 'shards-react'

export default class UserActions extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }

    this.toggleUserActions = this.toggleUserActions.bind(this)
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={require('../../../../images/avatars/n.png').default}
            alt="User Avatar"
            height="38"
            object-fit="cover"
          />
          <span className="d-none d-md-inline-block">Nhi Tran Le Hong</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right open={this.state.visible}>
          <DropdownItem to="profile">
            <i className="material-icons">&#xE7FD;</i> Profile
          </DropdownItem>
          <DropdownItem to="edit-user-profile">
            <i className="material-icons">&#xE8B8;</i> Change Password
          </DropdownItem>
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
  }
}
