import axiosClient from 'api/axiosClient'
import { useFormik } from 'formik'
import React, { memo, useRef } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Form,
  FormInput,
  FormSelect,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  ListGroupItem,
  Row
} from 'shards-react'
import PageTitle from '../../../components/PageTitle'
import CustomFileUpload from './components/CustomFileUpload'
import DynamicField from './components/DynamicField'

const CreateCourse = memo(() => {
  const currentUser = useSelector(state => state.currentUser)
  const categories = useSelector(state => state.category)

  const quillRef = useRef()

  const toBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })

  const formik = useFormik({
    initialValues: {
      title: '',
      avatar: '',
      category: '',
      describe: '',
      price: '',
      detail: ''
    },
    async onSubmit(values) {
      const { title, avatar, category, describe, price, detail } = values

      try {
        const { success, message } = await axiosClient({
          url: '/course',
          method: 'post',
          data: {
            avatar: await toBase64(avatar),
            title,
            describe,
            detail,
            price: parseFloat(price),
            discount: 0,
            category_id: category,
            lecturer_id: currentUser._id
          }
        })

        if (!success) return alert(message)

        alert('Your course has been created')
      } catch (error) {
        alert('Cannot create this course')
        console.log(error.message)
      }
    }
  })

  if (!currentUser || !currentUser.isLecturer) {
    return <Redirect to="/error" />
  }

  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          title="Create Your Course"
          subtitle=""
          md="12"
          className="ml-sm-auto mr-sm-auto"
        />
      </Row>
      <Form onSubmit={formik.handleSubmit} className="">
        <Card small className="m-auto" style={{ width: `1200px` }}>
          <CardBody>
            <FormInput
              name="title"
              size="lg"
              maxLength="60"
              className="mb-3"
              placeholder="Your Course Title"
              {...formik.getFieldProps('title')}
            />
            <CustomFileUpload formik={formik} />
            <FormSelect
              name="category"
              {...formik.getFieldProps('category')}
              className="mb-3"
            >
              <option value="">Choose a category</option>
              {categories
                .filter(x => !!x.parent)
                .map(cat => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
            </FormSelect>
            <FormInput
              name="describe"
              maxLength="250"
              className="mb-3"
              placeholder="Your brief description about this course"
              {...formik.getFieldProps('describe')}
            />
            <InputGroup className="mb-2">
              <InputGroupAddon type="prepend">
                <InputGroupText>$</InputGroupText>
              </InputGroupAddon>
              <FormInput
                name="price"
                placeholder="Price"
                {...formik.getFieldProps('price')}
              />
            </InputGroup>
            <label>Content</label>
            <DynamicField formik={formik} />
            <label>Description</label>
            <ReactQuill
              ref={quillRef}
              className="mb-1"
              onChange={e => formik.setFieldValue('detail', e)}
            />
          </CardBody>
          <CardFooter>
            <ListGroupItem className="d-flex px-3 border-0">
              <Button outline theme="danger" onClick={formik.handleReset}>
                <i className="fa">&#xf00d;</i> Discard
              </Button>
              <Button outline theme="success" type="submit" className="ml-auto">
                <i className="fas">&#xf00c;</i> Finish
              </Button>
            </ListGroupItem>
          </CardFooter>
        </Card>
      </Form>
    </Container>
  )
})

export default CreateCourse
