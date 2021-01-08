import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, useParams } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Container } from 'shards-react'
import About from './components/About'
// import Description from './components/Description'
import Content from './components/Content'
import Feedback from './components/Feedback'

const LecturerCourse = memo(() => {
  const { id } = useParams()

  const currentUser = useSelector(state => state.currentUser)
  const course = useSelector(state => state.course)

  const courseInfo = course.find(x => x._id === id)

  if (!currentUser?._id || !currentUser.isLecturer) {
    return <Redirect to="/error" />
  }

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
      <About courseInfo={courseInfo} />
      {/* <Description /> */}
      <Content />
      <Feedback />
    </Container>
  )
})

export default LecturerCourse
