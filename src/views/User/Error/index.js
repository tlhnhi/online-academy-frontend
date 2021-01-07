import React from "react";
import { Container, Button } from "shards-react";

const Error = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2><i class="material-icons">&#xe626;</i></h2>
        <h3>Something went wrong!</h3>
        <p>You cannot access this page.</p>
        <Button href="/home" pill>&larr; Go Back</Button>
      </div>
    </div>
  </Container>
);

export default Error;