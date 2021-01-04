import React, { memo, useState } from 'react'
import { Container } from 'shards-react'
import PageTitle from '../../../components/PageTitle'
// import Box from '@material-ui/core/Box'
import Pagination from '@material-ui/lab/Pagination'
import { Link } from 'react-router-dom'

const Category = memo(() => {
  const coursesInfo = [
    {
      avatar: require('../../../images/related/micro.jpg').default,
      title: "Microfrontends with React: A Complete Developer's Guide",
      describe:
        'Build incredibly scalable apps with a microfrontend architecture',
      lerturer: 'Stephen Grider',
      date: '11/2020',
      rating: 4.8,
      num_rating: '588',
      students: '6,297',
      price: 129.99,
      discount: 0.92,
      favourite: false
    },
    {
      avatar: require('../../../images/related/complete.jpg').default,
      title: 'Complete React Developer in 2021 (Redux, Hooks, GraphQL)',
      describe:
        'Become a Senior React Developer! Build a massive E-commerce app with Redux, Hooks, GraphQL, ContextAPI, Stripe, Firebase',
      lerturer: 'Andrei Neagoie',
      date: '12/2020',
      rating: 4.7,
      num_rating: '11,681',
      students: '56,788',
      price: 129.99,
      discount: 0,
      favourite: false
    },
    {
      avatar: require('../../../images/related/modern.jpg').default,
      title: 'Modern React with Redux [2020 Update]',
      describe:
        'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
      lerturer: 'Stephen Grider',
      date: '12/2020',
      rating: 4.7,
      num_rating: '64,107',
      students: '217,223',
      price: 129.99,
      discount: 0.92,
      favourite: false
    },
    {
      avatar: require('../../../images/related/advanced.jpg').default,
      title: 'Advanced React and Redux',
      describe:
        "Walkthroughs on advanced React v16.6.3 and Redux v4.0.0 - Authentication, Testing, Middlewares, HOC's, and Deployment",
      lerturer: 'Stephen Grider',
      date: '12/2020',
      rating: 4.6,
      num_rating: '9,568',
      students: '68,713',
      price: 129.99,
      discount: 0.92,
      favourite: false
    },
    {
      avatar: require('../../../images/related/graphql.jpg').default,
      title: 'GraphQL with React: The Complete Developers Guide',
      describe:
        'Learn and master GraphQL by building real web apps with React and Node',
      lerturer: 'Stephen Grider',
      date: '12/2020',
      rating: 4.6,
      num_rating: '7,363',
      students: '42,228',
      price: 129.99,
      discount: 0.92,
      favourite: false
    },
    {
      avatar: require('../../../images/related/advanced.jpg').default,
      title: 'Advanced React and Redux',
      describe:
        "Walkthroughs on advanced React v16.6.3 and Redux v4.0.0 - Authentication, Testing, Middlewares, HOC's, and Deployment",
      lerturer: 'Stephen Grider',
      date: '12/2020',
      rating: 4.6,
      num_rating: '9,568',
      students: '68,713',
      price: 129.99,
      discount: 0.92,
      favourite: false
    },
    {
      avatar: require('../../../images/related/graphql.jpg').default,
      title: 'GraphQL with React: The Complete Developers Guide',
      describe:
        'Learn and master GraphQL by building real web apps with React and Node',
      lerturer: 'Stephen Grider',
      date: '12/2020',
      rating: 4.6,
      num_rating: '7,363',
      students: '42,228',
      price: 129.99,
      discount: 0.92,
      favourite: false
    },
    {
      avatar: require('../../../images/related/complete.jpg').default,
      title: 'Complete React Developer in 2021 (Redux, Hooks, GraphQL)',
      describe:
        'Become a Senior React Developer! Build a massive E-commerce app with Redux, Hooks, GraphQL, ContextAPI, Stripe, Firebase',
      lerturer: 'Andrei Neagoie',
      date: '12/2020',
      rating: 4.7,
      num_rating: '11,681',
      students: '56,788',
      price: 129.99,
      discount: 0,
      favourite: false
    },
    {
      avatar: require('../../../images/related/micro.jpg').default,
      title: "Microfrontends with React: A Complete Developer's Guide",
      describe:
        'Build incredibly scalable apps with a microfrontend architecture',
      lerturer: 'Stephen Grider',
      date: '11/2020',
      rating: 4.8,
      num_rating: '588',
      students: '6,297',
      price: 129.99,
      discount: 0.92,
      favourite: false
    },

    {
      avatar: require('../../../images/related/modern.jpg').default,
      title: 'Modern React with Redux [2020 Update]',
      describe:
        'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
      lerturer: 'Stephen Grider',
      date: '12/2020',
      rating: 4.7,
      num_rating: '64,107',
      students: '217,223',
      price: 129.99,
      discount: 0.92,
      favourite: false
    },
    {
      avatar: require('../../../images/related/complete.jpg').default,
      title: 'Complete React Developer in 2021 (Redux, Hooks, GraphQL)',
      describe:
        'Become a Senior React Developer! Build a massive E-commerce app with Redux, Hooks, GraphQL, ContextAPI, Stripe, Firebase',
      lerturer: 'Andrei Neagoie',
      date: '12/2020',
      rating: 4.7,
      num_rating: '11,681',
      students: '56,788',
      price: 129.99,
      discount: 0,
      favourite: false
    },
    {
      avatar: require('../../../images/related/advanced.jpg').default,
      title: 'Advanced React and Redux',
      describe:
        "Walkthroughs on advanced React v16.6.3 and Redux v4.0.0 - Authentication, Testing, Middlewares, HOC's, and Deployment",
      lerturer: 'Stephen Grider',
      date: '12/2020',
      rating: 4.6,
      num_rating: '9,568',
      students: '68,713',
      price: 129.99,
      discount: 0.92,
      favourite: false
    },
    {
      avatar: require('../../../images/related/micro.jpg').default,
      title: "Microfrontends with React: A Complete Developer's Guide",
      describe:
        'Build incredibly scalable apps with a microfrontend architecture',
      lerturer: 'Stephen Grider',
      date: '11/2020',
      rating: 4.8,
      num_rating: '588',
      students: '6,297',
      price: 129.99,
      discount: 0.92,
      favourite: false
    },

    {
      avatar: require('../../../images/related/graphql.jpg').default,
      title: 'GraphQL with React: The Complete Developers Guide',
      describe:
        'Learn and master GraphQL by building real web apps with React and Node',
      lerturer: 'Stephen Grider',
      date: '12/2020',
      rating: 4.6,
      num_rating: '7,363',
      students: '42,228',
      price: 129.99,
      discount: 0.92,
      favourite: false
    },
    {
      avatar: require('../../../images/related/modern.jpg').default,
      title: 'Modern React with Redux [2020 Update]',
      describe:
        'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
      lerturer: 'Stephen Grider',
      date: '12/2020',
      rating: 4.7,
      num_rating: '64,107',
      students: '217,223',
      price: 129.99,
      discount: 0.92,
      favourite: false
    },
    {
      avatar: require('../../../images/related/advanced.jpg').default,
      title: 'Advanced React and Redux',
      describe:
        "Walkthroughs on advanced React v16.6.3 and Redux v4.0.0 - Authentication, Testing, Middlewares, HOC's, and Deployment",
      lerturer: 'Stephen Grider',
      date: '12/2020',
      rating: 4.6,
      num_rating: '9,568',
      students: '68,713',
      price: 129.99,
      discount: 0.92,
      favourite: false
    },
    {
      avatar: require('../../../images/related/graphql.jpg').default,
      title: 'GraphQL with React: The Complete Developers Guide',
      describe:
        'Learn and master GraphQL by building real web apps with React and Node',
      lerturer: 'Stephen Grider',
      date: '12/2020',
      rating: 4.6,
      num_rating: '7,363',
      students: '42,228',
      price: 129.99,
      discount: 0.92,
      favourite: false
    },
    {
      avatar: require('../../../images/related/complete.jpg').default,
      title: 'Complete React Developer in 2021 (Redux, Hooks, GraphQL)',
      describe:
        'Become a Senior React Developer! Build a massive E-commerce app with Redux, Hooks, GraphQL, ContextAPI, Stripe, Firebase',
      lerturer: 'Andrei Neagoie',
      date: '12/2020',
      rating: 4.7,
      num_rating: '11,681',
      students: '56,788',
      price: 129.99,
      discount: 0,
      favourite: false
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
          title="Web Development Courses"
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
                    {item.title}
                  </Link>
                  <br />
                  <span className="">{item.describe}</span>
                  <br />
                  <span className="">
                    Created by:&nbsp;
                    <a className="text-fiord-blue" href="/#">
                      {item.lerturer}
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
                <td
                  className="text-center"
                  style={{ width: `150px`, fontSize: `18px` }}
                >
                  {item.discount !== 1
                    ? (item.price * (1 - item.discount)).toFixed(2)
                    : item.price}
                  $
                  <p
                    className="text-muted"
                    style={{
                      fontSize: `14px`,
                      textDecorationLine: 'line-through',
                      textDecorationStyle: 'solid'
                    }}
                  >
                    {item.discount ? item.price + '$' : ''}
                  </p>
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

export default Category
