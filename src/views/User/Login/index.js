import React, { memo } from 'react'
import {
  Container,
  Card,
  Row,
  Form,
  FormGroup,
  FormCheckbox,
  Button,
  CardBody,
  CardFooter,
  Col
} from 'shards-react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const Login = memo(() => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required')
  })

  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(validationSchema)
  })

  function onSubmit(data) {
    alert(JSON.stringify(data, null, 4))
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
              <label>Email</label>
              <input
                name="email"
                type="text"
                ref={register}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
              {/* Password */}
              <FormGroup>
                <div>
                  <label>Password</label>
                  <input
                    name="password"
                    type="password"
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
            <a href="/forgot-password" className="text-muted">
              Forgot Password
            </a>
          </label>
          <label>
            <a href="/register" className="text-muted">
              Create Your Account
            </a>
          </label>
        </div>
      </Col>
      <Col></Col>
    </Container>
  )
})

export default Login
