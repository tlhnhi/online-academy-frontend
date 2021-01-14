import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Button,
  Form,
  FormInput,
  Modal,
  ModalBody,
  ModalHeader
} from 'shards-react'
import { addCategory } from 'store/app/category'

const Add = ({ id }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  const formik = useFormik({
    initialValues: { name: '' },
    onSubmit({ name }) {
      dispatch(addCategory(name, id))
    }
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <i
        className="fas"
        onClick={() => setOpen(!open)}
        style={{ cursor: 'pointer' }}
      >
        &#xf067;
      </i>
      <Modal open={open} toggle={() => setOpen(!open)} center={false}>
        <ModalHeader>Add New Category</ModalHeader>
        <ModalBody>
          <FormInput id="name" name="name" {...formik.getFieldProps('name')} />
          <Button className="mt-2" type="submit">
            OK
          </Button>
        </ModalBody>
      </Modal>
    </Form>
  )
}

export default Add
