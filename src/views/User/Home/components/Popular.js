import catTheme from 'constants/category-theme'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Badge, Card, CardBody, Col, Row } from 'shards-react'

const Popular = memo(({ courses }) => {
  return (
    <Carousel indicators={false} interval={2000}>
      {courses.map((course, idx) => (
        <Carousel.Item key={idx}>
          <Card small className="card-post card-post--1">
            <div
              className="card-post__image "
              style={{
                backgroundImage: `url(${course.avatar})`,
                height: `218px`
              }}
            >
              <Badge
                pill
                className={`card-post__category bg-${
                  catTheme[course.category.name]
                }`}
              >
                {course.category.name}
              </Badge>
              <div className="card-post__author d-flex">
                <span
                  className="card-post__author-avatar card-post__author-avatar--small"
                  style={{
                    backgroundImage: `url('${course.lecturer.avatar}')`
                  }}
                ></span>
              </div>
            </div>
            <CardBody>
              <h4 className="card-title mb-0">
                <Link to={`/courses/${course._id}`} className="text-fiord-blue">
                  {course.title}
                </Link>
              </h4>
              <p className="text-muted d-block mb-3">
                <Link
                  className="text-fiord-blue"
                  to={`/profile?id=${course.lecturer._id}`}
                >
                  {course.lecturer.name}
                </Link>
              </p>
              <p className="card-text d-inline-block mb-3">{course.describe}</p>
              <br />
              <Row>
                <Col>
                  <span className="card-title d-inline-block text-warning">
                    {course.star.toFixed(1)}&nbsp;
                    {[
                      ...Array(
                        course.star - Math.floor(course.star) < 0.79
                          ? Math.floor(course.star)
                          : Math.floor(course.star) + 1
                      )
                    ].map((_, i) => (
                      <i className="material-icons" key={i}>
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
                    ].map((_, i) => (
                      <i className="material-icons" key={i}>
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
                    ].map((_, i) => (
                      <i className="material-icons" key={i}>
                        &#xe83a;
                      </i>
                    ))}
                    &nbsp;
                  </span>
                  <span className="text-muted">
                    ({course.rating.length} ratings)
                  </span>
                  <br />
                  <span className="my-auto">
                    <h3 className="card-title d-inline-block my-auto">
                      {course.discount !== 1
                        ? (course.price * (1 - course.discount)).toFixed(2)
                        : course.price}
                      $&nbsp;
                    </h3>
                    <h5
                      className="card-title d-inline-block my-auto text-muted"
                      style={{
                        textDecorationLine: 'line-through',
                        textDecorationStyle: 'solid'
                      }}
                    >
                      {course.discount ? course.price + '$' : ''}
                    </h5>
                  </span>
                </Col>
                <Col className="text-right">
                  {course.enrollments > 5 ? (
                    <img
                      src={require('../../../../images/avatars/bs.png').default}
                      alt=""
                      width="80"
                      height="80"
                      object-fit="cover"
                    />
                  ) : (
                    ''
                  )}
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  )
})

Popular.propTypes = {
  courses: PropTypes.array
}

export default Popular
