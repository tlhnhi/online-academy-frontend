import { fetchFavoriteCourses, removeCourseFromFavorite } from 'api/course'
import catTheme from 'constants/category-theme'
import PropTypes from 'prop-types'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
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

const WatchList = memo(() => {
  const [watchList, setWatchList] = useState([])

  const handleRemoveWatch = useCallback(
    async id => {
      const data = await removeCourseFromFavorite(id)

      if (data) {
        setWatchList(watchList.filter(x => x._id !== id))
        alert(data)
      }
    },
    [watchList]
  )

  useEffect(() => {
    if (watchList.length > 0) return

    const getWatchList = async () => {
      const favorite = await fetchFavoriteCourses()
      if (favorite.length > 0) setWatchList(favorite)
    }

    getWatchList()
  }, [watchList])

  console.log('WatchList', { watchList })

  if (!localStorage.getItem('token')) {
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
                    className={`card-post__category bg-${
                      catTheme[course.category.name]
                    }`}
                  >
                    {course.category.name}
                  </Badge>
                  <div className="card-post__author d-flex">
                    <span
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{
                        backgroundImage: `url('${course.lecturer.avatar}')`
                      }}
                    ></span>
                  </div>
                </div>
                <CardBody>
                  <h5 className="card-title mb-0">
                    <Link
                      to={`/courses/${course._id}`}
                      className="text-fiord-blue"
                    >
                      {course.title}
                    </Link>
                  </h5>
                  <span className="card-title d-inline-block">
                    <a
                      className="text-muted"
                      href={`/profile?id=${course.lecturer._id}`}
                    >
                      {course.lecturer.name}
                    </a>
                  </span>
                  <br />
                  <span className="card-title d-inline-block text-warning">
                    {course.star.toFixed(1)}&nbsp;
                    {[
                      ...Array(
                        course.star - Math.floor(course.star) < 0.79
                          ? Math.floor(course.star)
                          : Math.floor(course.star) + 1
                      )
                    ].map((_, i) => (
                      <i className="material-icons" key={i}>
                        &#xe838;
                      </i>
                    ))}
                    {[
                      ...Array(
                        ~~(
                          course.star - Math.floor(course.star) < 0.79 &&
                          course.star - Math.floor(course.star) > 0.21
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
                          (course.star - Math.floor(course.star) < 0.79
                            ? Math.floor(course.star)
                            : Math.floor(course.star) + 1) -
                          ~~(
                            course.star - Math.floor(course.star) < 0.79 &&
                            course.star - Math.floor(course.star) > 0.21
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
                    ({course.rating.length} ratings)
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
