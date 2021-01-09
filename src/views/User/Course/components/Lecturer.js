import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Col, Row } from 'shards-react'

const Lecturer = memo(props => {
  const { lecturer } = props
  const { id } = useParams()

  const courses = useSelector(state => state.course)
  const users = useSelector(state => state.user)

  return (
    <div>
      <div className="mt-3 mx-auto" style={{ width: `800px` }}>
        <h4 className="card-title text-fiord-blue">Lecturer</h4>
        <h5>
          <a
            className="text-fiord-blue font-weight-bold"
            href={`/profile?id=${lecturer?._id}`}
          >
            {lecturer?.name}
          </a>
        </h5>
        <Row className="mb-3 mx-auto">
          <img
            className="rounded-circle"
            src={lecturer?.avatar}
            alt=""
            width="100"
            height="100"
            object-fit="cover"
          />
          <Col className="m-auto">
            <p className="text-warning my-1">
              <i className="material-icons">&#xe838;&nbsp;</i>
              {lecturer?.rating} Rating
            </p>
            <p className="my-1">
              <i className="fas">&#xf144;&nbsp;</i>
              {courses?.filter(x => x.lecturer_id === lecturer._id).length}{' '}
              Courses
            </p>
            <p className="my-1">
              <i className="material-icons">&#xe7fb;&nbsp;</i>
              {users.filter(x => x.enrolled.includes(id)).length} Students
            </p>
          </Col>
        </Row>
        <p>{lecturer?.description}</p>
      </div>
    </div>
  )
})

Lecturer.propTypes = {
  lecturersInfo: PropTypes.array
}

export default Lecturer
