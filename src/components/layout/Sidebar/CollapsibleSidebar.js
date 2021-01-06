import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import {
  Collapse,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavItem,
  NavLink
} from 'shards-react'

function CollapsibleSidebar(props) {
  const { category } = props
  const [visible, setVisible] = useState(false)

  return (
    <React.Fragment>
      <NavItem tag={Dropdown} caret toggle={() => setVisible(!visible)}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <span className="d-none d-md-inline-block font-weight-bold">{category.name}</span>
        </DropdownToggle>

        <Collapse tag={DropdownMenu} right open={visible}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <DropdownItem className="border-0">
              {category.child[0]}
            </DropdownItem>
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <DropdownItem className="border-0">
              {category.child[1]}
            </DropdownItem>
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <DropdownItem className="border-0">
              {category.child[2]}
            </DropdownItem>
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <DropdownItem className="border-0">
              {category.child[3]}
            </DropdownItem>
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <DropdownItem className="border-0">
             {category.child[4]}
            </DropdownItem>
          </Link>
        </Collapse>
      </NavItem>
    </React.Fragment>
  )
}

export default CollapsibleSidebar
