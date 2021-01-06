import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'shards-react'

import MainNavbar from '../components/layout/Navbar/MainNavbar'
import Sidebar from '../components/layout/Sidebar/Sidebar'
import AdminSidebar from '../components/layout/Sidebar/AdminSidebar'
import Footer from '../components/layout/Footer'

const DefaultLayout = ({ children, noSidebar, noFooter }) => (
  <Container fluid>
    <Row>
      <Sidebar />
      <Col
        className="main-content p-0"
        lg={{ size: 10, offset: 2 }}
        md={{ size: 9, offset: 3 }}
        sm="12"
        tag="main"
      >
        {!noSidebar && <MainNavbar />}
        {noSidebar && <AdminSidebar />}
        {children}
        {!noFooter && <Footer />}
      </Col>
    </Row>
  </Container>
)

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
}

DefaultLayout.defaultProps = {
  noSidebar: false,
  noFooter: false
}

export default DefaultLayout
