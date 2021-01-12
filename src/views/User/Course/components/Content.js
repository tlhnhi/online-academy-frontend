import React, { memo } from 'react'
import CollapsibleTable from './CollapsibleTable'

const Content = memo(({ course, user }) => {
  return (
    <div className="mt-3 mx-auto" style={{ width: `800px` }}>
      <h4 className="card-title text-fiord-blue">Course Content</h4>
      <CollapsibleTable course={course} currentUser={user} />
    </div>
  )
})
export default Content
