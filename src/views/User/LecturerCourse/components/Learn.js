import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'

const Learn = memo(() => {
  const content = [
    'Build powerful, fast, user-friendly and reactive web apps',
    'Apply for high-paid jobs or work as a freelancer in one the most-demanded sectors you can find in web dev right now',
    'Provide amazing user experiences by leveraging the power of JavaScript with ease',
    'Learn React Hooks & Class-based Components'
  ]
  const [detail] = useState(content)
  return (
    <div className="mt-3 mx-auto" style={{ width: `800px` }}>
      <h4 className="card-title text-fiord-blue">What You'll Learn</h4>
      {detail.map((item, idx) => (
        <li style={{ fontSize: `16px` }} key={idx}>
          {item}
        </li>
      ))}
    </div>
  )
})

Learn.propTypes = {
  content : PropTypes.array
}

export default Learn
