import React, { memo } from 'react'
import { Container, Row, Col } from 'shards-react'
import PageTitle from '../../../components/PageTitle'
import FeaturedTopics from './components/FeaturedTopics'
import NewestCourse from './components/Newest'
import TopViewedCourse from './components/TopViewed'
import Popular from './components/Popular'

const Home = memo(() => {
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
          <Popular />
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
          <FeaturedTopics />
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
      <NewestCourse />
      
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Top Viewed Courses"
          subtitle=""
          className="text-sm-left"
        />
      </Row>
      <TopViewedCourse />
    </Container>
  )
})

export default Home
