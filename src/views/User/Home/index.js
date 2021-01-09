import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { Col, Container, Row } from 'shards-react'
import PageTitle from '../../../components/PageTitle'
import FeaturedTopics from './components/FeaturedTopics'
import NewestCourse from './components/Newest'
import Popular from './components/Popular'
import TopViewedCourse from './components/TopViewed'

const Home = memo(() => {
  const courses = useSelector(x => x.course)
  const categories = useSelector(x => x.category)

  return (
    <Container fluid className="main-content-container p-4">
      <Row>
        <Col sm="9">
          <div className="page-header pb-4">
            <PageTitle
              sm="12"
              title="Most Popular Courses Last Week"
              subtitle=""
              className="text-sm-left"
            />
          </div>
          <Popular courses={courses} />
        </Col>
        <Col sm="3">
          <div className="page-header pb-4">
            <PageTitle
              sm="12"
              title="Featured Topics Last Week"
              subtitle=""
              className="text-sm-left"
            />
          </div>
          <FeaturedTopics categories={categories} />
        </Col>
      </Row>

      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Newest Courses"
          subtitle=""
          className="text-sm-left"
        />
      </Row>
      <NewestCourse courses={courses} />

      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Top Viewed Courses"
          subtitle=""
          className="text-sm-left"
        />
      </Row>
      <TopViewedCourse courses={courses} />
    </Container>
  )
})

export default Home
