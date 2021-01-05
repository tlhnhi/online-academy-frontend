import React, { memo }from 'react'
import {
  Container,
  Card,
  Row,
  Form,
  FormGroup,
  FormInput,
  Button,
  CardBody,
  Col
} from 'shards-react'

const ChangePassword = memo(() => (
  <Container fluid className="main-content-container d-flex flex-column justify-content-center">
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
        <Form>
          <FormGroup>
            <label htmlFor="fePassword">Password</label>
            <FormInput
              type="password"
              id="fePassword"
              placeholder="Password"
              onChange={() => {}}
              autoComplete="current-password"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="fePassword">New Password</label>
            <FormInput
              type="password"
              id="fePassword"
              placeholder="New Password"
              onChange={() => {}}
              autoComplete="current-password"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="fePassword">Confirm New Password</label>
            <FormInput
              type="password"
              id="fePassword"
              placeholder="Confirm Password"
              onChange={() => {}}
              autoComplete="current-password"
            />
          </FormGroup>
        </Form>

        <Row form>
          <Button className="d-block mx-auto" pill>
            Change Password
          </Button>
        </Row>
      </CardBody>
    </Card>
    </Col>
    <Col></Col>
  </Container>
))

export default ChangePassword
