import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row
} from 'shards-react'
import PageTitle from '../../../components/PageTitle'

const WatchList = memo(() => {
  const currentUser = useSelector(state => state.currentUser)

  const watchList = [
    {
      avatar: require('../../../images/top_courses/python.jpg').default,
      category: 'IT',
      categoryTheme: 'dark',
      lecturer: 'Ardit Sulce',
      lecturerAvatar: require('../../../images/avatars/1.jpg').default,
      name: 'The Python Mega Course: Build 10 Real World Applications',
      describe:
        'A complete practical Python course for both beginners & intermediates. Master Python 3 by making 10 amazing Python apps.',
      rating: 4.5,
      num_rating: '45,294',
      price: 129.99,
      discount: 0.92,
      favorite: true
    },
    {
      avatar: require('../../../images/top_courses/react.png').default,
      category: 'Web Development',
      categoryTheme: 'info',
      lecturer: 'Maximilian Schwarzmüller',
      lecturerAvatar: require('../../../images/avatars/4.jpg').default,
      name: 'React - The Complete Guide (Hooks, React Router, Redux)',
      describe:
        'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
      rating: 4.6,
      num_rating: '98,747',
      price: 129.99,
      discount: 0.92,
      favorite: true
    },
    {
      avatar: require('../../../images/top_courses/postman.png').default,
      category: 'Web Development',
      categoryTheme: 'royal-blue',
      lecturer: 'Valentin Despa',
      lecturerAvatar: require('../../../images/avatars/3.jpg').default,
      name: 'Postman: The Complete Guide - REST API Testing',
      describe:
        'Postman API testing for manual and automated tests. Automate with Newman, Jenkins or any other CI tool.',
      rating: 4.4,
      num_rating: '5,520',
      price: 19.99,
      discount: 0.45,
      favorite: true
    },
    {
      avatar: require('../../../images/top_courses/react-native.png').default,
      category: 'Mobile App Development',
      categoryTheme: 'warning',
      lecturer: 'Maximilian Schwarzmüller',
      lecturerAvatar: require('../../../images/avatars/4.jpg').default,
      name: 'React Native - The Practical Guide [2021 Edition]',
      describe:
        'Use React Native and your React knowledge to build native iOS and Android Apps - incl. Push Notifications, Hooks, Redux',
      rating: 4.6,
      num_rating: '18,498',
      price: 129.99,
      discount: 0.92,
      favorite: true
    },
    {
      avatar: require('../../../images/top_viewed/leadership.jpg').default,
      category: 'Management',
      categoryTheme: 'dark',
      lecturer: 'Lawrence M. Miller',
      lecturerAvatar: require('../../../images/avatars/1.jpg').default,
      name: 'Lean Leadership Skills, Lean Culture & Lean Management',
      describe:
        'Leading Change: Lean Culture, Lean Manufacturing, Continuous Improvement & Toyota Production System',
      rating: 4.5,
      num_rating: '4,733',
      price: 139.99,
      discount: 0.92,
      favorite: false
    },
    {
      avatar: require('../../../images/top_viewed/sales.jpg').default,
      category: 'Sales',
      categoryTheme: 'warning',
      lecturer: 'Lawrence M. Miller',
      lecturerAvatar: require('../../../images/avatars/1.jpg').default,
      name: 'Sales Skills Training: Consultative Selling Master Class',
      describe:
        'Sales Training - Professional B2B Selling Skills for Consultants, Entrepreneurs and all Who Bring in the Business!',
      rating: 4.5,
      num_rating: '4,733',
      price: 99.99,
      discount: 0.9,
      favorite: false
    },
    {
      avatar: require('../../../images/top_courses/goal.jpg').default,
      category: 'Management',
      categoryTheme: 'info',
      lecturer: 'Leila Bulling Towne',
      lecturerAvatar: require('../../../images/avatars/1.jpg').default,
      name: 'Goal Setting at Work: Plan for Success, Reach Your Goals',
      describe:
        'Use SMART goals to focus your work, hold yourself accountable, measure and evaluate your progress, and make an impact.',
      rating: 4.6,
      num_rating: '1,038',
      price: 49.99,
      discount: 0,
      favorite: true
    },
    {
      avatar: require('../../../images/top_courses/python.png').default,
      category: 'IT',
      categoryTheme: 'dark',
      lecturer: 'Joseph Delgadillo',
      lecturerAvatar: require('../../../images/avatars/1.jpg').default,
      name: 'The Complete Python 3 Course: Beginner to Advanced!',
      describe:
        'Learn Python with projects covering game & web development, web scraping, MongoDB, Django, PyQt, and data visualization!',
      rating: 4.2,
      num_rating: '20,433',
      price: 149.99,
      discount: 0.92,
      favorite: true
    }
  ]
  const [courses, setCourses] = useState(watchList)

  const handleRemoveItem = name => {
    setCourses(courses.filter(item => item.name !== name))
  }

  if (!currentUser?._id || currentUser.isLecturer) {
    return <Redirect to="/error" />
  }

  return (
    <Container fluid className="main-content-container p-4">
      <div className="page-header pb-3">
        <PageTitle
          sm="12"
          title="Watchlist"
          subtitle=""
          className="text-sm-left"
        />
      </div>
      {[...Array(Math.ceil(courses.length / 4))].map((_, index) => (
        <Row key={index} className="py-2">
          {courses.filter(item => item.favorite === true).length === 0 && (
            <Button size="lg" href="/home" className="mx-auto">
              Browse Courses Now
            </Button>
          )}
          {courses
            .filter(item => item.favorite === true)
            .slice(index * 4, index * 4 + 4)
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
                      className={`card-post__category bg-${course.categoryTheme}`}
                    >
                      {course.category}
                    </Badge>
                    <div className="card-post__author d-flex">
                      <span
                        className="card-post__author-avatar card-post__author-avatar--small"
                        style={{
                          backgroundImage: `url('${course.lecturerAvatar}')`
                        }}
                      ></span>
                    </div>
                  </div>
                  <CardBody>
                    <h5 className="card-title mb-0">
                      <a href="/#" className="text-fiord-blue">
                        {course.name}
                      </a>
                    </h5>
                    <span className="card-title d-inline-block">
                      <a className="text-muted" href="/#">
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
                    <div className="d-flex justify-content-center">
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
                      <span className="ml-auto text-right">
                        <i
                          className="fas fa-lg text-danger"
                          onClick={() => handleRemoveItem(course.name)}
                          style={{ cursor: 'pointer' }}
                        >
                          &#xf004;
                        </i>
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
        </Row>
      ))}
    </Container>
  )
})

WatchList.propTypes = {
  watchList: PropTypes.array
}

export default WatchList
