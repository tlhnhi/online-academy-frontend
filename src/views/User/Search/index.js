import Pagination from '@material-ui/lab/Pagination'
import { searchCourses } from 'api/course'
import queryString from 'query-string'
import React, { memo, useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Container, FormSelect } from 'shards-react'
import PageTitle from '../../../components/PageTitle'

const Search = memo(() => {
  const { q } = queryString.parse(window.location.search)

  const [courses, setCourses] = useState([])
  const [sort, setSort] = useState('newest')

  const [currentIndex] = useState(-1)
  const [page, setPage] = useState(1)
  const [pageSize] = useState(5)
  const indexOfLast = page * pageSize
  const indexOfFirst = indexOfLast - pageSize
  const current = courses.slice(indexOfFirst, indexOfLast).sort((a, b) => {
    const timeA = new Date(a.updatedAt).getTime()
    const timeB = new Date(b.updatedAt).getTime()

    return sort === 'newest' ? timeB - timeA : timeA - timeB
  })

  const handlePageChange = (event, value) => {
    setPage(value)
  }

  useEffect(() => {
    const getCoursesByKeyword = async () => {
      const kwCourses = await searchCourses(q)
      if (kwCourses?.length > 0) setCourses(kwCourses)
    }

    getCoursesByKeyword()
  }, [courses, q])

  console.log('Search', { q }, { courses })

  return (
    <Container fluid className="main-content-container px-3">
      <div className="page-header py-4">
        <PageTitle
          sm="12"
          title={
            courses.length > 0 &&
            `Found ${courses.length} courses by keyword: ${q}`
          }
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
                  {item.enrollments}
                  <i className="material-icons">&#xe7fb;</i>
                </td>
                <td
                  className="text-center"
                  style={{ width: `150px`, fontSize: `18px` }}
                >
                  {item.discount !== 1
                    ? (item.price * (1 - item.discount)).toFixed(2)
                    : item.price}
                  $
                  <p
                    className="text-muted"
                    style={{
                      fontSize: `14px`,
                      textDecorationLine: 'line-through',
                      textDecorationStyle: 'solid'
                    }}
                  >
                    {item.discount ? item.price + '$' : ''}
                  </p>
                  {item.enrollments > 5 ? (
                    <img
                      src={require('../../../images/avatars/bs.png').default}
                      alt=""
                      width="40"
                      height="40"
                      object-fit="cover"
                    />
                  ) : (
                    ''
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* <Box mx = {85}> */}
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
          className="ml-4"
          style={{ width: `100px` }}
          onChange={e => setSort(e.target.value)}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </FormSelect>
      </Row>
      {/* </Box> */}
    </Container>
  )
})

export default Search
