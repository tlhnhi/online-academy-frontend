import React, { memo, useState } from 'react'
import {
  Button,
  ButtonGroup,
  Col,
  FormCheckbox,
  FormInput,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from 'shards-react'

const DynamicField = memo(({ formik }) => {
  const [fields, setFields] = useState([{ value: null }])

  function handleAdd() {
    const values = [...fields]
    values.push({ value: null })
    setFields(values)
  }

  function handleRemove(i) {
    const values = [...fields]
    values.splice(i, 1)
    setFields(values)
  }

  return (
    <div>
      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <Row form>
              <Col md="5" className="form-group">
                <InputGroup>
                  <InputGroupAddon type="prepend">
                    <InputGroupText>#{idx + 1}</InputGroupText>
                  </InputGroupAddon>
                  <FormInput
                    type="text"
                    placeholder="Section"
                    name={`content[${idx}].title`}
                    {...formik.getFieldProps(`content[${idx}].title`)}
                  />
                </InputGroup>
              </Col>
              <Col md="4" className="form-group">
                <FormInput
                  type="text"
                  placeholder="Lecture's URL"
                  name={`content[${idx}].video`}
                  {...formik.getFieldProps(`content[${idx}].video`)}
                />
              </Col>
              <Col
                md="1"
                className="d-flex flex-column justify-content-center"
                style={{ height: `45px` }}
              >
                <FormCheckbox
                  name={`content[${idx}].preview`}
                  {...formik.getFieldProps(`content[${idx}].preview`)}
                >
                  Preview
                </FormCheckbox>
              </Col>
              <Col md="1" className="form-group">
                <FormInput
                  type="text"
                  placeholder="Duration"
                  name={`content[${idx}].duration`}
                  {...formik.getFieldProps(`content[${idx}].duration`)}
                />
              </Col>
              <Col md="1">
                <ButtonGroup className="mr-2">
                  <Button onClick={() => handleAdd()}>
                    <i className="fas">&#xf067;</i>
                  </Button>
                  <Button onClick={() => handleRemove(idx)}>
                    <i className="fa">&#xf068;</i>
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </div>
        )
      })}
    </div>
  )
})

export default DynamicField
