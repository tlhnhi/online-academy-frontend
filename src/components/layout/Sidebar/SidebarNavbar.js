import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Navbar, NavbarBrand } from 'shards-react'

const SidebarNavbar = () => {
  const { push } = useHistory()

  return (
    <div className="main-navbar">
      <Navbar
        className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0"
        type="light"
      >
        <NavbarBrand
          className="w-100 mr-0"
          style={{ lineHeight: '25px', cursor: 'pointer' }}
          onClick={() => push('/')}
        >
          <div className="d-table m-auto">
            <img
              id="main-logo"
              className="d-inline-block align-top mr-1"
              style={{ maxWidth: '25px' }}
              src={
                require('../../../images/shards-dashboards-logo.png').default
              }
              alt="Online Academi"
            />
            <span className="d-none d-md-inline ml-1">Online Academi</span>
          </div>
        </NavbarBrand>
        {/* eslint-disable-next-line */}

        <a className="toggle-sidebar d-sm-inline d-md-none d-lg-none" href="#!">
          <i className="material-icons">&#xE5C4;</i>
        </a>
      </Navbar>
    </div>
  )
}

SidebarNavbar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool
}

SidebarNavbar.defaultProps = {
  hideLogoText: false
}

export default SidebarNavbar
