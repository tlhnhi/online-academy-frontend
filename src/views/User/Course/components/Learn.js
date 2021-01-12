import PropTypes from 'prop-types'
import React, { memo } from 'react'
import HtmlParser from 'react-html-parser'

const Learn = memo(({ detail }) => {
  return (
    <div className="mt-3 mx-auto" style={{ width: `800px` }}>
      <h4 className="card-title text-fiord-blue">Description</h4>
      {detail?.map((item, idx) => (
        <li style={{ fontSize: `16px` }} key={idx}>
          {HtmlParser(item)}
        </li>
      ))}
    </div>
  )
})

Learn.propTypes = {
  detail: PropTypes.array
}

export default Learn
