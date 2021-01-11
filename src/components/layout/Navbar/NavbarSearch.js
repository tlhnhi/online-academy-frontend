import { useFormik } from 'formik'
import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Form,
  FormInput,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'shards-react'

const NavbarSearch = memo(() => {
  const { push } = useHistory()

  const formik = useFormik({
    initialValues: { q: '' },
    onSubmit({ q }) {
      push(`/search?q=${q}`)
    }
  })

  return (
    <Form
      className="main-navbar__search w-100 d-none d-md-flex d-lg-flex"
      onSubmit={formik.handleSubmit}
    >
      <InputGroup seamless className="ml-3">
        <InputGroupAddon type="prepend">
          <InputGroupText>
            <i className="material-icons">search</i>
          </InputGroupText>
        </InputGroupAddon>
        <FormInput
          id="q"
          name="q"
          className="navbar-search"
          placeholder="Search for something..."
          {...formik.getFieldProps('q')}
        />
      </InputGroup>
    </Form>
  )
})

export default NavbarSearch
