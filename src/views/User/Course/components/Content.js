import React, { memo } from 'react'
// import ReactPlayer from 'react-player'
import CollapsibleTable from './CollapsibleTable'
const Content = memo(() => {
  return (
    <div className="mt-3 mx-auto" style={{ width: `800px` }}>
        <h4 className="card-title text-fiord-blue">Course Content</h4>
        <CollapsibleTable />
      </div>
  )
})
export default Content
