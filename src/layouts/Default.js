import React from 'react'
import { Container, Row, Col } from 'shards-react'

import MainNavbar from '../components/layout/Navbar/MainNavbar'
import Sidebar from '../components/layout/Sidebar/Sidebar'
import Footer from '../components/layout/Footer'

const DefaultLayout = ({ children }) => (
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
        <MainNavbar />
        {children}
        {<Footer />}
      </Col>
    </Row>
  </Container>
)

export default DefaultLayout
