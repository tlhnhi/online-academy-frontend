import { fetchCourse } from 'api/course'
import React, { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Redirect, useParams } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Container } from 'shards-react'
import About from './components/About'
import Content from './components/Content'
import Feedback from './components/Feedback'
import Learn from './components/Learn'

const LecturerCourse = memo(() => {
  const { id } = useParams()

  const categories = useSelector(state => state.category)
  const currentUser = useSelector(state => state.currentUser)

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

  console.log('LecturerCourse', { course })

  if (!localStorage.getItem('token')) {
    return <Redirect to="/error" />
  }

  return (
    <Container fluid className="main-content-container p-3">
      {course?._id && (
        <>
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
          <About course={course} />
          <Learn detail={course.detail.split('<br>')} />
          {currentUser?._id && <Content course={course} user={currentUser} />}
          <Feedback rating={course.rating} />
        </>
      )}
    </Container>
  )
})

export default LecturerCourse
