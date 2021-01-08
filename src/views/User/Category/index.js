// import Box from '@material-ui/core/Box'
import Pagination from '@material-ui/lab/Pagination'
import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Container } from 'shards-react'
import PageTitle from '../../../components/PageTitle'

const Category = memo(() => {
  const { id } = useParams()

  const category = useSelector(state => state.category).find(x => x._id === id)
  const courses = useSelector(state => state.course).filter(
    x => x.category_id === id
  )

  let coursesInfo = []
  if (category?._id) {
    coursesInfo = courses.filter(x => x.category_id === id)
  }

  const [currentIndex] = useState(-1)
  const [page, setPage] = useState(1)
  const [pageSize] = useState(5)
  const indexOfLast = page * pageSize
  const indexOfFirst = indexOfLast - pageSize
  const current = coursesInfo.slice(indexOfFirst, indexOfLast)

  const handlePageChange = (event, value) => {
    setPage(value)
  }

  return (
    <Container fluid className="main-content-container px-3">
      <div className="page-header py-4">
        <PageTitle
          sm="12"
          title={`${category?.name} Courses`}
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
                    <a className="text-fiord-blue" href="/#">
                      {item.lerturer}
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
                  {item.students}
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

export default Category
