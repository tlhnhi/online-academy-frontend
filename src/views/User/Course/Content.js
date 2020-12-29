import React, { memo, useState } from 'react'

const Content = memo(() => {
  const courseContent = [
    { section: 'Getting Started', preview: 'Preview', length: '40min' },
    { section: 'Refreshing Next Generation JavaScript (Optional)', preview: '', length: '44min' },
    { section: 'Understanding the Base Features and Syntax', preview: '', length: '2hr 21min' },
    { section: 'Working with Lists and Conditionals', preview: '', length: '1hr 1min' },
    { section: 'Styling React Components and Elements', preview: '', length: '1hr 5min' },
    { section: 'Debugging React Apps', preview: '', length: '20min' },
    { section: 'Diving Deeper into Components and React Internals', preview: '', length: '2hr 54min' },
    { section: 'A Real React App: The Burger Builder (Basic Version)', preview: '', length: '4hr' },
  ]
  const [content] = useState(courseContent)
  return (
    <div className="mt-3 mx-auto" style={{ width: `800px` }}>
        <h4 className="card-title text-fiord-blue">Course Content</h4>
        <table className="table">
          <thead className="bg-light">
            <tr>
              <th scope="col" className="border-0">
                #
              </th>
              <th scope="col" className="border-0">
                Section
              </th>
              <th scope="col" className="border-0">
              </th>
              <th scope="col" className="border-0 text-right">
                Length
              </th>
            </tr>
          </thead>
          <tbody style={{ fontSize: `16px` }}>
          {content.map((item, idx) => (
            <tr key={idx}>
                
              <td>{idx+1}</td>
              <td>{item.section}</td>
              <td>{item.preview}</td>
              <td className="text-right">{item.length}</td>
            </tr>))}
          </tbody>
        </table>
      </div>
  )
})
export default Content
