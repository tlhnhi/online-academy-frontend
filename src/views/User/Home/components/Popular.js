import catTheme from 'constants/category-theme'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Carousel } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Badge, Card, CardBody } from 'shards-react'

const Popular = memo(() => {
  const courses = useSelector(state => state.course)
  const categories = useSelector(state => state.category)
  const topViewed = courses

  const catDict = {}

  if (categories.length > 0) {
    for (const cat of categories) {
      if (!cat.parent) continue
      catDict[cat._id] = cat.name
    }
  }

  return (
    <Carousel indicators={false} interval={2000}>
      {topViewed.map((course, idx) => (
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
                  catTheme[catDict[course.category_id]]
                }`}
              >
                {catDict[course.category_id]}
              </Badge>
              <div className="card-post__author d-flex">
                <a
                  href="/#"
                  className="card-post__author-avatar card-post__author-avatar--small"
                  style={{
                    backgroundImage: `url('${course.lecturerAvatar}')`
                  }}
                >
                  {' '}
                </a>
              </div>
            </div>
            <CardBody>
              <h4 className="card-title mb-0">
                <a href={`/courses/${course._id}`} className="text-fiord-blue">
                  {course.title}
                </a>
              </h4>
              <p className="text-muted d-block mb-3">{course.lecturer}</p>
              <p className="card-text d-inline-block mb-3">{course.describe}</p>
              <span className="card-title d-inline-block">
                <a className="text-fiord-blue" href="/#">
                  {course.lecturer}
                </a>
              </span>
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
                        course.rating - Math.floor(course.rating) < 0.79 &&
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
              <span className="text-muted">({course.num_rating} ratings)</span>
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
            </CardBody>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  )
})

Popular.propTypes = {
  listPopular: PropTypes.array
}

export default Popular
