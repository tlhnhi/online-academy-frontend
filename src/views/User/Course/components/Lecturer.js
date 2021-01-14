import { fetchUser } from 'api/user'
import React, { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'shards-react'

const Lecturer = memo(({ lecturerId }) => {
  const [lecturer, setLecturer] = useState(null)

  useEffect(() => {
    if (lecturer) return

    const getLecturerInfo = async () => {
      const me = await fetchUser(lecturerId)
      if (me) setLecturer(me)
    }

    getLecturerInfo()
  }, [lecturer, lecturerId])

  return (
    <div className="mt-3 mx-auto" style={{ width: `800px` }}>
      <h4 className="card-title text-fiord-blue">Lecturer</h4>
      <h5>
        <Link
          className="text-fiord-blue font-weight-bold"
          to={`/profile?id=${lecturer?._id}`}
        >
          {lecturer?.name}
        </Link>
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
            {lecturer?.star.toFixed(1)} Rating
          </p>
          <p className="my-1">
            <i className="fas">&#xf144;&nbsp;</i>
            {lecturer?.courses.length} Courses
          </p>
          <p className="my-1">
            <i className="material-icons">&#xe7fb;&nbsp;</i>
            {lecturer?.enrollments} enrolled
          </p>
        </Col>
      </Row>
      <p>{lecturer?.description}</p>
    </div>
  )
})

export default Lecturer
