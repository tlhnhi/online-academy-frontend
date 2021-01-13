import { updateProfile } from 'api/user'
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

const UserAccountDetails = memo(({ user }) => {
  const formik = useFormik({
    initialValues: user,
    async onSubmit({ name, description }) {
      const message = await updateProfile({ name, description })
      alert(message)
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
                {user.isLecturer ? (
                  <div>
                    <Row form>
                      {/* Rating */}
                      <Col md="4" className="form-group">
                        <label htmlFor="feRating">Rating</label> <br />
                        <span className="card-title text-warning">
                          {user.star}&nbsp;
                          {[
                            ...Array(
                              user.star - Math.floor(user.star) < 0.79
                                ? Math.floor(user.star)
                                : Math.floor(user.star) + 1
                            )
                          ].map((_, idx) => (
                            <i className="material-icons" key={idx}>
                              &#xe838;
                            </i>
                          ))}
                          {[
                            ...Array(
                              ~~(
                                user.star - Math.floor(user.star) < 0.79 &&
                                user.star - Math.floor(user.star) > 0.21
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
                                (user.star - Math.floor(user.star) < 0.79
                                  ? Math.floor(user.star)
                                  : Math.floor(user.star) + 1) -
                                ~~(
                                  user.star - Math.floor(user.star) < 0.79 &&
                                  user.star - Math.floor(user.star) > 0.21
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
                        <span className="card-title">
                          {user.courses.length}
                        </span>
                      </Col>

                      {/* Enrolls */}
                      <Col md="4" className="form-group">
                        <label htmlFor="feStudent">Enrollments</label>
                        <br />
                        <span className="card-title">{user.enrollments}</span>
                      </Col>
                    </Row>
                    <Row>
                      {/* Description */}
                      <Col md="12" className="form-group">
                        <label htmlFor="description">Description</label>
                        <FormTextarea
                          id="description"
                          style={{ height: `80px` }}
                          placeholder="Your description"
                          {...formik.getFieldProps('description')}
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
  user: PropTypes.object,
  other: PropTypes.object
}

export default UserAccountDetails
