import { updateCourse } from 'api/course'
import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { Badge, Button, Card, CardBody, Col, Row } from 'shards-react'

const About = memo(({ course }) => {
  const [isDone, setIsDone] = useState(course.done)

  const handleSetCourseDone = useCallback(async () => {
    const now = !course.done
    await updateCourse({ ...course, done: now })
    setIsDone(now)
  }, [course])

  return (
    <Card className="px-5">
      <Row>
        <Col sm="7">
          <CardBody>
            <h3 className="card-title text-fiord-blue">{course.title}</h3>
            <h5 className="card-post d-inline-block mb-3">{course.describe}</h5>

            <p className="card-title mb-0">
              <span className="card-title d-inline-block text-warning">
                {course.star}&nbsp;
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
            </p>
            <span className="card-title d-flex mb-3">
              You have {course.enrolled} enrolled students
            </span>
            <p className="card-title mb-3">
              Your last updated:
              {new Date(course?.updatedAt).toLocaleDateString('vi-VN')}
            </p>
            <Badge
              className="my-auto"
              style={{ fontSize: `16px`, cursor: 'pointer' }}
              outline
              theme={isDone ? 'success' : 'secondary'}
              onClick={handleSetCourseDone}
            >
              <i className={isDone ? 'fas' : 'far'}>&#xf058;&nbsp;</i>
              {isDone ? 'Completed' : 'In progress'}
            </Badge>
          </CardBody>
        </Col>
        <Col sm="5">
          <img
            className="img-thumbnail mx-auto mt-3 d-block"
            style={{ width: `500px`, height: `260px`, objectFit: `cover` }}
            src={`${course.avatar}`}
            alt=""
          ></img>
          <Row className="mx-5 justify-content-between">
            <span className="my-3">
              <h2 className="card-title d-inline-block my-auto">
                {course.discount !== 0
                  ? (course.price * course.discount).toFixed(2)
                  : course.price}
                $&nbsp;
              </h2>
              {course.discount ? <h4
                className="card-title d-inline-block my-auto text-muted"
                style={{
                  textDecorationLine: 'line-through',
                  textDecorationStyle: 'solid'
                }}
              >
                {course.price + '$'}
              </h4> : <Button size="sm" theme="secondary" className="mb-3">Discount</Button>}
            </span>
            <Link to={`/create-course?id=${course._id}`}>
              <Button size="lg" className="d-block my-2" pill>
                <i className="far">&#xf044;&nbsp;</i>
                Edit Course
              </Button>
            </Link>
          </Row>
        </Col>
      </Row>
    </Card>
  )
})

About.propTypes = {
  course: PropTypes.object
}

export default About
