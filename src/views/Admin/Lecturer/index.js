import React, { useState, memo } from 'react'
import { Container, Row } from 'shards-react'

import PageTitle from '../../../components/PageTitle'

const Lecturers = memo(() => {
  const usersInfo = [
    {
      id: '1a2b3c567dgbdfg864cvb',
      avatar: require('../../../images/avatars/n.png').default,
      name: 'Cô Giáo Nhi',
      email: 'tlhnhitn@gmail.com',
      courses: 123456789,
      rating: 5,
      students: 987654321,
    },
    {
      id: '5feb7708f32ste456gdfh2',
      avatar: require('../../../images/avatars/4.jpg').default,
      name: 'Maximilian Schwarzmüller',
      email: 'maxsch@domain.com',
      courses: 35,
      rating: 4.6,
      students: 1279172
    }
  ]

  const [users] = useState(usersInfo)

  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Lecturer Users Management"
          subtitle=""
          className="text-sm-left"
        />
      </Row>

      {/* Default Light Table */}
      <Row>
        <table className="table mb-0">
          <thead className="bg-light">
            <tr>
              <th scope="col" className="border-0" style={{ width: `340px` }}>
                ID
              </th>
              <th
                scope="col"
                className="border-0 text-center"
                style={{ width: `50px` }}
              >
                Avatar
              </th>
              <th scope="col" className="border-0" style={{ width: `350px` }}>
                Name
              </th>
              <th scope="col" className="border-0" style={{ width: `250px` }}>
                Email
              </th>
              <th scope="col" className="border-0 text-center">
                Rating
              </th>
              <th scope="col" className="border-0 text-right">
                Courses
              </th>
              <th scope="col" className="border-0 text-right">
                Students
              </th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx}>
                <td>{user.id}</td>
                <td className="text-center">
                  <img
                    className="rounded-circle"
                    src={user.avatar}
                    alt={user.name}
                    width="30"
                    height="30"
                    object-fit="cover"
                  />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="text-center text-warning">{user.rating}<i className="material-icons" key={idx}>
                    &#xe838;
                  </i></td>
                <td className="text-right">{user.courses}</td>
                <td className="text-right">{user.students}</td>

                <td className="text-center text-danger" style={{ width: `80px` }}>
                  <i className="fas">&#xf2ed;</i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Row>
    </Container>
  )
})

export default Lecturers
