import PropTypes from 'prop-types'
import React from 'react'
import { Card, CardBody, CardHeader } from 'shards-react'
import UserAccountDetails from './UserAccountDetail'

const UserDetails = ({ other }) => {
  return (
    <Card small className="mb-4 pt-3">
      <CardHeader className="border-bottom text-center">
        <div className="mb-1 mx-auto">
          <img
            className="rounded-circle"
            src={other.avatar}
            alt={other.name}
            width="110"
            height="110"
            object-fit="cover"
          />
        </div>

        <h4 className="mb-0">{other.name}</h4>
        <span className="text-muted d-block mb-2">
          {other.email === 'quack@domain.com'
            ? 'Admin'
            : other.isLecturer
            ? 'Lecturer'
            : 'Student'}
        </span>
      </CardHeader>
      <CardBody>
        <UserAccountDetails other={other} />
      </CardBody>
    </Card>
  )
}

UserDetails.propTypes = {
  /**
   * The user details object.
   */

  other: PropTypes.object
}

export default UserDetails
