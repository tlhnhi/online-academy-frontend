import React, { memo } from 'react'
import { Container } from 'shards-react'
import { Breadcrumb, BreadcrumbItem } from 'shards-react'
import About from './components/About'
// import Description from './components/Description'
import Learn from './components/Learn'
import Content from './components/Content'
import StarsRating from './components/Rating'
import Related from './components/Related'
import Feedback from './components/Feedback'
import Lecturer from './components/Lecturer'


const Course = memo(() => {
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
      <Learn />
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
