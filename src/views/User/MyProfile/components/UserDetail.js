import PropTypes from 'prop-types'
import React from 'react'
import { Card, CardBody, CardHeader } from 'shards-react'
import UserAccountDetails from './UserAccountDetail'

const UserDetails = ({ user }) => {
  return (
    <Card small className="mb-4 pt-3">
      <CardHeader className="border-bottom text-center">
        <div className="mb-1 mx-auto">
          <img
            className="rounded-circle"
            src={user.avatar}
            alt={user.name}
            width="110"
            height="110"
            object-fit="cover"
          />
        </div>

        <h4 className="mb-0">{user.name}</h4>
        <span className="text-muted d-block mb-2">
          {user.email === 'quack@domain.com'
            ? 'Admin'
            : user.isLecturer
            ? 'Lecturer'
            : 'Student'}
        </span>
      </CardHeader>
      <CardBody>
        <UserAccountDetails user={user} />
      </CardBody>
    </Card>
  )
}

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  user: PropTypes.object
}

export default UserDetails
