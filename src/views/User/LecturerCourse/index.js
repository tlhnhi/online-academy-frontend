import React, { memo } from 'react'
import { Container } from 'shards-react'
import { Breadcrumb, BreadcrumbItem } from 'shards-react'
import About from './components/About'
// import Description from './components/Description'
import Content from './components/Content'
import Feedback from './components/Feedback'


const LecturerCourse = memo(() => {
  return (
    <Container fluid className="main-content-container p-3">
      <Breadcrumb>
        <BreadcrumbItem>
          <a className="text-fiord-blue" href="/#">IT</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <a className="text-fiord-blue" href="/#">Web Development</a>
        </BreadcrumbItem>
      </Breadcrumb>
      <About />
      {/* <Description /> */}
      <Content />
     <Feedback />
    </Container>
  )
})

export default LecturerCourse
