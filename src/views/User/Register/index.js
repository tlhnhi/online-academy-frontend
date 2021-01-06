import { yupResolver } from '@hookform/resolvers/yup'
import axiosClient from 'api/axiosClient'
import React, { memo } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  FormGroup,
  Row
} from 'shards-react'
import * as Yup from 'yup'

const Register = memo(() => {
  const { push } = useHistory()

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .max(32, 'Password must be at most 32 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    acceptTerms: Yup.bool().oneOf(
      [true],
      'Accept Terms & Conditions is required'
    )
  })

  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(validationSchema)
  })

  async function onSubmit(data) {
    const { email, password } = data

    try {
      const { success, message, token } = await axiosClient({
        url: '/signup',
        method: 'post',
        data: { email, password, name: 'New User' }
      })

      if (!success) {
        localStorage.removeItem('token')
        return alert(message)
      }

      localStorage.setItem('token', token)
      push('/')
    } catch (error) {
      localStorage.removeItem('token')
      alert('Cannot register')
      console.log(error.message)
    }
  }

  return (
    <Container
      fluid
      className="main-content-container d-flex flex-column justify-content-center"
    >
      <Col></Col>
      <Col>
        <Card className="m-auto" style={{ width: `350px` }}>
          <CardBody>
            <Row form>
              <img
                className="rounded-circle mx-auto"
                src={require('../../../images/icon.png').default}
                alt=""
                width="40"
                height="40"
                object-fit="cover"
              />
            </Row>
            <Row form>
              <span
                className="mx-auto mb-4 text-fiord-blue"
                style={{ fontSize: `16px` }}
              >
                Online Academi
              </span>
            </Row>
            <Form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
              {/* Email */}
              <FormGroup>
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  ref={register}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.email?.message}</div>
              </FormGroup>
              <FormGroup>
                <label>Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  ref={register}
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.name?.message}</div>
              </FormGroup>
              {/* Password */}
              <FormGroup>
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  ref={register}
                  className={`form-control ${
                    errors.password ? 'is-invalid' : ''
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              </FormGroup>
              <FormGroup>
                <label>Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  ref={register}
                  className={`form-control ${
                    errors.confirmPassword ? 'is-invalid' : ''
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.confirmPassword?.message}
                </div>
              </FormGroup>

              <FormGroup className="px-4">
                <input
                  name="acceptTerms"
                  type="checkbox"
                  ref={register}
                  id="acceptTerms"
                  className={`form-check-input ${
                    errors.acceptTerms ? 'is-invalid' : ''
                  }`}
                />
                <label htmlFor="acceptTerms" className="form-check-label">
                  I agree with the Terms & Conditions.
                </label>
                <div className="invalid-feedback">
                  {errors.acceptTerms?.message}
                </div>
              </FormGroup>

              <Row form>
                <Button className="d-block mx-auto" pill type="submit">
                  Register
                </Button>
              </Row>
            </Form>
          </CardBody>
          <CardFooter
            className="d-flex justify-content-between text-muted mx-5"
            style={{ fontSize: `22px` }}
          >
            <i className="fab">&#xf39e;</i>
            <i className="fab">&#xf099;</i>
            <i className="fab">&#xf09b;</i>
            <i className="fab">&#xf0d5;</i>
          </CardFooter>
        </Card>
        <div
          className="d-flex justify-content-between text-muted mx-auto mt-2"
          style={{ width: `350px` }}
        >
          <label>
            <Link to="/forgot-password" className="text-muted">
              Forgot Password
            </Link>
          </label>
          <label>
            <Link to="/login" className="text-muted">
              Log In
            </Link>
          </label>
        </div>
      </Col>
      <Col></Col>
    </Container>
  )
})

export default Register
