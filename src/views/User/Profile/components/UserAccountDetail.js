import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  Button
} from "shards-react";

const UserAccountDetails = ({ title }) => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <label className="m-0" style={{fontSize:`18px`}}>{title}</label>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFirstName">First Name</label>
                  <FormInput
                    id="feFirstName"
                    placeholder="First Name"
                    value="Nhi"
                    onChange={() => {}}
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Last Name</label>
                  <FormInput
                    id="feLastName"
                    placeholder="Last Name"
                    value="Tran Le Hong"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">Email</label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    placeholder="Email Address"
                    value="tlhnhitn@gmail.com"
                    onChange={() => {}}
                    autoComplete="email"
                  />
                </Col>
                {/* Password */}
                {/* <Col md="6" className="form-group">
                  <label htmlFor="fePassword">Password</label>
                  <FormInput
                    type="password"
                    id="fePassword"
                    placeholder="Password"
                    value="EX@MPL#P@$$w0RD"
                    onChange={() => {}}
                    autoComplete="current-password"
                  />
                </Col> */}
                 <Col md="6" className="form-group">
                  <label htmlFor="feHeadline">Headline</label>
                  <FormInput
                    id="feHeadline"
                    placeholder="Headline"
                    value="Engineer"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <FormGroup>
                <label htmlFor="feAddress">Address</label>
                <FormInput
                  id="feAddress"
                  placeholder="Address"
                  value="CMT8 St."
                  onChange={() => {}}
                />
              </FormGroup>
              <Button theme="accent">Update Account</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Account Details"
};

export default UserAccountDetails;