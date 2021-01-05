import React, { memo } from 'react'
import {
  Container,
  Card,
  Row,
  Form,
  FormGroup,
  Button,
  CardBody,
  Col
} from 'shards-react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const ChangePassword = memo(() => {
  function equalTo(ref, msg) {
    return this.test({
      name: 'equalTo',
      exclusive: false,
      message: msg,
      params: {
        reference: ref.path
      },
      test: function(value) {
        return value !== this.resolve(ref) 
      }
    })
  };
  
  Yup.addMethod(Yup.string, 'equalTo', equalTo);
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(32, 'Password must be at most 32 characters')
      .required('Password is required'),
    newpassword: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(32, 'Password must be at most 32 characters')
      .equalTo(Yup.ref('password'), 'This is your old passsword')
      .required('New password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newpassword'), null], 'Passwords must match')
      .required('Confirm Password is required')
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
                <label>New Password</label>
                <input
                  name="newpassword"
                  type="password"
                  placeholder=" New Password"
                  ref={register}
                  className={`form-control ${
                    errors.newpassword ? 'is-invalid' : ''
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.newpassword?.message}
                </div>
              </FormGroup>
              <FormGroup>
                <label>Confirm New Password</label>
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

              <Button className="d-block mx-auto" pill type="submit">
                Change Password
              </Button>
              </Form>
          </CardBody>
        </Card>
      </Col>
      <Col></Col>
    </Container>
  )
})

export default ChangePassword
