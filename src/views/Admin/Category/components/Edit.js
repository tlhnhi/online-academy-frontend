import React from 'react'
import { Button, Modal, ModalBody, ModalHeader, FormInput } from 'shards-react'

export default class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { open } = this.state
    return (
      <div>
        <i className="fas" onClick={this.toggle} style={{ cursor: 'pointer' }}>
          &#xf044;
        </i>
        <Modal open={open} toggle={this.toggle} center={false}>
          <ModalHeader>Edit Category</ModalHeader>
          <ModalBody>
            <FormInput />
            <Button className="mt-2">OK</Button>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}
