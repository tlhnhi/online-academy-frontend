import { yupResolver } from '@hookform/resolvers/yup'
import { signIn } from 'api/auth'
import React, { memo } from 'react'
import { useForm } from 'react-hook-form'
import { Link, Redirect } from 'react-router-dom'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  FormCheckbox,
  FormGroup,
  Row
} from 'shards-react'
import * as Yup from 'yup'

const Login = memo(() => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .max(32, 'Password must be at most 32 characters')
      .required('Password is required')
  })

  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(validationSchema)
  })

  async function onSubmit(values) {
    const { email, password } = values
    const res = await signIn(email, password)
    if (res?.token) localStorage.setItem('token', res.token)
    window.location.reload()
  }

  if (!!localStorage.getItem('token')) {
    return <Redirect to="/" />
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
              {/* Password */}
              <FormGroup>
                <div>
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
                </div>
              </FormGroup>
              <FormCheckbox className="mb-3" value="">
                Remember Me
              </FormCheckbox>
              <Button className="d-block mx-auto" type="submit" pill>
                Log In
              </Button>
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
            <Link to="/register" className="text-muted">
              Create Your Account
            </Link>
          </label>
        </div>
      </Col>
      <Col></Col>
    </Container>
  )
})

export default Login
