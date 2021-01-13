import Box from '@material-ui/core/Box'
import Rating from '@material-ui/lab/Rating'
import { createCourseRating } from 'api/course'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Button, Form, FormTextarea } from 'shards-react'

function StarsRating({ courseId }) {
  const [starValue, setStarValue] = useState(0)

  const formik = useFormik({
    initialValues: { comment: '' },
    async onSubmit({ comment }) {
      const data = await createCourseRating(courseId, comment, starValue)

      if (data) {
        alert(data)
        window.location.reload()
      }
    }
  })

  return (
    localStorage.getItem('token') && (
      <div className="mt-3 mx-auto" style={{ width: `800px` }}>
        <h4 className="card-title text-fiord-blue">Rate This Course</h4>
        <Box borderColor="transparent">
          <Rating
            name="rating"
            precision={0.5}
            emptyIcon={
              <i className="material-icons" style={{ fontSize: `24px` }}>
                &#xe83a;
              </i>
            }
            value={starValue}
            onChange={(event, newValue) => {
              setStarValue(newValue)
            }}
          />
        </Box>
        <Form onSubmit={formik.handleSubmit}>
          <FormTextarea
            name="comment"
            placeholder="Your feedback"
            style={{ height: `100px` }}
            {...formik.getFieldProps('comment')}
          />

          <Button size="sm" className="d-block my-2" pill type="submit">
            <i className="material-icons">&#xe163;&nbsp;</i>
            Send
          </Button>
        </Form>
      </div>
    )
  )
}

export default StarsRating
