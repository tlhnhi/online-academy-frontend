import React, { memo } from "react";
import PropTypes from "prop-types";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  Button
} from "shards-react";

const UserAccountDetails = memo(() => (
  <Card small className="mb-2">
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* First Name */}
                <Col md="12" className="form-group">
                  <label htmlFor="feFirstName">Name</label>
                  <FormInput
                    id="feName"
                    placeholder="Nhi Tran Le Hong"
                    onChange={() => {}}
                  />
                </Col>
                {/* Last Name */}
                {/* <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Last Name</label>
                  <FormInput
                    id="feLastName"
                    placeholder="Last Name"
                    value="Tran Le Hong"
                    onChange={() => {}}
                  />
                </Col> */}
              </Row>
              <Row form>
                {/* Email */}
                <Col md="12" className="form-group">
                  <label htmlFor="feEmail">Email</label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    placeholder="tlhnhitn@gmail.com"
                    onChange={() => {}}
                    autoComplete="email"
                  />
                </Col>
                 {/* <Col md="6" className="form-group">
                  <label htmlFor="feHeadline">Headline</label>
                  <FormInput
                    id="feHeadline"
                    placeholder="Headline"
                    value="Engineer"
                    onChange={() => {}}
                  />
                </Col> */}
              </Row>
              {/* <FormGroup>
                <label htmlFor="feAddress">Address</label>
                <FormInput
                  id="feAddress"
                  placeholder="Address"
                  value="CMT8 St."
                  onChange={() => {}}
                />
              </FormGroup> */}
              <Button className="d-block mx-auto" type="submit" theme="accent">Update Account</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
));

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

export default UserAccountDetails;