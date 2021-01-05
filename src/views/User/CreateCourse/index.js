import React, { memo } from 'react'
import {
  Container,
  Card,
  CardBody,
  Form,
  FormInput,
  FormSelect, 
  Row
} from 'shards-react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import PageTitle from '../../../components/PageTitle'

const CreateCourse = memo(() => {
  return (
    <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
      <PageTitle title="Create Your Course" subtitle="" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
      <Card
        small
        className="m-auto"
        style={{ width: `1200px`, height: `500px` }}
      >
        <CardBody>
          <Form className="">
            <FormInput
              size="lg"
              className="mb-3"
              placeholder="Your Course Title"
            />
            <FormSelect
            //   size="lg"
              className="mb-3"
              placeholder="Your Course Title"
            >
              <option value="">Choose a category</option>
              <option value="">Web Development</option>
              <option value="">Mobile App Development</option>
              <option value="">I don't know yet</option>
            </FormSelect>
            <Editor
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
            />
          </Form>
        </CardBody>
      </Card>
    </Container>
  )
})

export default CreateCourse
