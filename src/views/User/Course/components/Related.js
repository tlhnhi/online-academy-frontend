import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axiosClient from 'api/axiosClient'

const Related = memo(() => {
  const { id } = useParams()

  const courses = useSelector(x => x.course)
  const users = useSelector(x => x.user).filter(x => x.enrolled.includes(id))

  const course = courses.find(x => x._id === id)
  const related = courses.filter(
    x => x.category_id === course.category_id && x._id !== id
  )

  const [isLike, setIsLike] = useState(false)

  const handleAddToWatchList = useCallback(async () => {
    if (!isLike) {
      const { success, message } = await axiosClient({
        url: '/course/favorite',
        method: 'post',
        data: { course: id }
      })

      if (!success) return alert(message)
      setIsLike(true)
    } else {
      const { success, message } = await axiosClient({
        url: `/course/favorite/${id}`,
        method: 'delete'
      })

      if (!success) return alert(message)
      setIsLike(false)
    }
  }, [isLike, id])

  return (
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
                  style={{ width: `70px`, height: `70px`, objectFit: `cover` }}
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
                {item.rating}
                <i className="material-icons">&#xe838;</i>
              </td>
              <td className="text-center" style={{ width: `100px` }}>
                {users?.length}
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
              <td className="text-center text-danger">
                {/* <i className="far">&#xf004;</i> */}
                <i
                  className={isLike ? 'fas' : 'far'}
                  onClick={handleAddToWatchList}
                  style={{ cursor: 'pointer' }}
                >
                  &#xf004;
                </i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
})

Related.propTypes = {
  relatedCourses: PropTypes.array
}

Related.defaultProps = {
  relatedCourses: [
    {
      avatar: require('../../../../images/related/micro.jpg').default,
      name: "Microfrontends with React: A Complete Developer's Guide",
      date: '11/2020',
      rating: '4.8',
      students: '6,297',
      price: '129.99',
      discount: '9.99',
      favorite: false
    },
    {
      avatar: require('../../../../images/related/complete.jpg').default,
      name: 'Complete React Developer in 2021 (Redux, Hooks, GraphQL)',
      date: '12/2020',
      rating: '4.7',
      students: '56,788',
      price: '129.99',
      discount: '',
      favorite: false
    },
    {
      avatar: require('../../../../images/related/modern.jpg').default,
      name: 'Modern React with Redux [2020 Update]',
      date: '12/2020',
      rating: '4.7',
      students: '217,223',
      price: '129.99',
      discount: '9.99',
      favorite: false
    },
    {
      avatar: require('../../../../images/related/advanced.jpg').default,
      name: 'Advanced React and Redux',
      date: '12/2020',
      rating: '4.6',
      students: '68,713',
      price: '129.99',
      discount: '9.99',
      favorite: false
    },
    {
      avatar: require('../../../../images/related/graphql.jpg').default,
      name: 'GraphQL with React: The Complete Developers Guide',
      date: '12/2020',
      rating: '4.6',
      students: '42,228',
      price: '129.99',
      discount: '9.99',
      favorite: false
    }
  ]
}

export default Related
