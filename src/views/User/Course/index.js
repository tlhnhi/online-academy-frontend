import { fetchCourse } from 'api/course'
import React, { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Container } from 'shards-react'
import About from './components/About'
import Content from './components/Content'
import Feedback from './components/Feedback'
import Learn from './components/Learn'
import Lecturer from './components/Lecturer'
import StarsRating from './components/Rating'
import Related from './components/Related'

const Course = memo(() => {
  const { id } = useParams()

  const categories = useSelector(x => x.category)
  const currentUser = useSelector(x => x.currentUser)

  const [course, setCourse] = useState(null)
  const parentCat = categories.find(x => x._id === course?.category.parent)

  useEffect(() => {
    const getCourse = async () => {
      const data = await fetchCourse(id)
      if (course?._id && id === data._id) return
      setCourse(data)
    }

    getCourse()
  }, [course, id])

  console.log('Course', { course })

  return (
    <Container fluid className="main-content-container p-3">
      <Breadcrumb>
        <BreadcrumbItem>
          <span className="text-fiord-blue">{parentCat?.name}</span>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <Link
            className="text-fiord-blue"
            to={`/categories/${course?.category._id}`}
          >
            {course?.category.name}
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
      {course?._id && (
        <>
          <About course={course} currentUser={currentUser} />
          <Learn detail={course.detail.split('<br>')} />
          {currentUser?._id && <Content course={course} user={currentUser} />}
          <StarsRating courseId={course._id} />
          <Related />
          <Lecturer lecturerId={course.lecturer._id} />
          <Feedback rating={course.rating} />
        </>
      )}
    </Container>
  )
})

export default Course
