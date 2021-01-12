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

const UserAccountDetails = memo(({ user, other }) => {
  const display = other || user

  const formik = useFormik({
    initialValues: display,
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
                      disabled={other}
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
                {display.isLecturer ? (
                  <div>
                    <Row form>
                      {/* Rating */}
                      <Col md="4" className="form-group">
                        <label htmlFor="feRating">Rating</label> <br />
                        <span className="card-title text-warning">
                          {display.star}&nbsp;
                          {[
                            ...Array(
                              display.star - Math.floor(display.star) < 0.79
                                ? Math.floor(display.star)
                                : Math.floor(display.star) + 1
                            )
                          ].map((_, idx) => (
                            <i className="material-icons" key={idx}>
                              &#xe838;
                            </i>
                          ))}
                          {[
                            ...Array(
                              ~~(
                                display.star - Math.floor(display.star) <
                                  0.79 &&
                                display.star - Math.floor(display.star) > 0.21
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
                                (display.star - Math.floor(display.star) < 0.79
                                  ? Math.floor(display.star)
                                  : Math.floor(display.star) + 1) -
                                ~~(
                                  display.star - Math.floor(display.star) <
                                    0.79 &&
                                  display.star - Math.floor(display.star) > 0.21
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
                          {display.courses.length}
                        </span>
                      </Col>

                      {/* Enrolls */}
                      <Col md="4" className="form-group">
                        <label htmlFor="feStudent">Enrollments</label>
                        <br />
                        <span className="card-title">
                          {display.enrollments}
                        </span>
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
                          disabled={other}
                        />
                      </Col>
                    </Row>
                  </div>
                ) : (
                  <div></div>
                )}
                {!other && (
                  <Button
                    className="d-block mx-auto"
                    type="submit"
                    theme="accent"
                  >
                    Update Account
                  </Button>
                )}
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
