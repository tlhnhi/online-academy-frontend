import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem
} from 'shards-react'

const FeaturedTopics = ({ col1, col2, referralData }) => (
  <Card className="border-bottom">
    <CardHeader className="border-bottom d-flex">
      <span className="text-semibold text-fiord-blue">{col1}</span>
      <span className="ml-auto text-right text-semibold text-fiord-blue">
        {col2}
      </span>
    </CardHeader>

    <CardBody className="p-0 pb-2">
      <ListGroup flush className="list-group-small">
        {referralData.map((item, idx) => (
          <ListGroupItem key={idx} className="d-flex px-3">
            <a href="/categories/1" className="text-semibold text-fiord-blue">
              {item.title}
            </a>
            <span className="ml-auto text-right text-semibold text-reagent-gray">
              {item.value} <i className="material-icons">&#xe7fb;</i>
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>
    </CardBody>
  </Card>
)

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
  col2: 'Students',
  referralData: [
    {
      title: 'Web Devolopment',
      value: '19,291'
    },
    {
      title: 'Mobile App Development',
      value: '11,201'
    },
    {
      title: 'Machine Learning',
      value: '9,291'
    },
    {
      title: 'Management',
      value: '8,281'
    },
    {
      title: 'Sales',
      value: '7,128'
    },
    {
      title: 'Data Science',
      value: '6,218'
    },
    {
      title: 'E-Commerce',
      value: '19,291'
    },
    {
      title: 'Digital Marketing',
      value: '11,201'
    },
    {
      title: 'Graphic Design',
      value: '9,291'
    },
    {
      title: 'Programming Languages',
      value: '6,218'
    }
  ]
}

export default FeaturedTopics
