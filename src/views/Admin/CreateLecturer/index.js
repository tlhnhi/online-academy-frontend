import { yupResolver } from '@hookform/resolvers/yup'
import { createAccountByAdmin } from 'api/user'
import React, { memo } from 'react'
import { useForm } from 'react-hook-form'
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Row
} from 'shards-react'
import * as Yup from 'yup'

const CreateLecturer = memo(() => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .max(32, 'Password must be at most 32 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required')
  })

  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(validationSchema)
  })

  async function onSubmit(values) {
    const { email, password, name } = values
    await createAccountByAdmin(email, password, name)
    alert('Account created')
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
                  placeholder="Lecturer Email Address"
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
                  placeholder="Lecturer Name"
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
                  placeholder="Lecturer Password"
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

              <Row form>
                <Button className="d-block mx-auto" pill type="submit">
                  Create
                </Button>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </Col>
      <Col></Col>
    </Container>
  )
})

export default CreateLecturer
