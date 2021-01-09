// import Box from '@material-ui/core/Box'
import Pagination from '@material-ui/lab/Pagination'
import catTheme from 'constants/category-theme'
import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { Badge, Container } from 'shards-react'
import PageTitle from '../../../components/PageTitle'
import arrToObj from 'utils/arr-to-obj'

const UsersCourse = memo(() => {
  const currentUser = useSelector(state => state.currentUser)
  const courses = useSelector(state => state.course)
  const categories = useSelector(state => state.category)

  const coursesInfo = currentUser?.isLecturer
    ? courses.filter(x => x.lecturer_id === currentUser._id)
    : courses.filter(x => currentUser.enrolled.includes(x._id))

  const catDict = {}

  if (categories.length > 0) {
    for (const cat of categories) {
      if (!cat.parent) continue
      catDict[cat._id] = cat.name
    }
  }

  const [currentIndex] = useState(-1)
  const [page, setPage] = useState(1)
  const [pageSize] = useState(5)
  const indexOfLast = page * pageSize
  const indexOfFirst = indexOfLast - pageSize
  const current = coursesInfo.slice(indexOfFirst, indexOfLast)

  const users = useSelector(x => x.user)
  const lecturers = users.filter(x => x.isLecturer)
  const lecsObj = arrToObj(lecturers)

  const handlePageChange = (event, value) => {
    setPage(value)
  }

  const countEnrolledByCourseId = id => {
    let c = 0
    if (users.length > 0) {
      for (const user of users) {
        if (user.enrolled.includes(id)) ++c
      }
    }
    return c
  }

  if (!currentUser?._id) {
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
                      href={`/profile?id=${lecsObj[item.lecturer_id]?._id}`}
                    >
                      {lecsObj[item.lecturer_id]?.name}
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
                    {item.rating}&nbsp;
                    {[
                      ...Array(
                        item.rating - Math.floor(item.rating) < 0.79
                          ? Math.floor(item.rating)
                          : Math.floor(item.rating) + 1
                      )
                    ].map((_, idx) => (
                      <i className="material-icons" key={idx}>
                        &#xe838;
                      </i>
                    ))}
                    {[
                      ...Array(
                        ~~(
                          item.rating - Math.floor(item.rating) < 0.79 &&
                          item.rating - Math.floor(item.rating) > 0.21
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
                          (item.rating - Math.floor(item.rating) < 0.79
                            ? Math.floor(item.rating)
                            : Math.floor(item.rating) + 1) -
                          ~~(
                            item.rating - Math.floor(item.rating) < 0.79 &&
                            item.rating - Math.floor(item.rating) > 0.21
                          )
                      )
                    ].map((_, idx) => (
                      <i className="material-icons" key={idx}>
                        &#xe83a;
                      </i>
                    ))}
                  </span>
                  <span className="text-muted">{item.num_rating} ratings</span>
                </td>
                <td className="text-center" style={{ width: `150px` }}>
                  {countEnrolledByCourseId(item._id)}
                  <i className="material-icons">&#xe7fb;</i>
                </td>
                <td className="text-center" style={{ width: `150px` }}>
                  <Badge
                    pill
                    className={`card-post__category bg-${
                      catTheme[catDict[item.category_id]]
                    }`}
                    href={`/categories/${item.category_id}`}
                  >
                    {catDict[item.category_id]}
                  </Badge>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* <Box mx = {85}> */}
      <Pagination
        count={Math.ceil(coursesInfo.length / pageSize)}
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
