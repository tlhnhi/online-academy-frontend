import axiosClient from 'api/axiosClient'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { Card, CardBody, CardHeader } from 'shards-react'
import UserAccountDetails from './UserAccountDetail'

const UserDetails = ({ userDetails }) => {
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { success, message, data } = await axiosClient({
          url: '/user/profile'
        })

        if (!success) return alert(message)

        console.log(data)
      } catch (error) {
        alert('Cannot fetch profile')
        console.log(error.message)
      }
    }

    fetchProfile()
  }, [])

  return (
    <Card small className="mb-4 pt-3">
      <CardHeader className="border-bottom text-center">
        <div className="mb-1 mx-auto">
          <img
            className="rounded-circle"
            src={userDetails.avatar}
            alt={userDetails.name}
            width="110"
            height="110"
            object-fit="cover"
          />
        </div>

        <h4 className="mb-0">{userDetails.name}</h4>
        {userDetails.isLecturer ? (
          <span className="text-muted d-block mb-2">Lecturer</span>
        ) : (
          <span className="text-muted d-block mb-2">Student</span>
        )}
      </CardHeader>
      <CardBody>
        <UserAccountDetails />
      </CardBody>
    </Card>
  )
}

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
}

UserDetails.defaultProps = {
  userDetails: {
    name: 'Nhi Tran Le Hong',
    avatar: require('../../../../images/avatars/n.png').default,
    isLecturer: true
  }
}

export default UserDetails
