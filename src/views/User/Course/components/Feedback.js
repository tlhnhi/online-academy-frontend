import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Card, CardBody, CardHeader } from 'shards-react'

const Feedback = memo(({ rating }) => {
  return (
    <div className="mt-3 mx-auto" style={{ width: `800px` }}>
      <h4 className="card-title text-fiord-blue">Feedback</h4>
      <Card small className="card-post mb-4">
        {rating.map((item, idx) => (
          <div key={idx}>
            <CardHeader className="border-bottom border-top d-flex">
              <div className="card-post__author d-flex">
                <span
                  className="card-post__author-avatar card-post__author-avatar--small"
                  style={{
                    backgroundImage: `url(${item.user.avatar})`
                  }}
                ></span>
                <div className="d-flex flex-column justify-content-center ml-3">
                  <span className="card-post__author-name">
                    {item.user.name}
                  </span>
                </div>
              </div>
              <div className="my-auto ml-auto text-warning">
                {[
                  ...Array(
                    item.star - Math.floor(item.star) < 0.79
                      ? Math.floor(item.star)
                      : Math.floor(item.star) + 1
                  )
                ].map((_, idx) => (
                  <i className="material-icons" key={idx}>
                    &#xe838;
                  </i>
                ))}
                {[
                  ...Array(
                    ~~(
                      item.star - Math.floor(item.star) < 0.79 &&
                      item.star - Math.floor(item.star) > 0.21
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
                      (item.star - Math.floor(item.star) < 0.79
                        ? Math.floor(item.star)
                        : Math.floor(item.star) + 1) -
                      ~~(
                        item.star - Math.floor(item.star) < 0.79 &&
                        item.star - Math.floor(item.star) > 0.21
                      )
                  )
                ].map((_, idx) => (
                  <i className="material-icons" key={idx}>
                    &#xe83a;
                  </i>
                ))}
              </div>
            </CardHeader>
            <CardBody className="border-bottom">
              <p className="card-text text-muted">{item.comment}</p>
            </CardBody>
          </div>
        ))}
      </Card>
    </div>
  )
})

Feedback.propTypes = {
  rating: PropTypes.array
}

export default Feedback
