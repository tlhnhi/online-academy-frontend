import axiosClient from 'api/axiosClient'
import { useFormik } from 'formik'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
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
  FormInput,
  Row
} from 'shards-react'
import * as Yup from 'yup'

const Register = memo(() => {
  const formik = useFormik({
    initialValues: {
      feEmail: '',
      fePassword: '',
      feCPassword: '',
      agree: false
    },
    validationSchema: Yup.object({
      feEmail: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
      fePassword: Yup.string()
        .required('Password is required')
        .min(3, 'Password must be more than 2 characters')
        .max(32, 'Password must be less than 31 characters'),
      feCPassword: Yup.string()
        .required('Confirm password does not match')
        .oneOf(
          [Yup.ref('fePassword'), null],
          'Confirm password does not match'
        ),
      agree: Yup.bool().oneOf([true], 'Please agree term and condition')
    }),
    async onSubmit({ feEmail, fePassword }) {
      const { success, message, token } = await axiosClient({
        method: 'post',
        url: '/signup',
        data: { email: feEmail, password: fePassword, name: 'New User' }
      })

      if (!success) {
        localStorage.removeItem('token')
        return alert(message)
      }

      localStorage.setItem('token', token)
      alert('Account registered')
    }
  })

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
            <Form onSubmit={formik.handleSubmit}>
              {/* Email */}
              <FormGroup>
                <label htmlFor="feEmail">Email</label>
                <FormInput
                  type="email"
                  name="feEmail"
                  placeholder="Email Address"
                  autoComplete="email"
                  {...formik.getFieldProps('feEmail')}
                />
                {formik.touched.feEmail && formik.errors.feEmail ? (
                  <span style={{ color: 'red' }}>{formik.errors.feEmail}</span>
                ) : (
                  ''
                )}
              </FormGroup>
              {/* Password */}
              <FormGroup>
                <label htmlFor="fePassword">Password</label>
                <FormInput
                  type="password"
                  name="fePassword"
                  placeholder="Password"
                  autoComplete="current-password"
                  {...formik.getFieldProps('fePassword')}
                />
                {formik.touched.fePassword && formik.errors.fePassword ? (
                  <span style={{ color: 'red' }}>
                    {formik.errors.fePassword}
                  </span>
                ) : (
                  ''
                )}
              </FormGroup>
              <FormGroup>
                <label htmlFor="feCPassword">Confirm Password</label>
                <FormInput
                  type="password"
                  name="feCPassword"
                  placeholder="Password"
                  autoComplete="current-password"
                  {...formik.getFieldProps('feCPassword')}
                />
                {formik.touched.feCPassword && formik.errors.feCPassword ? (
                  <span style={{ color: 'red' }}>
                    {formik.errors.feCPassword}
                  </span>
                ) : (
                  ''
                )}
              </FormGroup>

              <FormGroup>
                <FormCheckbox name="agree" {...formik.getFieldProps('agree')}>
                  I agreed with the Terms & condition
                </FormCheckbox>
                {formik.touched.agree && formik.errors.agree ? (
                  <span style={{ color: 'red' }}>{formik.errors.agree}</span>
                ) : (
                  ''
                )}
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
