import React, { memo, useState } from 'react'
import { Row, Col } from 'shards-react'

const Lecturer = memo(() => {
  const lecturersInfo = [
    {
      name: 'Maximilian Schwarzmüller',
      image: require('../../../../images/avatars/4.jpg').default,
      rating: '4.6',
      courses: '35',
      students: '1,279,172',
      about:
        'Starting out at the age of 13 I never stopped learning new programming skills and languages. Early I started creating websites for friends and just for fun as well. Besides web development I also explored Python and other non-web-only languages. This passion has since lasted and lead to my decision of working as a freelance web developer and consultant. The success and fun I have in this job is immense and really keeps that passion burningly alive. Starting web development on the backend (PHP with Laravel, NodeJS, Python) I also became more and more of a frontend developer using modern frameworks like React, Angular or VueJS 2 in a lot of projects. I love both worlds nowadays!'
    }
  ]
  const [lecturer] = useState(lecturersInfo)
  return (
    <div>
      {lecturer.map((item, idx) => (
        <div className="mt-3 mx-auto" style={{ width: `800px` }}>
          <h4 className="card-title text-fiord-blue">Lecturer</h4>
          <h5>
            <a className="text-fiord-blue font-weight-bold" href="/#">
              {item.name}
            </a>
          </h5>
          <Row className="mb-3 mx-auto">
            <img
              className="rounded-circle"
              src={item.image}
              alt=""
              width="100"
            />
            <Col className="m-auto">
              <p className="text-warning my-1">
                <i className="material-icons">&#xe838;&nbsp;</i>{item.rating} Rating
              </p>
              <p className="my-1">
                <i className="fas">&#xf144;&nbsp;</i>{item.courses} Courses
              </p>
              <p className="my-1">
                <i className="material-icons">&#xe7fb;&nbsp;</i>{item.students} Students
              </p>
            </Col>
          </Row>
          <p>
            {item.about}
          </p>
        </div>
      ))}
    </div>
  )
})
export default Lecturer
