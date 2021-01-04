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

const ChangePassword = () => (
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
          <FormGroup>
            <label htmlFor="fePassword">Password</label>
            <FormInput
              type="password"
              id="fePassword"
              placeholder="New Password"
              value=""
              onChange={() => {}}
              autoComplete="current-password"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="fePassword">Password</label>
            <FormInput
              type="password"
              id="fePassword"
              placeholder="Confirm Password"
              value=""
              onChange={() => {}}
              autoComplete="current-password"
            />
          </FormGroup>
        </Form>

        <Row form>
          <Button className="d-block mx-auto" pill>
            Reset Password
          </Button>
        </Row>
      </CardBody>
    </Card>
  </Container>
)

export default ChangePassword
