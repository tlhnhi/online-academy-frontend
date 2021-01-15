// import Box from '@material-ui/core/Box'
import Pagination from '@material-ui/lab/Pagination'
import { fetchEnrolledCourses, fetchUploadedCourses } from 'api/course'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Badge, Container } from 'shards-react'
import { removeCourseLecturer } from 'store/app/course'
import PageTitle from '../../../components/PageTitle'

const UsersCourse = memo(() => {
  const dispatch = useDispatch()
  const { push } = useHistory()

  const currentUser = useSelector(x => x.currentUser)

  const [myCourses, setMyCourses] = useState([])

  const [currentIndex] = useState(-1)
  const [page, setPage] = useState(1)
  const [pageSize] = useState(5)
  const indexOfLast = page * pageSize
  const indexOfFirst = indexOfLast - pageSize
  const current = myCourses.slice(indexOfFirst, indexOfLast)

  const handlePageChange = (event, value) => {
    setPage(value)
  }

  const handleRemoveCourse = useCallback(
    id => dispatch(removeCourseLecturer(id)),
    [dispatch]
  )

  useEffect(() => {
    if (myCourses.length > 0) return

    const getMyCourses = async () => {
      if (!currentUser?._id) return

      const data = currentUser.isLecturer
        ? await fetchUploadedCourses()
        : await fetchEnrolledCourses()

      if (data.length > 0) setMyCourses(data)
    }

    getMyCourses()
  }, [myCourses, currentUser])

  console.log('MyCourse', { myCourses })

  if (!localStorage.getItem('token')) {
    return <Redirect to="/error" />
  }

  return (
    <Container fluid className="main-content-container px-3">
      <div className="page-header py-4">
        <PageTitle
          sm="12"
          title="My Courses"
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
                    to={
                      currentUser?.isLecturer
                        ? `/lecturer-courses/${item._id}`
                        : `/courses/${item._id}`
                    }
                    style={{ fontSize: `18px` }}
                  >
                    {item.title}
                  </Link>
                  <br />
                  <span className="">{item.describe}</span>
                  <br />
                  <span className="">
                    Created by:&nbsp;
                    <a
                      className="text-fiord-blue"
                      href={`/profile?id=${item.lecturer._id}`}
                    >
                      {item.lecturer.name}
                    </a>
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
                    className="my-auto"
                    style={{ fontSize: `16px` }}
                    outline
                    theme={item.isDone ? 'success' : 'secondary'}
                    // onClick={handleSetCourseDone}
                  >
                    <i className={item.isDone ? 'fas' : 'far'}>
                      &#xf058;&nbsp;
                    </i>
                    {item.isDone ? 'Completed' : 'In progress'}
                  </Badge>
                </td>
                {currentUser?.isLecturer && (
                  <>
                    <td className="text-center" style={{ width: `50px` }}>
                      <i
                        className="fas"
                        onClick={() => push(`/create-course?id=${item._id}`)}
                        style={{ cursor: 'pointer' }}
                      >
                        &#xf044;
                      </i>
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
                  </>
                )}
              </tr>
            ))}
        </tbody>
      </table>
      {/* <Box mx = {85}> */}
      <Pagination
        count={Math.ceil(myCourses.length / pageSize)}
        page={page}
        showFirstButton
        showLastButton
        onChange={handlePageChange}
        style={{ justifyContent: 'center' }}
      />
      {/* </Box> */}
    </Container>
  )
})

export default UsersCourse
