import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Container } from 'shards-react'
import About from './components/About'
import Content from './components/Content'
import Feedback from './components/Feedback'
// import Description from './components/Description'
import Learn from './components/Learn'
import Lecturer from './components/Lecturer'
import StarsRating from './components/Rating'
import Related from './components/Related'

const Course = memo(() => {
  const { id } = useParams()

  const courses = useSelector(state => state.course)
  const course = courses.find(x => x._id === id)

  return (
    <Container fluid className="main-content-container p-3">
      <Breadcrumb>
        <BreadcrumbItem>
          <a className="text-fiord-blue" href="/#">
            IT
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <a className="text-fiord-blue" href="/#">
            Web Development
          </a>
        </BreadcrumbItem>
      </Breadcrumb>
      <About courseInfo={course} />
      <Learn detail={course?.detail.split('<br>')} />
      {/* <Description /> */}
      <Content />
      <StarsRating />
      <Related />
      <Lecturer />
      <Feedback />
    </Container>
  )
})

export default Course
