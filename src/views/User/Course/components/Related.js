import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Related = memo(({ category }) => {
  const { id } = useParams()
  const courses = useSelector(x => x.course)
  const related = courses.filter(
    x => x.category._id === category._id && x._id !== id
  )

  return (
    related.length > 0 && (
      <div className="mt-3 mx-auto" style={{ width: `800px` }}>
        <h4 className="card-title text-fiord-blue">Related Courses</h4>
        <table className="table">
          <tbody style={{ fontSize: `16px` }}>
            {related.map((item, idx) => (
              <tr key={idx}>
                <td>
                  <img
                    className="rounded"
                    src={item.avatar}
                    alt=""
                    width="100"
                    style={{
                      width: `70px`,
                      height: `70px`,
                      objectFit: `cover`
                    }}
                  />
                </td>
                <td>
                  <a
                    className="text-fiord-blue font-weight-bold"
                    href={`/courses/${item._id}`}
                  >
                    {item.title}
                  </a>
                  <br />
                  <span className="text-muted">
                    Last updated:{' '}
                    {new Date(item.updatedAt).toLocaleDateString('vi-VN')}
                  </span>
                </td>
                <td
                  className="text-center text-warning"
                  style={{ width: `70px` }}
                >
                  {item.star.toFixed(1)}
                  <i className="material-icons">&#xe838;</i>
                </td>
                <td className="text-center" style={{ width: `100px` }}>
                  {item.enrollments}&nbsp;
                  <i className="material-icons">&#xe7fb;</i>
                </td>
                <td className="text-center">
                  {item.discount ? item.discount : item.price}$
                  <p
                    className="text-muted"
                    style={{
                      fontSize: `12px`,
                      textDecorationLine: 'line-through',
                      textDecorationStyle: 'solid'
                    }}
                  >
                    {item.discount ? item.price + '$' : ''}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  )
})

export default Related
