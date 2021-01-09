import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Badge, Button, Card, CardBody, Col, Row } from 'shards-react'
import axiosClient from 'api/axiosClient'

const About = memo(({ courseInfo }) => {
  const { id } = useParams()
  const users = useSelector(x => x.user)
  const [course, setCourse] = useState('')
  const [isDone, setIsDone] = useState(false)

  const countEnrolledByCourseId = id => {
    let c = 0
    if (users.length > 0) {
      for (const user of users) {
        if (user.enrolled.includes(id)) ++c
      }
    }
    return c
  }

  const handleSetCourseDone = async () => {
    const { success, message } = await axiosClient({
      url: `/course/lecturer/${id}`,
      method: 'put',
      data: { done: !isDone }
    })

    if (!success) return alert(message)
    setIsDone(!isDone)
  }

  useEffect(() => {
    const fetchCourse = async () => {
      if (course?._id) return
      const { success, message, data } = await axiosClient({
        url: `/course/${id}`
      })

      if (!success) return alert(message)
      setCourse(data)
      console.log(data)
      setIsDone(data.done)
    }

    fetchCourse()
  }, [course, id])

  return (
    <Card className="px-5">
      <Row>
        <Col sm="7">
          <CardBody>
            <h3 className="card-title text-fiord-blue">{course?.title}</h3>
            <h5 className="card-post d-inline-block mb-3">
              {course?.describe}
            </h5>

            <p className="card-title mb-0">
              {/* <span className="card-title d-inline-block text-warning">
                {course?.rating}&nbsp;
                {[
                  ...Array(
                    course?.rating - Math.floor(course?.rating) < 0.79
                      ? Math.floor(course?.rating)
                      : Math.floor(course?.rating) + 1
                  )
                ].map((_, idx) => (
                  <i className="material-icons" key={idx}>
                    &#xe838;
                  </i>
                ))}
                {[
                  ...Array(
                    ~~(
                      course?.rating - Math.floor(course?.rating) < 0.79 &&
                      course?.rating - Math.floor(course?.rating) > 0.21
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
                      (course?.rating - Math.floor(course?.rating) < 0.79
                        ? Math.floor(course?.rating)
                        : Math.floor(course?.rating) + 1) -
                      ~~(
                        course?.rating - Math.floor(course?.rating) < 0.79 &&
                        course?.rating - Math.floor(course?.rating) > 0.21
                      )
                  )
                ].map((_, idx) => (
                  <i className="material-icons" key={idx}>
                    &#xe83a;
                  </i>
                ))}
                &nbsp;
              </span> */}
              <span className="card-title d-inline-block">
                ({course?.num_rating} ratings)
              </span>
              &nbsp;&nbsp;
            </p>
            <span className="card-title d-flex mb-3">
              You have {countEnrolledByCourseId(course?._id)} students in this
              course
            </span>
            <p className="card-title mb-3">
              Your last updated:{' '}
              {new Date(course?.updatedAt).toLocaleDateString()}
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
            src={`${course?.avatar}`}
            alt=""
          ></img>
          <Row className="mx-5 justify-content-between">
            <span className="my-auto">
              <h2 className="card-title d-inline-block my-auto">
                {course?.discount !== 1
                  ? (course?.price * (1 - course?.discount)).toFixed(2)
                  : course?.price}
                $&nbsp;
              </h2>
              <h4
                className="card-title d-inline-block my-auto text-muted"
                style={{
                  textDecorationLine: 'line-through',
                  textDecorationStyle: 'solid'
                }}
              >
                {course?.discount ? course?.price + '$' : ''}
              </h4>
            </span>
            <Link to={`/create-course?id=${course?._id}`}>
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
    isLiked: false
  }
}

export default About
