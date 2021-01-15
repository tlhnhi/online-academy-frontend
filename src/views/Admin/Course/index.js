// import Box from '@material-ui/core/Box'
import Pagination from '@material-ui/lab/Pagination'
import { updateCourseByAdmin } from 'api/course'
import React, { memo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Badge, Container, Row, FormSelect } from 'shards-react'
import { removeCourse } from 'store/app/course'
import PageTitle from '../../../components/PageTitle'

const UsersCourse = memo(() => {
  const dispatch = useDispatch()
  const courses = useSelector(x => x.course)

  const [currentIndex] = useState(-1)
  const [page, setPage] = useState(1)
  const [pageSize] = useState(5)
  const indexOfLast = page * pageSize
  const indexOfFirst = indexOfLast - pageSize
  const current = courses.slice(indexOfFirst, indexOfLast)

  const handlePageChange = (event, value) => {
    setPage(value)
  }

  const handleBlockCourse = useCallback(async id => {
    await updateCourseByAdmin({ _id: id, isBlocked: true })
    alert('Successfully blocked this course')
  }, [])

  const handleRemoveCourse = useCallback(id => dispatch(removeCourse(id)), [
    dispatch
  ])

  return (
    <Container fluid className="main-content-container px-3">
      <div className="page-header py-4">
        <PageTitle
          sm="12"
          title="Courses Mangement"
          subtitle=""
          className="text-sm-left"
        />
      </div>
      <table className="table">
        <tbody style={{ fontSize: `16px` }}>
          {current &&
            current.map((item, idx) => (
              <tr key={idx} className={idx === currentIndex ? 'active' : ''}>
                <td>
                  <img
                    className="rounded"
                    src={item.avatar}
                    alt=""
                    width="100"
                    style={{
                      width: `200px`,
                      height: `115px`,
                      objectFit: `cover`
                    }}
                  />
                </td>
                <td style={{ width: `1200px` }}>
                  <Link
                    className="text-fiord-blue font-weight-bold"
                    to={`/courses/${item._id}`}
                    style={{ fontSize: `18px` }}
                  >
                    {item.title}
                  </Link>
                  <br />
                  <span className="">{item.describe}</span>
                  <br />
                  <span className="">
                    Created by:&nbsp;
                    <Link
                      className="text-fiord-blue"
                      to={`/profile?id=${item.lecturer._id}`}
                    >
                      {item.lecturer.name}
                    </Link>
                  </span>
                  <br />
                  <span className="text-muted">
                    Last updated:{' '}
                    {new Date(item.updatedAt).toLocaleDateString('vi-VN')}
                  </span>
                </td>
                <td
                  className="text-center text-warning"
                  style={{ width: `180px` }}
                >
                  <span className="card-title text-warning">
                    {item.star.toFixed(1)}&nbsp;
                    {[
                      ...Array(
                        item.star - Math.floor(item.star) < 0.79
                          ? Math.floor(item.star)
                          : Math.floor(item.star) + 1
                      )
                    ].map((_, idx) => (
                      <i className="material-icons" key={idx}>
                        &#xe838;
                      </i>
                    ))}
                    {[
                      ...Array(
                        ~~(
                          item.star - Math.floor(item.star) < 0.79 &&
                          item.star - Math.floor(item.star) > 0.21
                        )
                      )
                    ].map((_, idx) => (
                      <i className="material-icons" key={idx}>
                        &#xe839;
                      </i>
                    ))}
                    {[
                      ...Array(
                        5 -
                          (item.star - Math.floor(item.star) < 0.79
                            ? Math.floor(item.star)
                            : Math.floor(item.star) + 1) -
                          ~~(
                            item.star - Math.floor(item.star) < 0.79 &&
                            item.star - Math.floor(item.star) > 0.21
                          )
                      )
                    ].map((_, idx) => (
                      <i className="material-icons" key={idx}>
                        &#xe83a;
                      </i>
                    ))}
                  </span>
                  <span className="text-muted d-block">
                    {item.rating.length} ratings
                  </span>
                </td>
                <td className="text-center" style={{ width: `150px` }}>
                  {item.enrollments}&nbsp;
                  <i className="material-icons">&#xe7fb;</i>
                </td>
                <td className="text-center" style={{ width: `150px` }}>
                  <Badge
                    pill
                    className={`card-post__category bg-${item.category.name}`}
                    href={`/categories/${item.category._id}`}
                  >
                    {item.category.name}
                  </Badge>
                </td>
                <td
                  className="text-right text-danger"
                  style={{ width: `80px` }}
                >
                  <i
                    className="fa fa-ban"
                    aria-hidden="true"
                    onClick={() => handleBlockCourse(item._id)}
                    style={{ cursor: 'pointer' }}
                  ></i>
                </td>
                <td
                  className="text-center text-danger"
                  style={{ width: `50px` }}
                >
                  <i
                    className="fas"
                    onClick={() => handleRemoveCourse(item._id)}
                    style={{ cursor: 'pointer' }}
                  >
                    &#xf2ed;
                  </i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Row>
        <Pagination
          count={Math.ceil(courses.length / pageSize)}
          page={page}
          showFirstButton
          showLastButton
          onChange={handlePageChange}
          style={{ justifyContent: 'center' }}
        />
        <FormSelect
          className="ml-2"
          style={{ width: `100px` }}
          // onChange={e => setSort(e.target.value)}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </FormSelect>
        <FormSelect
          className="ml-2"
          style={{ width: `100px` }}
          // onChange={e => setSort(e.target.value)}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </FormSelect>
      </Row>
    </Container>
  )
})

export default UsersCourse
