import React, { memo, useState } from 'react'
import { Row } from 'shards-react'
const CustomFileUpload = memo(() => {
  const [picture, setPicture] = useState('')

  const onChangePicture = e => {
    setPicture(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <div className="custom-file mb-3">
      <input
        type="file"
        className="custom-file-input"
        id="customFile2"
        onChange={onChangePicture}
      />
      <label className="custom-file-label" htmlFor="customFile2">
        {picture ? picture : "Choose file..."}
      </label>
      <Row>
        {picture && <img className="mx-auto my-2" src={picture} alt='' style={{height:`200px`}}></img>}
      </Row>
    </div>
  )
})

export default CustomFileUpload
