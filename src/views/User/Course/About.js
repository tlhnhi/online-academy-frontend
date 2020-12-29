import React, { memo, useState } from 'react'
import { Row, Col, Card, CardBody, Button } from 'shards-react'

const About = memo(() => {
  const courseInfo = {
    title: 'React - The Complete Guide (Hooks, React Router, Redux)',
    description:
      'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
    author: 'Maximilian Schwarzmüller',
    image: require('../../../images/top_courses/react.png').default,
    price: '129.99$',
    date: '12/2020',
    fullStar: 4,
    halfStar: 1
  }
  const [course] = useState(courseInfo)
  return (
    <Card className="px-5">
      <Row>
        <Col sm="7">
          <CardBody>
            <h3 className="card-title text-fiord-blue">{course.title}</h3>
            <h5 className="card-post d-inline-block mb-3">
              {course.description}
            </h5>
            <span className="card-post d-flex mb-3">
              Created by: &nbsp;
              <a className="text-fiord-blue" href="/#">
                {course.author}
              </a>
            </span>
            <p className="d-flex justify-content-start mb-0">
              <span className="card-text d-inline-block text-warning">
                4.6 &nbsp;
                {[...Array(course.fullStar)].map((_, idx) => (
                  <i className="material-icons" key={idx}>
                    &#xe838;
                  </i>
                ))}
                {[...Array(course.halfStar)].map((_, idx) => (
                  <i className="material-icons" key={idx}>
                    &#xe839;
                  </i>
                ))}
                {[...Array(5 - course.fullStar - course.halfStar)].map((_, idx) => (
                  <i className="material-icons" key={idx}>
                    &#xe83a;
                  </i>
                ))}
                &nbsp;
              </span>
              <p className="card-text d-inline-block">(98,747 ratings)</p>
              &nbsp;&nbsp;
              <p className="card-text d-inline-block">334,851 students</p>
            </p>
            <div className="card-text mb-0">Last updated: {course.date}</div>
          </CardBody>
        </Col>
        <Col sm="5">
          <img
            className="img-thumbnail mx-auto mt-3 d-block"
            style={{ width: `500px`, height: `250px` }}
            src={`${course.image}`}
            alt=""
          ></img>
          <Row className="mx-5 justify-content-between">
            <h2 className="card-title d-block my-auto">{course.price}</h2>
            <Button size="lg" className="d-block my-2" pill>
              <i className="fas">&#xf07a;&nbsp;</i>
              Purchase
            </Button>
          </Row>
        </Col>
      </Row>
    </Card>
  )
})
export default About
