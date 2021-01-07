import React from 'react'
import { Container, Row, Col } from 'shards-react'

import MainNavbar from '../components/layout/Navbar/MainNavbar'
import AdminSidebar from '../components/layout/Sidebar/AdminSidebar'
import Footer from '../components/layout/Footer'

const AdminLayout = ({ children }) => (
  <Container fluid>
    <Row>
      <AdminSidebar />
      <Col
        className="main-content p-0"
        lg={{ size: 10, offset: 2 }}
        md={{ size: 9, offset: 3 }}
        sm="12"
        tag="main"
      >
        <MainNavbar />
        {children}
        {<Footer />}
      </Col>
    </Row>
  </Container>
)

export { AdminLayout }
