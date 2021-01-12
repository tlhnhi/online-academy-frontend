import React, { useState } from 'react'
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

function CollapsibleSidebar(props) {
  const { category } = props
  const [visible, setVisible] = useState(false)

  return (
    <React.Fragment>
      <NavItem tag={Dropdown} caret toggle={() => setVisible(!visible)}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <span className="d-none d-md-inline-block font-weight-bold">
            {category.name}
          </span>
        </DropdownToggle>

        <Collapse tag={DropdownMenu} right open={visible}>
          {category.childs.map(c => (
            <Link
              key={c._id}
              to={`/categories/${c._id}`}
              style={{ textDecoration: 'none' }}
            >
              <DropdownItem className="border-0">{c.name}</DropdownItem>
            </Link>
          ))}
        </Collapse>
      </NavItem>
    </React.Fragment>
  )
}

export default CollapsibleSidebar
