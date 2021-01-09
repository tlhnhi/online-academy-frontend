import axiosClient from 'api/axiosClient'
import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row
} from 'shards-react'
import PageTitle from '../../../components/PageTitle'
import catTheme from 'constants/category-theme'
import arrToObj from 'utils/arr-to-obj'

const WatchList = memo(() => {
  const { push } = useHistory()

  const courses = useSelector(x => x.course)
  const currentUser = useSelector(x => x.currentUser)
  const categories = useSelector(x => x.category)
  const users = useSelector(x => x.user)

  const userObj = arrToObj(users)

  const catDict = {}

  if (categories.length > 0) {
    for (const cat of categories) {
      if (!cat.parent) continue
      catDict[cat._id] = cat.name
    }
  }

  const [watchList, setWatchList] = useState([])

  useEffect(() => {
    const fetchWatchList = async () => {
      if (watchList.length > 0) return

      const me = await axiosClient({ url: '/user/profile' })
      if (!me.success) return alert(me.message)

      const profile = me.data
      const list = []

      if (profile && courses.length > 0) {
        for (const wl of profile.favorite) {
          for (const course of courses) {
            if (wl === course._id) {
              list.push(course)
            }
          }
        }
      }

      if (list.length > 0) setWatchList(list)
    }

    fetchWatchList()
  }, [watchList, courses])

  const handleRemoveWatch = async _id => {
    const { success, message, data } = await axiosClient({
      url: `/course/favorite/${_id}`,
      method: 'delete'
    })

    if (!success) return alert(message)
    alert(data)

    setWatchList(watchList.filter(x => x._id !== _id))
  }

  if (!currentUser?._id || currentUser.isLecturer) {
    return <Redirect to="/error" />
  }

  return (
    <Container fluid className="main-content-container p-4">
      <div className="page-header pb-3">
        <PageTitle
          sm="12"
          title="Watchlist"
          subtitle=""
          className="text-sm-left"
        />
      </div>
      {[...Array(Math.ceil(watchList.length / 4))].map((_, index) => (
        <Row key={index} className="py-2">
          {watchList.length === 0 && (
            <Button size="lg" href="/home" className="mx-auto">
              Browse Course Now
            </Button>
          )}
          {watchList.slice(index * 4, index * 4 + 4).map((course, idx) => (
            <Col lg="3" md="6" sm="12" key={idx}>
              <Card small className="card-post card-post--1">
                <div
                  className="card-post__image"
                  style={{
                    backgroundImage: `url(${course.avatar})`
                  }}
                >
                  <Badge
                    pill
                    onClick={() => push(`/categories/${course.category_id}`)}
                    className={`card-post__category bg-${
                      catTheme[catDict[course.category_id]]
                    }`}
                  >
                    {catDict[course.category_id]}
                  </Badge>
                  <div className="card-post__author d-flex">
                    <span
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{
                        backgroundImage: `url('${
                          userObj[course.lecturer_id]?.avatar
                        }')`
                      }}
                    ></span>
                  </div>
                </div>
                <CardBody>
                  <h5 className="card-title mb-0">
                    <a
                      href={`/courses/${course._id}`}
                      className="text-fiord-blue"
                    >
                      {course.title}
                    </a>
                  </h5>
                  <span className="card-title d-inline-block">
                    <a
                      className="text-muted"
                      href={`/profile?id=${userObj[course.lecturer_id]?._id}`}
                    >
                      {userObj[course.lecturer_id]?.name}
                    </a>
                  </span>
                  <br />
                  <span className="card-title d-inline-block text-warning">
                    {course.rating}&nbsp;
                    {[
                      ...Array(
                        course.rating - Math.floor(course.rating) < 0.79
                          ? Math.floor(course.rating)
                          : Math.floor(course.rating) + 1
                      )
                    ].map((_, i) => (
                      <i className="material-icons" key={i}>
                        &#xe838;
                      </i>
                    ))}
                    {[
                      ...Array(
                        ~~(
                          course.rating - Math.floor(course.rating) < 0.79 &&
                          course.rating - Math.floor(course.rating) > 0.21
                        )
                      )
                    ].map((_, i) => (
                      <i className="material-icons" key={i}>
                        &#xe839;
                      </i>
                    ))}
                    {[
                      ...Array(
                        5 -
                          (course.rating - Math.floor(course.rating) < 0.79
                            ? Math.floor(course.rating)
                            : Math.floor(course.rating) + 1) -
                          ~~(
                            course.rating - Math.floor(course.rating) < 0.79 &&
                            course.rating - Math.floor(course.rating) > 0.21
                          )
                      )
                    ].map((_, i) => (
                      <i className="material-icons" key={i}>
                        &#xe83a;
                      </i>
                    ))}
                    &nbsp;
                  </span>
                  <span className="text-muted">
                    ({course.num_rating} ratings)
                  </span>
                  <br />
                  <div className="d-flex justify-content-center">
                    <span className="my-auto">
                      <h5 className="card-title d-inline-block my-auto">
                        {course.discount !== 1
                          ? (course.price * (1 - course.discount)).toFixed(2)
                          : course.price}
                        $&nbsp;
                      </h5>
                      <span
                        className="card-title d-inline-block my-auto text-muted"
                        style={{
                          textDecorationLine: 'line-through',
                          textDecorationStyle: 'solid'
                        }}
                      >
                        {course.discount ? course.price + '$' : ''}
                      </span>
                    </span>
                    <span className="ml-auto text-right">
                      <i
                        className="fas fa-lg text-danger"
                        onClick={() => handleRemoveWatch(course._id)}
                        style={{ cursor: 'pointer' }}
                      >
                        &#xf004;
                      </i>
                    </span>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  )
})

WatchList.propTypes = {
  watchList: PropTypes.array
}

export default WatchList
