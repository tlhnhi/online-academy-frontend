import catTheme from 'constants/category-theme'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Badge, Card, CardBody, Col, Row } from 'shards-react'

const TopViewed = memo(({ courses }) => {
  return (
    <Carousel indicators={false} interval={2000}>
      {[...Array(2)].map((_, index) => (
        <Carousel.Item key={index}>
          <Row>
            {courses
              .slice(index * 4, index * 4 + 4)
              .sort((a, b) => b.view - a.view)
              .map((course, idx) => (
                <Col lg="3" md="6" sm="12" key={idx}>
                  <Card small className="card-post card-post--1">
                    <div
                      className="card-post__image"
                      style={{
                        backgroundImage: `url(${course.avatar})`
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
                      <h5 className="card-title mb-0">
                        <Link
                          to={`/courses/${course._id}`}
                          className="text-fiord-blue"
                        >
                          {course.title}
                        </Link>
                      </h5>
                      <span className="card-title d-inline-block">
                        <Link
                          className="text-muted"
                          to={`/profile?id=${course.lecturer._id}`}
                        >
                          {course.lecturer.name}
                        </Link>
                      </span>
                      <br />
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
                        <h5 className="card-title d-inline-block my-auto">
                          {course.discount !== 1
                            ? (course.price * (1 - course.discount)).toFixed(2)
                            : course.price}
                          $&nbsp;
                        </h5>
                        <span
                          className="card-title d-inline-block my-auto text-muted"
                          style={{
                            textDecorationLine: 'line-through',
                            textDecorationStyle: 'solid'
                          }}
                        >
                          {course.discount ? course.price + '$' : ''}
                        </span>
                      </span>
                    </CardBody>
                  </Card>
                </Col>
              ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  )
})

TopViewed.propTypes = {
  courses: PropTypes.array
}

export default TopViewed
