import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Container } from 'shards-react'
import arrToObj from 'utils/arr-to-obj'
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
  const categories = useSelector(state => state.category)
  const course = courses.find(x => x._id === id)
  const category = categories.find(x => x._id === course?.category_id)
  const parent = categories.find(x => x._id === category?.parent)

  const users = useSelector(state => state.user)
  const lecturers = arrToObj(users?.filter(x => x.isLecturer))

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
      <About courseInfo={course} lecturer={lecturers[course?.lecturer_id]} />
      <Learn detail={course?.detail.split('<br>')} />
      {/* <Description /> */}
      <Content />
      <StarsRating />
      <Related />
      <Lecturer lecturer={lecturers[course?.lecturer_id]} />
      <Feedback />
    </Container>
  )
})

export default Course
