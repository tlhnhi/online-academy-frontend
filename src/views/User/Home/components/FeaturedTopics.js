import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'
import {
  Card,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem
} from 'shards-react'

const FeaturedTopics = ({ col1, col2 }) => {
  const categories = useSelector(state => state.category)
  const users = useSelector(state => state.user)
  const courses = useSelector(x => x.course)

  const displayCats = categories
    .filter(x => !!x.parent)
    .map(x => ({
      _id: x._id,
      title: x.name,
      value: Math.floor(Math.random() * 20000)
    }))

  const countEnrolledByCatId = id => {
    let c = 0
    const coursesThisCat = courses.filter(x => x.category_id === id)

    for (const course of coursesThisCat) {
      for (const user of users) {
        if (user.enrolled.includes(course._id)) ++c
      }
    }

    return c
  }

  return (
    <Card className="border-bottom">
      <CardHeader className="border-bottom d-flex">
        <span className="text-semibold text-fiord-blue">{col1}</span>
        <span className="ml-auto text-right text-semibold text-fiord-blue">
          {col2}
        </span>
      </CardHeader>

      <CardBody className="p-0 pb-2">
        <ListGroup flush className="list-group-small">
          {displayCats.map((item, idx) => (
            <ListGroupItem key={idx} className="d-flex px-3">
              <a
                href={`/categories/${item._id}`}
                className="text-semibold text-fiord-blue"
              >
                {item.title}
              </a>
              <span className="ml-auto text-right text-semibold text-reagent-gray">
                {countEnrolledByCatId(item._id)}{' '}
                <i className="material-icons">&#xe7fb;</i>
              </span>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  )
}

FeaturedTopics.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The referral data.
   */
  referralData: PropTypes.array
}

FeaturedTopics.defaultProps = {
  col1: 'Topic',
  col2: 'Students'
}

export default FeaturedTopics
