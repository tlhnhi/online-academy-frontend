import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { Nav } from 'shards-react'

import SidebarNavItem from './SidebarNavItem'

const SidebarNavItems = memo(() => {
  const listItems = [
    {
      title: 'IT',
      to: '/blog-overview',
      htmlBefore: '<i class="material-icons">&#xe30a</i>',
      subtitle1: 'Web Development',
      to1: 'web-development',
      subtitle2: 'Mobile App Development',
      to2: 'mobile-app-development'
    },
    {
      title: 'Business',
      htmlBefore: '<i class="material-icons">&#xeb3f</i>',
      to: '/blog-posts',
      subtitle1: 'Sales',
      to1: 'sales',
      subtitle2: 'Management',
      to2: 'management'
    }
  ]
  const [items, setItems] = useState(listItems)

  return (
    <div className="nav-wrapper">
      <h6 className="ml-2 mb-0">Categories</h6>
      <Nav className="nav--no-borders flex-column">
        {items.map((item, idx) => (
          <SidebarNavItem key={idx} item={item} />
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
