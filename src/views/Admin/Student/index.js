import React, { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row } from 'shards-react'
import { removeUser } from 'store/app/user'
import PageTitle from '../../../components/PageTitle'

const Students = memo(() => {
  const dispatch = useDispatch()

  const users = useSelector(x => x.user)
  const students = users.filter(x => !x.isLecturer)

  const handleRemoveStudent = useCallback(id => dispatch(removeUser(id)), [
    dispatch
  ])

  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Student Users Management"
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
              <th scope="col" className="border-0" style={{ width: `450px` }}>
                Name
              </th>
              <th scope="col" className="border-0">
                Email
              </th>
              <th scope="col" className="border-0 text-right">
                Enrolled Courses
              </th>
              <th />
            </tr>
          </thead>
          <tbody>
            {students.map((user, idx) => (
              <tr key={idx}>
                <td>{user._id}</td>
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
                <td className="text-right">{user.enrolled.length}</td>
                <td
                  className="text-center text-danger"
                  style={{ width: `80px` }}
                >
                  <i
                    className="fas"
                    onClick={() => handleRemoveStudent(user._id)}
                    style={{ cursor: 'pointer' }}
                  >
                    &#xf2ed;
                  </i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Row>
    </Container>
  )
})

export default Students
