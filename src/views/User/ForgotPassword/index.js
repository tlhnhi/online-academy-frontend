import { yupResolver } from '@hookform/resolvers/yup'
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

const ForgotPassword = memo(() => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid')
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
              <Row form>
                <label
                  className="mx-auto text-muted mb-3"
                  style={{ fontSize: `13px` }}
                >
                  You will receive an email with your new password
                </label>
              </Row>
              <Button className="d-block mx-auto" type="submit" pill>
                Reset Password
              </Button>
            </Form>
          </CardBody>
        </Card>
        <div
          className="d-flex justify-content-between text-muted mx-auto mt-2"
          style={{ width: `350px` }}
        >
          <label className="mx-auto">
            <a href="/login" className="text-muted">
              Log In
            </a>
          </label>
        </div>
      </Col>
      <Col></Col>
    </Container>
  )
})

export default ForgotPassword
