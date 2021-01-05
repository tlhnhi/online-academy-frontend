import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { Button, ListGroupItem } from 'shards-react'

const GroupButton = memo(() => {
  return (
    <div className="">
      <ListGroupItem className="d-flex border-0" style={{ height: `60px` }}>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <Button outline className="mx-1" style={{ width: `90px` }}>
            Log In
          </Button>
        </Link>
        <Link to="/register" style={{ textDecoration: 'none' }}>
          <Button className="mx-1" style={{ width: `90px` }}>
            Register
          </Button>
        </Link>
      </ListGroupItem>
    </div>
  )
})

export default GroupButton
