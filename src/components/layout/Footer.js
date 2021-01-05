import PropTypes from 'prop-types'
import React from 'react'
import { Container, Row } from 'shards-react'

const Footer = ({ contained, menuItems, copyright }) => (
  <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
    <Container fluid={contained}>
      <Row>
        {/* <Nav>
          {menuItems.map((item, idx) => (
            <NavItem key={idx}>
              <NavLink to={item.to}>{item.title}</NavLink>
            </NavItem>
          ))}
        </Nav> */}
        <span className="copyright ml-auto my-auto mr-2">{copyright}</span>
      </Row>
    </Container>
  </footer>
)

Footer.propTypes = {
  /**
   * Whether the content is contained, or not.
   */
  contained: PropTypes.bool,
  /**
   * The menu items array.
   */
  menuItems: PropTypes.array,
  /**
   * The copyright info.
   */
  copyright: PropTypes.string
}

Footer.defaultProps = {
  contained: false,
  copyright: 'Copyright © 2020 WNC-HCMUS',
  menuItems: [
    {
      title: 'Home',
      to: '#'
    },
    {
      title: 'Services',
      to: '#'
    },
    {
      title: 'About',
      to: '#'
    },
    {
      title: 'Products',
      to: '#'
    },
    {
      title: 'Blog',
      to: '#'
    }
  ]
}

export default Footer
