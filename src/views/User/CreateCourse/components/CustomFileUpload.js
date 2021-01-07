import React, { memo, useState } from 'react'
import { Row } from 'shards-react'
const CustomFileUpload = memo(({ formik }) => {
  const [picture, setPicture] = useState('')

  const onChangePicture = async e => {
    setPicture(URL.createObjectURL(e.target.files[0]))
    formik.setFieldValue('avatar', e.currentTarget.files[0])
  }

  return (
    <div className="custom-file mb-3">
      <input
        type="file"
        className="custom-file-input"
        id="avatar"
        name="avatar"
        onChange={onChangePicture}
      />
      <label className="custom-file-label" htmlFor="avatar">
        {picture ? picture : 'Choose file...'}
      </label>
      <Row>
        {picture && (
          <img
            className="mx-auto my-2"
            src={picture}
            alt=""
            style={{ height: `200px` }}
          ></img>
        )}
      </Row>
    </div>
  )
})

export default CustomFileUpload
