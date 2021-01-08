import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormTextarea,
  Button
} from 'shards-react'

const UserAccountDetails = memo(() => {
  const userInfo = {
    name: 'Nhi Tran Le Hong',
    isLecturer: true,
    email: 'tlhnhi@gmail.com',
    rating: 4.2,
    courses: 123456789,
    students: 987654321,
    describe:
      "Hi, I'm Nhi! I have been identified as one of OA's Top Instructors and all my premium courses have recently earned the best-selling status for outstanding performance and student satisfaction.I'm a full-stack web developer and designer with a passion for building beautiful things from scratch. I've been building websites and apps since 2007 and also have a Master's degree in Engineering. It was in college where I first discovered my passion for teaching and helping others by sharing all I knew. And that passion brought me to Udemy in 2015, where my students love the fact that I take the time to explain important concepts in a way that everyone can easily understand.Do you want to learn how to build awesome websites with advanced HTML and CSS?Looking for a complete JavaScript course that takes you from beginner to advanced developer?Or maybe you want to build modern and fast back-end applications with Node.js?Then don't waste your time with random tutorials or incomplete videos. All my courses are easy-to-follow, all-in-one packages that will take your skills to the next level.These courses are exactly the courses I wish I had when I was first getting into web development!So see for yourself, enroll in one of my courses (or all of them :D) and join my 500,000+ happy students today."
  }

  const [user] = useState(userInfo)

  return (
    <Card small className="mb-2">
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form>
                <Row form>
                  {/* Name */}
                  <Col md="12" className="form-group">
                    <label htmlFor="feFirstName">Name</label>
                    <FormInput
                      id="feName"
                      placeholder={user.name}
                      onChange={() => {}}
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* Email */}
                  <Col md="12" className="form-group">
                    <label htmlFor="feEmail">Email</label>
                    <FormInput
                      type="email"
                      id="feEmail"
                      placeholder={user.email}
                      onChange={() => {}}
                      autoComplete="email"
                    />
                  </Col>
                </Row>
                {user.isLecturer ? <div>
                <Row form>
                  {/* Rating */}
                  <Col md="4" className="form-group">
                    <label htmlFor="feRating">Rating</label> <br />
                    <span className="card-title text-warning">
                      {user.rating}&nbsp;
                      {[
                        ...Array(
                          user.rating - Math.floor(user.rating) < 0.79
                            ? Math.floor(user.rating)
                            : Math.floor(user.rating) + 1
                        )
                      ].map((_, idx) => (
                        <i className="material-icons" key={idx}>
                          &#xe838;
                        </i>
                      ))}
                      {[
                        ...Array(
                          ~~(
                            user.rating - Math.floor(user.rating) < 0.79 &&
                            user.rating - Math.floor(user.rating) > 0.21
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
                            (user.rating - Math.floor(user.rating) < 0.79
                              ? Math.floor(user.rating)
                              : Math.floor(user.rating) + 1) -
                            ~~(
                              user.rating - Math.floor(user.rating) < 0.79 &&
                              user.rating - Math.floor(user.rating) > 0.21
                            )
                        )
                      ].map((_, idx) => (
                        <i className="material-icons" key={idx}>
                          &#xe83a;
                        </i>
                      ))}
                    </span>
                  </Col>

                  {/* Courses */}
                  <Col md="4" className="form-group">
                    <label htmlFor="feStudent">Courses</label>
                    <br />
                    <span className="card-title">{user.students}</span>
                  </Col>

                  {/* Enrolls */}
                  <Col md="4" className="form-group">
                    <label htmlFor="feStudent">Students</label>
                    <br />
                    <span className="card-title">{user.students}</span>
                  </Col>
                </Row>
                <Row>
                  {/* Description */}
                  <Col md="12" className="form-group">
                    <label htmlFor="feDescription">Description</label>
                    <FormTextarea
                      id="feDescription"
                      style={{ height: `80px` }}
                      placeholder={user.describe}
                      onChange={() => {}}
                    />
                  </Col>
                </Row>
                </div> : <div></div>}
                <Button
                  className="d-block mx-auto"
                  type="submit"
                  theme="accent"
                >
                  Update Account
                </Button>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Card>
  )
})

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  userInfo: PropTypes.object
}

export default UserAccountDetails
