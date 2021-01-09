import catTheme from 'constants/category-theme'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Carousel } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Badge, Card, CardBody, Col, Row } from 'shards-react'
import arrToObj from 'utils/arr-to-obj'

const Newest = memo(() => {
  const courses = useSelector(state => state.course)
  const categories = useSelector(state => state.category)
  const newCourses = courses

  const catDict = {}

  if (categories.length > 0) {
    for (const cat of categories) {
      if (!cat.parent) continue
      catDict[cat._id] = cat.name
    }
  }

  const users = useSelector(x => x.user)
  const lecturers = users.filter(x => x.isLecturer)
  const lecsObj = arrToObj(lecturers)

  return (
    <Carousel indicators={false} interval={2000}>
      {[...Array(2)].map((_, index) => (
        <Carousel.Item key={index}>
          <Row>
            {newCourses.slice(index * 2, index * 2 + 2).map((course, idx) => (
              <Col lg="6" sm="12" key={idx}>
                <Card
                  small
                  className="card-post card-post--aside card-post--1 h-100"
                >
                  <div
                    className="card-post__image"
                    style={{
                      backgroundImage: `url('${course.avatar}')`
                    }}
                  >
                    <Badge
                      pill
                      className={`card-post__category bg-${
                        catTheme[catDict[course.category_id]]
                      }`}
                    >
                      {catDict[course.category_id]}
                    </Badge>
                    <div className="card-post__author d-flex">
                      <span
                        className="card-post__author-avatar card-post__author-avatar--small"
                        style={{
                          backgroundImage: `url('${
                            lecsObj[course.lecturer_id]?.avatar
                          }')`
                        }}
                      ></span>
                    </div>
                  </div>
                  <CardBody>
                    <h5 className="card-title mb-0">
                      <a
                        className="text-fiord-blue"
                        href={`/courses/${course._id}`}
                      >
                        {course.title}
                      </a>
                    </h5>
                    <span className="card-title d-inline-block">
                      <a
                        className="text-muted"
                        href={`/profile?id=${lecsObj[course.lecturer_id]?._id}`}
                      >
                        {lecsObj[course.lecturer_id]?.name}
                      </a>
                    </span>
                    <p className="card-text d-inline-block mb-2">
                      {course.describe}
                    </p>
                    <br />
                    <span className="card-title d-inline-block text-warning">
                      {course.rating}&nbsp;
                      {[
                        ...Array(
                          course.rating - Math.floor(course.rating) < 0.79
                            ? Math.floor(course.rating)
                            : Math.floor(course.rating) + 1
                        )
                      ].map((_, i) => (
                        <i className="material-icons" key={i}>
                          &#xe838;
                        </i>
                      ))}
                      {[
                        ...Array(
                          ~~(
                            course.rating - Math.floor(course.rating) < 0.79 &&
                            course.rating - Math.floor(course.rating) > 0.21
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
                            (course.rating - Math.floor(course.rating) < 0.79
                              ? Math.floor(course.rating)
                              : Math.floor(course.rating) + 1) -
                            ~~(
                              course.rating - Math.floor(course.rating) <
                                0.79 &&
                              course.rating - Math.floor(course.rating) > 0.21
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
                      ({course.num_rating} ratings)
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

Newest.propTypes = {
  listNewCourses: PropTypes.array
}

export default Newest
