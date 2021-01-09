import React, { useState } from 'react'
// import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'
import { FormTextarea, Button } from 'shards-react'
import { useSelector } from 'react-redux'

function StarsRating() {
  const [starValue, setStarValue] = useState(0)

  const currentUser = useSelector(x => x.currentUser)

  if (!currentUser?._id) return <></>

  return (
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
      <FormTextarea placeholder="Your feedback" style={{ height: `100px` }} />
      <Button size="sm" className="d-block my-2" pill>
        <i className="material-icons">&#xe163;&nbsp;</i>
        Send
      </Button>
    </div>
  )
}

export default StarsRating
