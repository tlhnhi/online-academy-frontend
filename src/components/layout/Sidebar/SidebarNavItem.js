import PropTypes from 'prop-types'
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

const SidebarNavItem = ({ item }) => (
  <NavItem tag={Dropdown} caret>
    <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
      {item.htmlBefore && (
        <div
          className="d-inline-block item-icon-wrapper"
          dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
        />
      )}
      {item.title && <span>{item.title}</span>}
      {item.htmlAfter && (
        <div
          className="d-inline-block item-icon-wrapper"
          dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
        />
      )}
    </DropdownToggle>
    <Collapse tag={DropdownMenu} right open>
      <DropdownItem to={item.to1}>
        <i className="material-icons">&#xe051;</i> {item.subtitle1}
      </DropdownItem>
      <DropdownItem to={item.to2}>
        <i className="material-icons">&#xe325;</i> {item.subtitle2}
      </DropdownItem>
    </Collapse>
  </NavItem>
)

SidebarNavItem.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object
}

export default SidebarNavItem
