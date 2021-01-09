import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { Nav } from 'shards-react'
import CollapsibleSidebar from './CollapsibleSidebar'

const SidebarNavItems = memo(() => {
  const categories = useSelector(x => x.category)
  const displayCats = []

  for (const cat of categories) {
    const { _id, name, parent } = cat
    if (!parent) displayCats.push({ _id, name, child: [] })
  }

  for (const cat of categories) {
    const { _id, name, parent } = cat
    if (!parent) continue

    const parentIndex = displayCats.findIndex(x => x._id === parent)
    displayCats[parentIndex].child.push({ _id, name })
  }

  return (
    <div className="nav-wrapper">
      <h6 className="m-2 mb-0 font-weight-bold">Categories</h6>
      <Nav className="nav--no-borders flex-column">
        {displayCats.map((item, idx) => (
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
