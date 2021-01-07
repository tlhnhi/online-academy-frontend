import React, { memo, useState } from 'react'
import { Container, Badge } from 'shards-react'
import PageTitle from '../../../components/PageTitle'
// import Box from '@material-ui/core/Box'
import Pagination from '@material-ui/lab/Pagination'
import { Link } from 'react-router-dom'

const UsersCourse = memo(() => {
  const coursesInfo = [
    {
      avatar: require('../../../images/top_courses/python.jpg').default,
      category: 'IT',
      categoryTheme: 'dark',
      lecturer: 'Ardit Sulce',
      lecturerAvatar: require('../../../images/avatars/1.jpg').default,
      name: 'The Python Mega Course: Build 10 Real World Applications',
      describe:
        'A complete practical Python course for both beginners & intermediates. Master Python 3 by making 10 amazing Python apps.',
      rating: 4.5,
      num_rating: '45,294',
      students: '208,537',
      date: '11/2020',
      price: 129.99,
      discount: 0.92
    },
    {
      avatar: require('../../../images/top_courses/react.png').default,
      category: 'Web Development',
      categoryTheme: 'primary',
      lecturer: 'Maximilian Schwarzmüller',
      lecturerAvatar: require('../../../images/avatars/4.jpg').default,
      name: 'React - The Complete Guide (Hooks, React Router, Redux)',
      describe:
        'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
      rating: 4.6,
      num_rating: '98,747',
      students: '334,851',
      date: '12/2020',
      price: 129.99,
      discount: 0.92
    },
    {
      avatar: require('../../../images/top_courses/postman.png').default,
      category: 'Web Development',
      categoryTheme: 'primary',
      lecturer: 'Valentin Despa',
      lecturerAvatar: require('../../../images/avatars/3.jpg').default,
      name: 'Postman: The Complete Guide - REST API Testing',
      describe:
        'Postman API testing for manual and automated tests. Automate with Newman, Jenkins or any other CI tool.',
      rating: 4.4,
      num_rating: '5,520',
      students: '30,156',
      date: '12/2020',
      price: 19.99,
      discount: 0.45
    },
    {
      avatar: require('../../../images/top_courses/react-native.png').default,
      category: 'Mobile App Development',
      categoryTheme: 'info',
      lecturer: 'Maximilian Schwarzmüller',
      lecturerAvatar: require('../../../images/avatars/4.jpg').default,
      name: 'React Native - The Practical Guide [2021 Edition]',
      describe:
        'Use React Native and your React knowledge to build native iOS and Android Apps - incl. Push Notifications, Hooks, Redux',
      rating: 4.6,
      num_rating: '18,498',
      students: '101,470',
      date: '12/2020',
      price: 129.99,
      discount: 0.92
    },
    {
      avatar: require('../../../images/top_viewed/leadership.jpg').default,
      category: 'Management',
      categoryTheme: 'warning',
      lecturer: 'Lawrence M. Miller',
      lecturerAvatar: require('../../../images/avatars/1.jpg').default,
      name: 'Lean Leadership Skills, Lean Culture & Lean Management',
      describe:
        'Leading Change: Lean Culture, Lean Manufacturing, Continuous Improvement & Toyota Production System',
      rating: 4.5,
      num_rating: '4,733',
      students: '16,585',
      date: '1/2020',
      price: 139.99,
      discount: 0.92
    },
    {
      avatar: require('../../../images/top_viewed/sales.jpg').default,
      category: 'Sales',
      categoryTheme: 'danger',
      lecturer: 'Lawrence M. Miller',
      lecturerAvatar: require('../../../images/avatars/1.jpg').default,
      name: 'Sales Skills Training: Consultative Selling Master Class',
      describe:
        'Sales Training - Professional B2B Selling Skills for Consultants, Entrepreneurs and all Who Bring in the Business!',
      rating: 4.5,
      num_rating: '1,040',
      students: '3,572',
      date: '8/2020',
      price: 99.99,
      discount: 0.9
    },
    {
      avatar: require('../../../images/top_courses/goal.jpg').default,
      category: 'Management',
      categoryTheme: 'warning',
      lecturer: 'Leila Bulling Towne',
      lecturerAvatar: require('../../../images/avatars/1.jpg').default,
      name: 'Goal Setting at Work: Plan for Success, Reach Your Goals',
      describe:
        'Use SMART goals to focus your work, hold yourself accountable, measure and evaluate your progress, and make an impact.',
      rating: 4.6,
      num_rating: '3,588',
      students: '8,682 ',
      date: '11/2020',
      price: 49.99,
      discount: 0
    },
    {
      avatar: require('../../../images/top_courses/python.png').default,
      category: 'IT',
      categoryTheme: 'dark',
      lecturer: 'Joseph Delgadillo',
      lecturerAvatar: require('../../../images/avatars/1.jpg').default,
      name: 'The Complete Python 3 Course: Beginner to Advanced!',
      describe:
        'Learn Python with projects covering game & web development, web scraping, MongoDB, Django, PyQt, and data visualization!',
      rating: 4.2,
      num_rating: '20,433',
      students: '560,276',
      date: '10/2020',
      price: 149.99,
      discount: 0.92
    }
  ]

  const [currentIndex] = useState(-1)
  const [page, setPage] = useState(1)
  const [pageSize] = useState(5)
  const indexOfLast = page * pageSize
  const indexOfFirst = indexOfLast - pageSize
  const current = coursesInfo.slice(indexOfFirst, indexOfLast)

  const handlePageChange = (event, value) => {
    setPage(value)
  }

  return (
    <Container fluid className="main-content-container px-3">
      <div className="page-header py-4">
        <PageTitle
          sm="12"
          title="Courses Mangement"
          subtitle=""
          className="text-sm-left"
        />
      </div>
      <table className="table">
        <tbody style={{ fontSize: `16px` }}>
          {current &&
            current.map((item, idx) => (
              <tr key={idx} className={idx === currentIndex ? 'active' : ''}>
                <td>
                  <img
                    className="rounded"
                    src={item.avatar}
                    alt=""
                    width="100"
                    style={{
                      width: `200px`,
                      height: `115px`,
                      objectFit: `cover`
                    }}
                  />
                </td>
                <td style={{ width: `1200px` }}>
                  <Link
                    className="text-fiord-blue font-weight-bold"
                    to="/courses/1"
                    style={{ fontSize: `18px` }}
                  >
                    {item.name}
                  </Link>
                  <br />
                  <span className="">{item.describe}</span>
                  <br />
                  <span className="">
                    Created by:&nbsp;
                    <a className="text-fiord-blue" href="/#">
                      {item.lecturer}
                    </a>
                  </span>
                  <br />
                  <span className="text-muted">Last updated: {item.date}</span>
                </td>
                <td
                  className="text-center text-warning"
                  style={{ width: `180px` }}
                >
                  <span className="card-title text-warning">
                    {item.rating}&nbsp;
                    {[
                      ...Array(
                        item.rating - Math.floor(item.rating) < 0.79
                          ? Math.floor(item.rating)
                          : Math.floor(item.rating) + 1
                      )
                    ].map((_, idx) => (
                      <i className="material-icons" key={idx}>
                        &#xe838;
                      </i>
                    ))}
                    {[
                      ...Array(
                        ~~(
                          item.rating - Math.floor(item.rating) < 0.79 &&
                          item.rating - Math.floor(item.rating) > 0.21
                        )
                      )
                    ].map((_, idx) => (
                      <i className="material-icons" key={idx}>
                        &#xe839;
                      </i>
                    ))}
                    {[
                      ...Array(
                        5 -
                          (item.rating - Math.floor(item.rating) < 0.79
                            ? Math.floor(item.rating)
                            : Math.floor(item.rating) + 1) -
                          ~~(
                            item.rating - Math.floor(item.rating) < 0.79 &&
                            item.rating - Math.floor(item.rating) > 0.21
                          )
                      )
                    ].map((_, idx) => (
                      <i className="material-icons" key={idx}>
                        &#xe83a;
                      </i>
                    ))}
                  </span>
                  <span className="text-muted">{item.num_rating} ratings</span>
                </td>
                <td className="text-center" style={{ width: `150px` }}>
                  {item.students}
                  <i className="material-icons">&#xe7fb;</i>
                </td>
                <td className="text-center" style={{ width: `150px` }}>
                  <Badge
                    pill
                    className={`card-post__category bg-${item.categoryTheme}`}
                    href="/categories/1"
                  >
                    {item.category}
                  </Badge>
                </td>
                <td className="text-center text-danger" style={{ width: `50px` }}>
                  <i className="fas">&#xf2ed;</i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* <Box mx = {85}> */}
      <Pagination
        count={Math.ceil(coursesInfo.length / pageSize)}
        page={page}
        showFirstButton
        showLastButton
        onChange={handlePageChange}
        style={{ justifyContent: 'center' }}
      />
      {/* </Box> */}
    </Container>
  )
})

export default UsersCourse
