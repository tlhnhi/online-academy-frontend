import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { Nav } from 'shards-react'
import CollapsibleSidebar from './CollapsibleSidebar'

const SidebarNavItems = memo(() => {
  const categories = useSelector(x => x.category)

  return (
    <div className="nav-wrapper">
      <h6 className="m-2 mb-0 font-weight-bold">Categories</h6>
      <Nav className="nav--no-borders flex-column">
        {categories.map((item, idx) => (
          <CollapsibleSidebar key={idx} category={item} />
        ))}
      </Nav>
    </div>
  )
})

SidebarNavItems.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object
}

export default SidebarNavItems
