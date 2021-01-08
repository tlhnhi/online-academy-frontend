import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Button,
  Card,
  Col,
  Form,
  FormInput,
  FormTextarea,
  ListGroup,
  ListGroupItem,
  Row
} from 'shards-react'
import axiosClient from 'api/axiosClient'

const UserAccountDetails = memo(({ user }) => {
  const { email, name, isLecturer } = user
  const rating = 3.5
  const students = 6969
  // const description = ''

  const formik = useFormik({
    initialValues: { email, name },
    async onSubmit({ name }) {
      const { success, message } = await axiosClient({
        url: '/user/profile',
        method: 'post',
        data: { name }
      })

      if (!success) return alert(message)

      alert('Profile updated')
    }
  })

  return (
    <Card small className="mb-2">
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form onSubmit={formik.handleSubmit}>
                <Row form>
                  {/* Name */}
                  <Col md="12" className="form-group">
                    <label htmlFor="name">Name</label>
                    <FormInput
                      id="name"
                      name="name"
                      placeholder={name}
                      {...formik.getFieldProps('name')}
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* Email */}
                  <Col md="12" className="form-group">
                    <label htmlFor="email">Email</label>
                    <FormInput
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      disabled
                      {...formik.getFieldProps('email')}
                    />
                  </Col>
                </Row>
                {isLecturer ? (
                  <div>
                    <Row form>
                      {/* Rating */}
                      <Col md="4" className="form-group">
                        <label htmlFor="feRating">Rating</label> <br />
                        <span className="card-title text-warning">
                          {rating}&nbsp;
                          {[
                            ...Array(
                              rating - Math.floor(rating) < 0.79
                                ? Math.floor(rating)
                                : Math.floor(rating) + 1
                            )
                          ].map((_, idx) => (
                            <i className="material-icons" key={idx}>
                              &#xe838;
                            </i>
                          ))}
                          {[
                            ...Array(
                              ~~(
                                rating - Math.floor(rating) < 0.79 &&
                                rating - Math.floor(rating) > 0.21
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
                                (rating - Math.floor(rating) < 0.79
                                  ? Math.floor(rating)
                                  : Math.floor(rating) + 1) -
                                ~~(
                                  rating - Math.floor(rating) < 0.79 &&
                                  rating - Math.floor(rating) > 0.21
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
                        <span className="card-title">{students}</span>
                      </Col>

                      {/* Enrolls */}
                      <Col md="4" className="form-group">
                        <label htmlFor="feStudent">Students</label>
                        <br />
                        <span className="card-title">{students}</span>
                      </Col>
                    </Row>
                    <Row>
                      {/* Description */}
                      <Col md="12" className="form-group">
                        <label htmlFor="feDescription">Description</label>
                        <FormTextarea
                          id="feDescription"
                          style={{ height: `80px` }}
                          placeholder="Your description"
                          onChange={() => {}}
                        />
                      </Col>
                    </Row>
                  </div>
                ) : (
                  <div></div>
                )}
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
  user: PropTypes.object
}

export default UserAccountDetails
