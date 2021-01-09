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
  const categories = useSelector(state => state.category)
  const courses = useSelector(state => state.course)
  const courseInfo = courses.find(x => x._id === id)
  const category = categories.find(x => x._id === courseInfo?.category_id)
  const parent = categories.find(x => x._id === category?.parent)

  if (!currentUser?._id || !currentUser.isLecturer) {
    return <Redirect to="/error" />
  }

  return (
    <Container fluid className="main-content-container p-3">
      <Breadcrumb>
        <BreadcrumbItem>
          <span className="text-fiord-blue">{parent?.name}</span>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <a className="text-fiord-blue" href={`/categories/${category?._id}`}>
            {category?.name}
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
