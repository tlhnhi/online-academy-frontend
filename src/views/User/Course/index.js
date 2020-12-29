import React, { memo } from 'react'
import { Container } from 'shards-react'
import { Breadcrumb, BreadcrumbItem } from 'shards-react'
import About from './About'
import Description from './Description'
import Content from './Content'
import Related from './Related'
import Tutor from './Tutor'
import Feedback from './Feedback'


const Course = memo(() => {
  return (
    <Container fluid className="main-content-container p-3">
      <Breadcrumb className="bg-white">
        <BreadcrumbItem>
          <a href="/#">IT</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <a href="/#">Web Development</a>
        </BreadcrumbItem>
      </Breadcrumb>
      <About />
      <Description />
      <Content />
      <Related />
      <Tutor />
     <Feedback />
    </Container>
  )
})

export default Course
