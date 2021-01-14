import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Card,
  Col,
  Form,
  FormInput,
  FormTextarea,
  ListGroup,
  ListGroupItem,
  Row
} from 'shards-react'

const UserAccountDetails = memo(({ other }) => {
  const formik = useFormik({
    initialValues: other
  })

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
                    <label htmlFor="name">Name</label>
                    <FormInput
                      id="name"
                      name="name"
                      {...formik.getFieldProps('name')}
                      disabled
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
                {other.isLecturer ? (
                  <div>
                    <Row form>
                      {/* Rating */}
                      <Col md="4" className="form-group">
                        <label htmlFor="feRating">Rating</label> <br />
                        <span className="card-title text-warning">
                          {other.star.toFixed(1)}&nbsp;
                          {[
                            ...Array(
                              other.star - Math.floor(other.star) < 0.79
                                ? Math.floor(other.star)
                                : Math.floor(other.star) + 1
                            )
                          ].map((_, idx) => (
                            <i className="material-icons" key={idx}>
                              &#xe838;
                            </i>
                          ))}
                          {[
                            ...Array(
                              ~~(
                                other.star - Math.floor(other.star) < 0.79 &&
                                other.star - Math.floor(other.star) > 0.21
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
                                (other.star - Math.floor(other.star) < 0.79
                                  ? Math.floor(other.star)
                                  : Math.floor(other.star) + 1) -
                                ~~(
                                  other.star - Math.floor(other.star) < 0.79 &&
                                  other.star - Math.floor(other.star) > 0.21
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
                          {other.courses.length}
                        </span>
                      </Col>

                      {/* Enrolls */}
                      <Col md="4" className="form-group">
                        <label htmlFor="feStudent">Enrollments</label>
                        <br />
                        <span className="card-title">{other.enrollments}</span>
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
                          disabled
                        />
                      </Col>
                    </Row>
                  </div>
                ) : (
                  <div></div>
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
  other: PropTypes.object
}

export default UserAccountDetails
