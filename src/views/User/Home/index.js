import React, { memo, useState } from 'react'
import { Container, Row, Col, Card, CardBody, Badge } from 'shards-react'
import { Carousel } from 'react-bootstrap'

import PageTitle from '../../../components/PageTitle'
import FeaturedTopics from './FeaturedTopics'

const Home = memo(() => {
  const listTopCourses = [
    {
      backgroundImage: require('../../../images/top_courses/python.jpg')
        .default,
      category: 'IT',
      categoryTheme: 'dark',
      author: 'Ardit Sulce',
      authorAvatar: require('../../../images/avatars/1.jpg').default,
      title: 'The Python Mega Course: Build 10 Real World Applications',
      body:
        'A complete practical Python course for both beginners & intermediates. Master Python 3 by making 10 amazing Python apps.',
      date: '28 February 2019'
    },
    {
      backgroundImage: require('../../../images/top_courses/react.png').default,
      category: 'Web Development',
      categoryTheme: 'info',
      author: 'Maximilian Schwarzmüller',
      authorAvatar: require('../../../images/avatars/2.jpg').default,
      title: 'React - The Complete Guide (Hooks, React Router, Redux)',
      body:
        'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
      date: '29 February 2019'
    },
    {
      backgroundImage: require('../../../images/top_courses/postman.png')
        .default,
      category: 'Web Development',
      categoryTheme: 'royal-blue',
      author: 'Valentin Despa',
      authorAvatar: require('../../../images/avatars/3.jpg').default,
      title: 'Postman: The Complete Guide - REST API Testing',
      body:
        'Postman API testing for manual and automated tests. Automate with Newman, Jenkins or any other CI tool.',
      date: '29 February 2019'
    },
    {
      backgroundImage: require('../../../images/top_courses/react-native.png')
        .default,
      category: 'Mobile App Development',
      categoryTheme: 'warning',
      author: 'Maximilian Schwarzmüller',
      authorAvatar: require('../../../images/avatars/2.jpg').default,
      title: 'React Native - The Practical Guide [2020 Edition]',
      body:
        'Use React Native and your React knowledge to build native iOS and Android Apps - incl. Push Notifications, Hooks, Redux',
      date: '29 February 2019'
    }
  ]

  const listTopViewed = [
    {
      backgroundImage: require('../../../images/top_viewed/leadership.jpg')
        .default,
      category: 'Management',
      categoryTheme: 'dark',
      author: 'Lawrence M. Miller',
      authorAvatar: require('../../../images/avatars/1.jpg').default,
      title: 'Lean Leadership Skills, Lean Culture & Lean Management',
      body:
        'Leading Change: Lean Culture, Lean Manufacturing, Continuous Improvement & Toyota Production System',
      date: '29 February 2019'
    },
    {
      backgroundImage: require('../../../images/top_viewed/sales.jpg').default,
      category: 'Sales',
      categoryTheme: 'info',
      author: 'Lawrence M. Miller',
      authorAvatar: require('../../../images/avatars/1.jpg').default,
      title: 'Sales Skills Training: Consultative Selling Master Class',
      body:
        'Sales Training - Professional B2B Selling Skills for Consultants, Entrepreneurs and all Who Bring in the Business!',
      date: '29 February 2019'
    }
  ]

  const [topCourses] = useState(listTopCourses)
  const [topViewed] = useState(listTopViewed)

  return (
    <Container fluid className="main-content-container p-4">
      <Row>
        <Col sm="9">
          <div className="page-header pb-4">
            <PageTitle
              sm="12"
              title="Most Popular Courses Last Week"
              subtitle=""
              className="text-sm-left"
            />
          </div>
          <Carousel interval={2000}>
            {topCourses.map((course, idx) => (
              <Carousel.Item key={idx}>
                <Card small className="card-post card-post--1">
                  <div
                    className="card-post__image "
                    style={{
                      backgroundImage: `url(${course.backgroundImage})`,
                      height: `250px`
                    }}
                  >
                    <Badge
                      pill
                      className={`card-post__category bg-${course.categoryTheme}`}
                    >
                      {course.category}
                    </Badge>
                    <div className="card-post__author d-flex">
                      <a
                        href="/#"
                        className="card-post__author-avatar card-post__author-avatar--small"
                        style={{
                          backgroundImage: `url('${course.authorAvatar}')`
                        }}
                      >
                        Created by {course.author}
                      </a>
                    </div>
                  </div>
                  <CardBody>
                    <h4 className="card-title">
                      <a href="/#" className="text-fiord-blue">
                        {course.title}
                      </a>
                    </h4>
                    <p className="text-muted d-block mb-3">{course.author}</p>
                    <p className="card-text d-inline-block mb-3">
                      {course.body}
                    </p>
                    <p className="text-muted">{course.date}</p>
                  </CardBody>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col sm="3">
          <div className="page-header pb-4">
            <PageTitle
              sm="12"
              title="Featured Topics Last Week"
              subtitle=""
              className="text-sm-left"
            />
          </div>
          <FeaturedTopics />
        </Col>
      </Row>

      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Top Viewed Courses"
          subtitle=""
          className="text-sm-left"
        />
      </Row>
      <Carousel indicators={false}>
        <Row>
          {topViewed.map((post, idx) => (
            <Col lg="6" sm="12" key={idx}>
              <Card
                small
                className="card-post card-post--aside card-post--1 h-100"
              >
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url('${post.backgroundImage}')` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                  <div className="card-post__author d-flex">
                    <a
                      href="/#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Created by Anna Ken
                    </a>
                  </div>
                </div>
                <CardBody>
                  <h5 className="card-title">
                    <a className="text-fiord-blue" href="/#">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                  <span className="text-muted">{post.date}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          {topViewed.map((post, idx) => (
            <Carousel.Item key={idx}>
              <Col lg="6" sm="12">
                <Card
                  small
                  className="card-post card-post--aside card-post--1 h-100"
                >
                  <div
                    className="card-post__image"
                    style={{
                      backgroundImage: `url('${post.backgroundImage}')`
                    }}
                  >
                    <Badge
                      pill
                      className={`card-post__category bg-${post.categoryTheme}`}
                    >
                      {post.category}
                    </Badge>
                    <div className="card-post__author d-flex">
                      <a
                        href="/#"
                        className="card-post__author-avatar card-post__author-avatar--small"
                        style={{
                          backgroundImage: `url('${post.authorAvatar}')`
                        }}
                      >
                        Created by Anna Ken
                      </a>
                    </div>
                  </div>
                  <CardBody>
                    <h5 className="card-title">
                      <a className="text-fiord-blue" href="/#">
                        {post.title}
                      </a>
                    </h5>
                    <p className="card-text d-inline-block mb-3">{post.body}</p>
                    <span className="text-muted">{post.date}</span>
                  </CardBody>
                </Card>
              </Col>
            </Carousel.Item>
          ))}
        </Row>
      </Carousel>

      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Newest Courses"
          subtitle=""
          className="text-sm-left"
        />
      </Row>

      <Carousel indicators={false}>
        <Carousel.Item>
          <Row>
            {topCourses.map((course, idx) => (
              <Col lg="3" md="6" sm="12" key={idx}>
                <Card small className="card-post card-post--1">
                  <div
                    className="card-post__image"
                    style={{
                      backgroundImage: `url(${course.backgroundImage})`
                    }}
                  >
                    <Badge
                      pill
                      className={`card-post__category bg-${course.categoryTheme}`}
                    >
                      {course.category}
                    </Badge>
                    <div className="card-post__author d-flex">
                      <a
                        href="/#"
                        className="card-post__author-avatar card-post__author-avatar--small"
                        style={{
                          backgroundImage: `url('${course.authorAvatar}')`
                        }}
                      >
                        Created by {course.author}
                      </a>
                    </div>
                  </div>
                  <CardBody>
                    <h5 className="card-title">
                      <a href="/#" className="text-fiord-blue">
                        {course.title}
                      </a>
                    </h5>
                    <p className="card-text d-inline-block mb-3">
                      {course.body}
                    </p>
                    <span className="text-muted">{course.date}</span>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            {topCourses.map((course, idx) => (
              <Col lg="3" md="6" sm="12" key={idx}>
                <Card small className="card-post card-post--1">
                  <div
                    className="card-post__image"
                    style={{
                      backgroundImage: `url(${course.backgroundImage})`
                    }}
                  >
                    <Badge
                      pill
                      className={`card-post__category bg-${course.categoryTheme}`}
                    >
                      {course.category}
                    </Badge>
                    <div className="card-post__author d-flex">
                      <a
                        href="/#"
                        className="card-post__author-avatar card-post__author-avatar--small"
                        style={{
                          backgroundImage: `url('${course.authorAvatar}')`
                        }}
                      >
                        Created by {course.author}
                      </a>
                    </div>
                  </div>
                  <CardBody>
                    <h5 className="card-title">
                      <a href="/#" className="text-fiord-blue">
                        {course.title}
                      </a>
                    </h5>
                    <p className="card-text d-inline-block mb-3">
                      {course.body}
                    </p>
                    <span className="text-muted">{course.date}</span>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
})

export default Home
