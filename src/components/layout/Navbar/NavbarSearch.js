import React, { memo } from 'react'
import {
  Form,
  FormInput,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'shards-react'

const NavbarSearch = memo(() => (
  <Form className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
    <InputGroup seamless className="ml-3">
      <InputGroupAddon type="prepend">
        <InputGroupText>
          <i className="material-icons">search</i>
        </InputGroupText>
      </InputGroupAddon>
      <FormInput
        className="navbar-search"
        placeholder="Search for something..."
      />
    </InputGroup>
  </Form>
))

export default NavbarSearch
