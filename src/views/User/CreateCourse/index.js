import { createCourse, updateCourse } from 'api/course'
import { useFormik } from 'formik'
import queryString from 'query-string'
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
  Row,
  Col
} from 'shards-react'
import PageTitle from '../../../components/PageTitle'
// import CustomFileUpload from './components/CustomFileUpload'
import DynamicField from './components/DynamicField'

const CreateCourse = memo(() => {
  const { id } = queryString.parse(window.location.search)

  const currentUser = useSelector(x => x.currentUser)
  const categories = useSelector(x => x.category)
  const courses = useSelector(x => x.course)

  const course = courses.find(x => x._id === id)

  const quillRef = useRef()

  // const toBase64 = file =>
  //   new Promise((resolve, reject) => {
  //     const reader = new FileReader()
  //     reader.readAsDataURL(file)
  //     reader.onload = () => resolve(reader.result)
  //     reader.onerror = error => reject(error)
  //   })

  const formik = useFormik({
    initialValues: {
      title: !!course ? course.title : '',
      avatar: !!course ? course.avatar : '',
      category: !!course ? course.category._id : '',
      describe: !!course ? course.describe : '',
      price: !!course ? course.price : '',
      detail: !!course ? course.detail : '',
      content: !!course ? course.content : []
    },
    async onSubmit(values) {
      const {
        title,
        avatar,
        category,
        describe,
        price,
        discount,
        detail,
        content
      } = values

      const obj = {
        // avatar: await toBase64(avatar),
        avatar,
        title,
        describe,
        detail,
        price: parseFloat(price),
        discount: parseFloat(+discount / 100).toFixed(2),
        category_id: category,
        content
      }

      const data = !id ? await createCourse(obj) : await updateCourse(obj)

      if (data) {
        alert(`Your course has been ${!id ? 'created' : 'updated'}`)
      }
    }
  })

  if (!localStorage.getItem('token') || !currentUser?.isLecturer) {
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
              maxLength="200"
              className="mb-3"
              placeholder="Your Course Title"
              {...formik.getFieldProps('title')}
            />
            <FormInput
              name="avatar"
              maxLength="200"
              className="mb-3"
              placeholder="Your Course Avatar"
              {...formik.getFieldProps('avatar')}
            />
            {/* <CustomFileUpload formik={formik} /> */}
            <FormSelect
              name="category"
              {...formik.getFieldProps('category')}
              className="mb-3"
            >
              <option value="">Choose a category</option>
              {categories.map(cat =>
                cat.childs.map(c => (
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                ))
              )}
            </FormSelect>
            <FormInput
              name="describe"
              maxLength="250"
              className="mb-3"
              placeholder="Your brief description about this course"
              {...formik.getFieldProps('describe')}
            />
            <Row form>
              <Col md="9" className="form-group">
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
              </Col>
              <Col md="1" className="mt-2">
                <label>Discount (%)</label>
              </Col>
              <Col md="2" className="form-group">
                <InputGroup className="mb-2">
                  <InputGroupAddon type="prepend" style={{ cursor: 'pointer' }}>
                    <InputGroupText>-</InputGroupText>
                  </InputGroupAddon>
                  <FormInput
                    name="discount"
                    placeholder="0%"
                    {...formik.getFieldProps('discount')}
                  />
                  <InputGroupAddon type="append" style={{ cursor: 'pointer' }}>
                    <InputGroupText>+</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
            </Row>
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
