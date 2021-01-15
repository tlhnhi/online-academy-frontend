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
  let cats = []
  for (const cat of categories) {
    for (const c of cat.childs) {
      cats.push(c)
    }
  }
  cats = cats.sort((a, b) => b.courses - a.courses)
  cats.length = 10

  return (
    <Card className="border-bottom">
      <CardHeader className="border-bottom d-flex">
        <span className="text-semibold text-fiord-blue">Topic</span>
        <span className="ml-auto text-right text-semibold text-fiord-blue">
          Courses
        </span>
      </CardHeader>

      <CardBody className="p-0 pb-2">
        <ListGroup flush className="list-group-small">
          {/* {categories.map(cat =>
            cat.childs.map((child, idx) => (
              <ListGroupItem key={idx} className="d-flex px-3">
                <Link
                  to={`/categories/${child._id}`}
                  className="text-semibold text-fiord-blue"
                >
                  {child.name}
                </Link>
                <span className="ml-auto text-right text-semibold text-reagent-gray">
                  {child.courses} <i className="material-icons">&#xe7fb;</i>
                </span>
              </ListGroupItem>
            ))
          )} */}
          {cats.map((cat, idx) => (
            <ListGroupItem key={idx} className="d-flex px-3">
              <Link
                to={`/categories/${cat._id}`}
                className="text-semibold text-fiord-blue"
              >
                {cat.name}
              </Link>
              <span className="ml-auto text-right text-semibold text-reagent-gray">
                {cat.courses} <i className="material-icons">&#xe7fb;</i>
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
