import React from 'react'
import { createRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Row,
  Col,
  FormSelect,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from 'shards-react'

import Chart from './chart'

const CategoriesChart = props => {
  let canvasRef = createRef()

  useEffect(() => {
    const chartConfig = {
      type: 'pie',
      data: props.chartData,
      options: {
        ...{
          legend: {
            position: 'bottom',
            labels: {
              padding: 25,
              boxWidth: 20
            }
          },
          cutoutPercentage: 0,
          tooltips: {
            custom: false,
            mode: 'index',
            position: 'nearest'
          }
        },
        ...props.chartOptions
      }
    }

    new Chart(canvasRef.current, chartConfig)
  })

  return (
    <Card small className="h-100">
      <CardHeader className="border-bottom">
        <h6 className="m-0">Categories</h6>
      </CardHeader>
      <CardBody className="d-flex py-0">
        <canvas
          height="220"
          ref={canvasRef}
          className="blog-users-by-device m-auto"
        />
      </CardBody>
      <CardFooter className="border-top">
        <Row>
          <Col className="text-right">
            <FormSelect
              size="sm"
              value="last-week"
              style={{ maxWidth: '130px' }}
              onChange={() => {}}
            >
              <option value="it">IT</option>
              <option value="business">Business</option>
              <option value="design">Design</option>
            </FormSelect>
          </Col>
        </Row>
      </CardFooter>
    </Card>
  )
}

CategoriesChart.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart config object.
   */
  chartConfig: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object,
  /**
   * The chart data.
   */
  chartData: PropTypes.object
}

CategoriesChart.defaultProps = {
  title: 'Categories',
  chartData: {
    datasets: [
      {
        hoverBorderColor: '#ffffff',
        data: [28.3, 24.2, 7.5, 20, 20],
        backgroundColor: [
          'rgba(0,123,255,1)',
          'rgba(0,123,255,0.8)',
          'rgba(0,123,255,0.6)',
          'rgba(0,123,255,0.4)',
          'rgba(0,123,255,0.2)'
        ]
      }
    ],
    labels: [
      'Web Development',
      'Mobile App Development',
      'Software Engineering',
      'Data Science',
      'Machine Learning'
    ]
  }
}

export default CategoriesChart
