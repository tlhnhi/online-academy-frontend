import React from 'react'
import {
  Container,
  Card,
  Row,
  Form,
  FormGroup,
  FormInput,
  Button,
  CardBody,
} from 'shards-react'

const ForgotPassword = () => (
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
        </Form>
        <Row form>
        <label className="mx-auto text-muted mb-3" style={{fontSize:`13px`}}>You will receive an email with your new password</label>
        </Row>
        <Row form>
          <Button className="d-block mx-auto" pill>
            Reset Password
          </Button>
        </Row>
      </CardBody>
    </Card>
    <div className="d-flex justify-content-between text-muted mx-auto mt-2" style={{ width: `350px` }}>
        <label className="mx-auto"><a href="/login" className="text-muted">Log In</a></label>
    </div>
  </Container>
)

export default ForgotPassword
