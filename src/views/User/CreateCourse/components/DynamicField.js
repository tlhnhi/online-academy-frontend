import React, { memo, useState } from 'react'
import {
  InputGroupText,
  InputGroupAddon,
  InputGroup,
  FormInput,
  FormCheckbox,
  Row,
  Col,
  Button,
  ButtonGroup
} from 'shards-react'

const DynamicField = memo(() => {
  const [fields, setFields] = useState([{ value: null }])

  function handleChange(i, event) {
    const values = [...fields]
    values[i].value = event.target.value
    setFields(values)
  }

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
              <Col md="6" className="form-group">
                <InputGroup>
                  <InputGroupAddon type="prepend">
                    <InputGroupText>#{idx + 1}</InputGroupText>
                  </InputGroupAddon>
                  <FormInput
                    type="text"
                    placeholder="Section"
                    onChange={e => handleChange(idx, e)}
                  />
                </InputGroup>
              </Col>
              <Col md="4" className="form-group">
                <FormInput
                  type="text"
                  placeholder="Lecture's URL"
                  onChange={e => handleChange(idx, e)}
                />
              </Col>
              <Col md="1" className="d-flex flex-column justify-content-center" style={{height:`45px`}}>
                <FormCheckbox className="">Preview</FormCheckbox>
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
