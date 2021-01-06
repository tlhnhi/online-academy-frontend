import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { Nav } from 'shards-react'

import CollapsibleSidebar from './CollapsibleSidebar'

const SidebarNavItems = memo(() => {
  const categories = [
    {
      name: 'IT',
      child: [
        'Web Development',
        'Mobile App Development',
        'Software Engineering',
        'Data Science',
        'Machine Learning'
      ]
    },
    {
      name: 'Business',
      child: [
        'Communications',
        'Management',
        'Sales',
        'E-Commerce',
        'Human Resources'
      ]
    },
    {
      name: 'Design',
      child: [
        'Graphic Design',
        'Design Tools',
        'Design Thinking',
        '3D & Animation',
        'Web Design'
      ]
    }
  ]
  const [items] = useState(categories)

  return (
    <div className="nav-wrapper">
      <h6 className="m-2 mb-0 font-weight-bold">Categories</h6>
      <Nav className="nav--no-borders flex-column">
        {items.map((item,idx)=>(
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
