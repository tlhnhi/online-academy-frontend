import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Col, Container, Row } from 'shards-react'
import PageTitle from '../../../components/PageTitle'
import UserDetails from './components/UserDetail'
import queryString from 'query-string'
import { fetchUser } from 'api/user'

const Profile = () => {
  const { id } = queryString.parse(window.location.search)

  const currentUser = useSelector(state => state.currentUser)
  const [otherProfile, setOtherProfile] = useState(null)

  useEffect(() => {
    if (!id) return

    const getOtherProfile = async () => {
      const profile = await fetchUser(id)
      if (profile && profile._id !== currentUser?._id) setOtherProfile(profile)
    }

    getOtherProfile()
  }, [id, currentUser])

  if (!localStorage.getItem('token') && !id) {
    return <Redirect to="/error" />
  }

  console.log('Profile', { currentUser })

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
          {(currentUser?._id || otherProfile?._id) && (
            <UserDetails user={currentUser} other={otherProfile} />
          )}
        </Col>
      </Row>
      <Row></Row>
    </Container>
  )
}
export default Profile
