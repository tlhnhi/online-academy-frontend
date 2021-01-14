import {
  addCourseToFavorite,
  checkIsEnrolledCourse,
  checkIsFavoritedCourse,
  enrollNewCourse,
  removeCourseFromFavorite
} from 'api/course'
import PropTypes from 'prop-types'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Badge, Button, Card, CardBody, Col, Row } from 'shards-react'

const About = memo(({ course, currentUser }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isEnroll, setIsEnroll] = useState(false)

  const handleAddToWatchList = useCallback(async () => {
    const data = isFavorite
      ? await removeCourseFromFavorite(course._id)
      : await addCourseToFavorite(course._id)

    if (data) {
      setIsFavorite(!isFavorite)
      alert(data)
    }
  }, [isFavorite, course])

  const handleEnrollCourse = useCallback(async () => {
    const data = await enrollNewCourse(course._id)

    if (data) {
      setIsEnroll(!isEnroll)
      alert(data)
      window.location.reload()
    }
  }, [isEnroll, course])

  useEffect(() => {
    const getIsFavorite = async () => {
      if (!currentUser?._id) return setIsFavorite(false)

      const data = await checkIsFavoritedCourse(course._id)
      if (data) setIsFavorite(true)
    }

    const getIsEnroll = async () => {
      if (!currentUser?._id) return setIsEnroll(false)

      const data = await checkIsEnrolledCourse(course._id)
      if (data) setIsEnroll(true)
    }

    getIsFavorite()
    getIsEnroll()
  }, [currentUser, course])

  return (
    <Card className="px-5">
      <Row>
        <Col sm="7">
          <CardBody>
            <h3 className="card-title text-fiord-blue">{course.title}</h3>
            <h5 className="card-post d-inline-block mb-3">{course.describe}</h5>
            <span className="card-title d-flex mb-3">
              Created by:&nbsp;
              <Link
                className="text-fiord-blue"
                to={`/profile?id=${course.lecturer._id}`}
              >
                {course.lecturer.name}
              </Link>
            </span>
            <p className="card-title mb-0">
              <span className="card-title d-inline-block text-warning">
                {course.star.toFixed(1)}&nbsp;
                {[
                  ...Array(
                    course.star - Math.floor(course.star) < 0.79
                      ? Math.floor(course.star)
                      : Math.floor(course.star) + 1
                  )
                ].map((_, idx) => (
                  <i className="material-icons" key={idx}>
                    &#xe838;
                  </i>
                ))}
                {[
                  ...Array(
                    ~~(
                      course.star - Math.floor(course.star) < 0.79 &&
                      course.star - Math.floor(course.star) > 0.21
                    )
                  )
                ].map((_, idx) => (
                  <i className="material-icons" key={idx}>
                    &#xe839;
                  </i>
                ))}
                {[
                  ...Array(
                    5 -
                      (course.star - Math.floor(course.star) < 0.79
                        ? Math.floor(course.star)
                        : Math.floor(course.star) + 1) -
                      ~~(
                        course.star - Math.floor(course.star) < 0.79 &&
                        course.star - Math.floor(course.star) > 0.21
                      )
                  )
                ].map((_, idx) => (
                  <i className="material-icons" key={idx}>
                    &#xe83a;
                  </i>
                ))}
                &nbsp;
              </span>
              <span className="card-title d-inline-block">
                ({course.rating.length} ratings)
              </span>
              &nbsp;&nbsp;
              <span className="card-title d-inline-block">
                {course.enrollments} enrolled
              </span>
            </p>
            <p className="card-title mb-3">
              Last updated:{' '}
              {new Date(course.updatedAt).toLocaleDateString('vi-VN')}
            </p>
            <div>
              {currentUser?.isLecturer ? (
                <div></div>
              ) : (
                <Badge
                  className="my-auto"
                  style={{ fontSize: `16px`, cursor: 'pointer' }}
                  outline
                  theme="danger"
                  onClick={handleAddToWatchList}
                >
                  <i className={isFavorite ? 'fas' : 'far'}>&#xf004;&nbsp;</i>
                  Watchlist
                </Badge>
              )}
            </div>
          </CardBody>
        </Col>
        <Col sm="5">
          <img
            className="img-thumbnail mx-auto mt-3 d-block"
            style={{ width: `500px`, height: `260px`, objectFit: `cover` }}
            src={course.avatar}
            alt=""
          ></img>
          <div>
            {isEnroll ? (
              <div></div>
            ) : (
              <Row className="mx-5 justify-content-between">
                <span className="my-auto">
                  <h2 className="card-title d-inline-block my-auto">
                    {course.discount !== 1
                      ? (course.price * (1 - course.discount)).toFixed(2)
                      : course.price}
                    $&nbsp;
                  </h2>
                  <h4
                    className="card-title d-inline-block my-auto text-muted"
                    style={{
                      textDecorationLine: 'line-through',
                      textDecorationStyle: 'solid'
                    }}
                  >
                    {course.discount ? course.price + '$' : ''}
                  </h4>
                </span>
                <Button
                  size="lg"
                  className="d-block my-2"
                  pill
                  onClick={handleEnrollCourse}
                >
                  <i className="fas">&#xf07a;&nbsp;</i>
                  Enroll
                </Button>
              </Row>
            )}
          </div>
        </Col>
      </Row>
    </Card>
  )
})

About.propTypes = {
  course: PropTypes.object
}

export default About
