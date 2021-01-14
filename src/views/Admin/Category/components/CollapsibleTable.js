import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCategory } from 'store/app/category'
import Add from './Add'
import Edit from './Edit'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset'
    }
  }
})

function createData(
  id,
  category,
  subCategory,
  courses,
  students,
  subCategoryInfo
) {
  return {
    id,
    category,
    subCategory,
    courses,
    students,
    subCategoryInfo
  }
}

function Row(props) {
  const { row } = props

  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)
  const classes = useRowStyles()

  const handleRemoveCategory = useCallback(id => dispatch(removeCategory(id)), [
    dispatch
  ])

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
          <Add id={row.id} />
        </td>
        <td className="text-center">
          <Edit id={row.id} />
        </td>
        <td className="text-center text-danger">
          <i
            className="fas"
            onClick={() => handleRemoveCategory(row.id)}
            style={{ cursor: 'pointer' }}
          >
            &#xf2ed;
          </i>
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
                      Enrollments
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
                        <Edit id={subCatRow[3]} />
                      </td>
                      <td className="text-center text-danger">
                        <i
                          className="fas"
                          onClick={() => handleRemoveCategory(subCatRow[3])}
                          style={{ cursor: 'pointer' }}
                        >
                          &#xf2ed;
                        </i>
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
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    subCategory: PropTypes.number.isRequired,
    courses: PropTypes.number.isRequired,
    students: PropTypes.number.isRequired,
    subCategoryInfo: PropTypes.array.isRequired
  }).isRequired
}

export default function CollapsibleTable() {
  const categories = useSelector(x => x.category)

  const displayCats = categories.map(cat => {
    let countCourses = 0
    let countEnroll = 0

    for (const c of cat.childs) {
      countCourses += c.courses
      countEnroll += c.enrollments
    }

    return createData(
      cat._id,
      cat.name,
      cat.childs.length,
      countCourses,
      countEnroll,
      cat.childs.map(x => [x.name, x.courses, x.enrollments, x._id])
    )
  })

  return (
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
            Enrollments
          </th>
          <th scope="col" className="border-0" style={{ width: `50px` }} />
          <th scope="col" className="border-0" style={{ width: `50px` }} />
          <th scope="col" className="border-0" style={{ width: `50px` }} />
        </tr>
      </thead>
      <tbody>
        {displayCats.map((row, idx) => (
          <Row key={idx} row={row} />
        ))}
      </tbody>
    </table>
  )
}
