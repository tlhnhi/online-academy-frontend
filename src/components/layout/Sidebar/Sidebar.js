import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'shards-react'

import SidebarNavbar from './SidebarNavbar'
import SidebarNavItems from "./SidebarNavItems";


const Sidebar = () => (
  <Col
    tag="aside"
    className="main-sidebar p-0 col-12"
    lg={{ size: 2 }}
    md={{ size: 5 }}
  >
    <SidebarNavbar />
    <SidebarNavItems />
  </Col>
)

Sidebar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool
}

Sidebar.defaultProps = {
  hideLogoText: false
}

export default Sidebar
