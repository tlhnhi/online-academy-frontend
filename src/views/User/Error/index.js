import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from 'shards-react'

const Error = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2>
          <i className="material-icons">&#xe626;</i>
        </h2>
        <h3>Something went wrong!</h3>
        <p>You cannot access this page.</p>
        <Link to="/">
          <Button pill>&larr; Go Back</Button>
        </Link>
      </div>
    </div>
  </Container>
)

export default Error
