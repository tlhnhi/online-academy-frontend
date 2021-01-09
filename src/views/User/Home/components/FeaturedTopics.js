import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem
} from 'shards-react'

const FeaturedTopics = ({ categories }) => {
  const displayCats = categories
    .filter(x => !!x.parent)
    .map(x => ({
      _id: x._id,
      title: x.name,
      count: Math.floor(Math.random() * 20000)
    }))

  return (
    <Card className="border-bottom">
      <CardHeader className="border-bottom d-flex">
        <span className="text-semibold text-fiord-blue">Topic</span>
        <span className="ml-auto text-right text-semibold text-fiord-blue">
          Students
        </span>
      </CardHeader>

      <CardBody className="p-0 pb-2">
        <ListGroup flush className="list-group-small">
          {displayCats.map((item, idx) => (
            <ListGroupItem key={idx} className="d-flex px-3">
              <Link
                to={`/categories/${item._id}`}
                className="text-semibold text-fiord-blue"
              >
                {item.title}
              </Link>
              <span className="ml-auto text-right text-semibold text-reagent-gray">
                {item.count} <i className="material-icons">&#xe7fb;</i>
              </span>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  )
}

FeaturedTopics.propTypes = {
  categories: PropTypes.array
}

export default FeaturedTopics
