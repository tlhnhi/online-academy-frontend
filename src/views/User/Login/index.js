import React from 'react'
import {
  Container,
  Card,
  Row,
  Form,
  FormGroup,
  FormInput,
  FormCheckbox,
  Button,
  CardBody,
  CardFooter
} from 'shards-react'

const Login = () => (
  <Container fluid className="main-content-container">
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
        <Form>
          {' '}
          {/* Email */}
          <FormGroup>
            <label htmlFor="feEmail">Email</label>
            <FormInput
              type="email"
              id="feEmail"
              placeholder="Email Address"
              value=""
              onChange={() => {}}
              autoComplete="email"
            />
          </FormGroup>
          {/* Password */}
          <FormGroup>
            <label htmlFor="fePassword">Password</label>
            <FormInput
              type="password"
              id="fePassword"
              placeholder="Password"
              value=""
              onChange={() => {}}
              autoComplete="current-password"
            />
          </FormGroup>
        </Form>
        <FormCheckbox className="mb-3" value="">
          Remember Me
        </FormCheckbox>
        <Row form>
          <Button className="d-block mx-auto" pill>
            Log In
          </Button>{' '}
        </Row>
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
    <div className="d-flex justify-content-between text-muted mx-auto mt-2" style={{ width: `350px` }}>
        <label><a href="/forgot-password" className="text-muted">Forgot Password</a></label>
        <label><a href="/register" className="text-muted">Create Your Account</a></label>
    </div>
  </Container>
)

export default Login
