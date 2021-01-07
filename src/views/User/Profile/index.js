import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Col, Container, Row } from 'shards-react'
import PageTitle from '../../../components/PageTitle'
import UserDetails from './components/UserDetail'

const Profile = () => {
  const currentUser = useSelector(state => state.currentUser)

  if (!currentUser?._id) {
    return <Redirect to="/error" />
  }

  return (
    <Container
      fluid
      className="main-content-container px-4 d-flex flex-column justify-content-between"
    >
      <Row noGutters className="page-header pt-4">
        <PageTitle
          title="User Profile"
          subtitle=""
          md="12"
          className="ml-sm-auto mr-sm-auto"
        />
      </Row>
      <Row>
        <Col className="mx-auto" lg="4">
          <UserDetails />
        </Col>
      </Row>
      <Row></Row>
    </Container>
  )
}
export default Profile
