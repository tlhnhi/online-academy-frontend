import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from '../../../components/PageTitle'
import UserDetails from "./components/UserDetail";

const Profile = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="User Profile" subtitle="" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row className="my-4">
      <Col className="mx-auto" lg="8">
        <UserDetails />
      </Col>
    </Row>
  </Container>
);

export default Profile;