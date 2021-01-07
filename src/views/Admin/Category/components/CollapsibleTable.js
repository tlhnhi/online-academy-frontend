import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset'
    }
  }
})

function createData(category, subCategory, courses, students, subCategoryInfo) {
  return {
    category,
    subCategory,
    courses,
    students,
    subCategoryInfo
  }
}

function Row(props) {
  const { row } = props
  const [open, setOpen] = React.useState(false)
  const classes = useRowStyles()

  return (
    <React.Fragment>
      <tr className={classes.root}>
        <td>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <i className="material-icons">&#xe316;</i>
            ) : (
              <i className="material-icons">&#xe313;</i>
            )}
          </IconButton>
        </td>
        <th component="th" scope="row">
          {row.category}
        </th>
        <td className="text-right">{row.subCategory}</td>
        <td className="text-right">{row.courses}</td>
        <td className="text-right">{row.students}</td>
        <td className="text-center">
          <i className="fas">&#xf067;</i>
        </td>
        <td className="text-center">
          <i className="fas">&#xf044;</i>
        </td>
        <td className="text-center text-danger">
          <i className="fas">&#xf2ed;</i>
        </td>
      </tr>
      <tr>
        <td style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <h6 className="text-muted font-weight-bold">Sub-Categories</h6>
              <table size="small" aria-label="purchases">
                <thead>
                  <tr>
                    <td style={{ width: `280px` }}>Category</td>
                    <td style={{ width: `200px` }} align="right">
                      Courses
                    </td>
                    <td style={{ width: `200px` }} align="right">
                      Students
                    </td>
                    <td style={{ width: `30px` }} />
                    <td style={{ width: `30px` }} />
                    <td style={{ width: `30px` }} />
                  </tr>
                </thead>
                <tbody>
                  {row.subCategoryInfo.map(subCatRow => (
                    <tr key={subCatRow[0]}>
                      <th component="th" scope="row">
                        {subCatRow[0]}
                      </th>
                      <td className="text-right">{subCatRow[1]}</td>
                      <td className="text-right">{subCatRow[2]}</td>
                      <td className="text-center">
                        <i className="fas">&#xf067;</i>
                      </td>
                      <td className="text-center">
                        <i className="fas">&#xf044;</i>
                      </td>
                      <td className="text-center text-danger">
                        <i className="fas">&#xf2ed;</i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
          </Collapse>
        </td>
      </tr>
    </React.Fragment>
  )
}

Row.propTypes = {
  row: PropTypes.shape({
    category: PropTypes.number.isRequired,
    subCategory: PropTypes.number.isRequired,
    courses: PropTypes.number.isRequired,
    students: PropTypes.number.isRequired
  }).isRequired
}

const rows = [
  createData('IT', 5, 3456, 34567, [
    ['Web Development', 9, 98],
    ['Mobile App Development', 7, 76],
    ['Software Engineering', 6, 65],
    ['Data Science', 5, 54],
    ['Machine Learning', 4, 43]
  ]),
  createData('Business', 5, 2345, 23456, [
    ['Communications', 5, 54],
    ['Management', 9, 98],
    ['Sales', 7, 76],
    ['E-Commerce', 6, 65],
    ['Human Resources', 4, 43]
  ]),
  createData('Design', 5, 1234, 12345, [
    ['Graphic Design', 9, 98],
    ['Design Tools', 7, 76],
    ['Design Thinking', 6, 65],
    ['3D & Animation', 5, 54],
    ['Web Design', 4, 43]
  ])
]

export default function CollapsibleTable() {
  return (
    <div>
      <table className="table mb-0">
        <thead className="bg-light">
          <tr>
            <th scope="col" className="border-0" style={{ width: `20px` }} />
            <th scope="col" className="border-0">
              Category
            </th>
            <th
              scope="col"
              className="border-0 text-right"
              style={{ width: `300px` }}
            >
              Sub-categories
            </th>
            <th
              scope="col"
              className="border-0 text-right"
              style={{ width: `300px` }}
            >
              Courses
            </th>
            <th
              scope="col"
              className="border-0 text-right"
              style={{ width: `300px` }}
            >
              Students
            </th>
            <th scope="col" className="border-0" style={{ width: `50px` }} />
            <th scope="col" className="border-0" style={{ width: `50px` }} />
            <th scope="col" className="border-0" style={{ width: `50px` }} />
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <Row key={row.name} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
