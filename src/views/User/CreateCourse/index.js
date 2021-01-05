import React, { memo } from 'react'
import {
  Container,
  Card,
  CardBody,
  Form,
  FormInput,
  FormSelect,
  Row,
  InputGroupText,
  InputGroupAddon,
  InputGroup,
  CardFooter,
  ListGroupItem,
  Button
} from 'shards-react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import PageTitle from '../../../components/PageTitle'
import CustomFileUpload from "./components/CustomFileUpload";
import DynamicField from './components/DynamicField'

const CreateCourse = memo(() => {
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
      <Card
        small
        className="m-auto"
        style={{ width: `1200px`, height: `750px` }}
      >
        <CardBody>
          <Form className="">
            <FormInput
              size="lg"
              maxLength="60"
              className="mb-3"
              placeholder="Your Course Title"
            />
            <CustomFileUpload />
            <FormSelect className="mb-3">
              <option value="">Choose a category</option>
              <option value="">Web Development</option>
              <option value="">Mobile App Development</option>
              <option value="">I don't know yet</option>
            </FormSelect>
            <FormInput
              maxLength="250"
              className="mb-3"
              placeholder="Your brief description about this course"
            />
            <InputGroup className="mb-2">
              <InputGroupAddon type="prepend">
                <InputGroupText>$</InputGroupText>
              </InputGroupAddon>
              <FormInput placeholder="Price" />
            </InputGroup>
            <label>Content</label>
            <DynamicField />
            <label>Description</label>
            <ReactQuill className="mb-1" style={{ height: `230px` }} />
          </Form>
        </CardBody>
        <CardFooter>
        <ListGroupItem className="d-flex px-3 border-0">
          <Button outline theme="danger">
          <i className="fa">&#xf00d;</i> Discard
          </Button>
          <Button outline theme="success" className="ml-auto">
          <i className='fas'>&#xf00c;</i> Finish
          </Button>
        </ListGroupItem>
        </CardFooter>
      </Card>
    </Container>
  )
})

export default CreateCourse
