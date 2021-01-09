import axiosClient from 'api/axiosClient'
import PropTypes from 'prop-types'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Badge, Button, Card, CardBody, Col, Row } from 'shards-react'

const About = memo(({ courseInfo: course, lecturer }) => {
  const { id } = useParams()

  const currentUser = useSelector(state => state.currentUser)
  const users = useSelector(x => x.user)

  const enrolled = users.filter(x => x.enrolled.includes(id))

  const [isLike, setIsLike] = useState(currentUser?.favorite.includes(id))

  useEffect(() => {
    setIsLike(currentUser?.favorite.includes(id))
  }, [currentUser, id])

  const handleAddToWatchList = useCallback(async () => {
    if (!isLike) {
      const { success, message } = await axiosClient({
        url: '/course/favorite',
        method: 'post',
        data: { course: id }
      })

      if (!success) return alert(message)
      setIsLike(true)
    } else {
      const { success, message } = await axiosClient({
        url: `/course/favorite/${id}`,
        method: 'delete'
      })

      if (!success) return alert(message)
      setIsLike(false)
    }
  }, [isLike, id])

  const handleEnrollCourse = useCallback(async () => {
    const { success, message, data } = await axiosClient({
      url: '/course/enroll',
      method: 'post',
      data: { course: id }
    })

    if (!success) return alert(message)
    alert(data)
  }, [id])

  return (
    <Card className="px-5">
      <Row>
        <Col sm="7">
          <CardBody>
            <h3 className="card-title text-fiord-blue">{course.title}</h3>
            <h5 className="card-post d-inline-block mb-3">{course.describe}</h5>
            <span className="card-title d-flex mb-3">
              Created by:&nbsp;
              <a
                className="text-fiord-blue"
                href={`/profile?id=${lecturer?._id}`}
              >
                {lecturer?.name}
              </a>
            </span>
            <p className="card-title mb-0">
              <span className="card-title d-inline-block text-warning">
                {course.rating}&nbsp;
                {[
                  ...Array(
                    course.rating - Math.floor(course.rating) < 0.79
                      ? Math.floor(course.rating)
                      : Math.floor(course.rating) + 1
                  )
                ].map((_, idx) => (
                  <i className="material-icons" key={idx}>
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
                ].map((_, idx) => (
                  <i className="material-icons" key={idx}>
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
                ].map((_, idx) => (
                  <i className="material-icons" key={idx}>
                    &#xe83a;
                  </i>
                ))}
                &nbsp;
              </span>
              <span className="card-title d-inline-block">
                ({course.rating} ratings)
              </span>
              &nbsp;&nbsp;
              <span className="card-title d-inline-block">
                {enrolled?.length} students
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
                  <i className={isLike ? 'fas' : 'far'}>&#xf004;&nbsp;</i>
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
            {currentUser?.enrolled.includes(id) ? (
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
                  Purchase
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
  courseInfo: PropTypes.object
}

About.defaultProps = {
  courseInfo: {
    title: 'React - The Complete Guide (Hooks, React Router, Redux)',
    describe:
      'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
    lecturer: 'Maximilian Schwarzmüller',
    avatar: require('../../../../images/top_courses/react.png').default,
    price: '129.99',
    discount: '0.92',
    updatedAt: '12/2020',
    rating: 4.6,
    num_rating: '98,747',
    students: '334,851',
    isLiked: false,
    enrolled: true
  }
}

export default About
