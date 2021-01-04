import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import ReactPlayer from 'react-player'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset'
    }
  }
})

function createData(no, section, preview, length, url) {
  return {
    no,
    section,
    preview,
    length,
    url
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
              <i class="material-icons">&#xe316;</i>
            ) : (
              <i class="material-icons">&#xe313;</i>
            )}
          </IconButton>
        </td>
        <td>{row.no}</td>
        <td>{row.section}</td>
        <td align="right">{row.preview}</td>
        <td align="right">{row.length}</td>
      </tr>
      <tr>
        <td style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box m={1}>
              <table size="small">
                <tbody>
                  <tr>
                    <Box mx={7.5}>
                    {row.url ? <ReactPlayer url={row.url}/> : <span className="text-muted">Please purchase this course to view this content.</span>}
                    </Box>
                  </tr>
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
    no: PropTypes.number.isRequired,
    section: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
}

const rows = [
  createData(1, 'Getting Started', 'Preview', '40min', 'https://www.youtube.com/watch?v=NA-LeuIvH5s'),
  createData(
    2,
    'Refreshing Next Generation JavaScript (Optional)',
    'Preview',
    '44min',
    'https://www.youtube.com/watch?v=UtIOMUQ7nWM'
  ),
  createData(3, 'Understanding the Base Features and Syntax', '', '2hr 21min',''),
  createData(4, 'Working with Lists and Conditionals', '', '1hr 1min',''),
  createData(5, 'Styling React Components and Elements', '', '1hr 5min',''),
  createData(6, 'Debugging React Apps', '', '20min',''),
  createData(
    7,
    'Diving Deeper into Components and React Internals',
    '',
    '2hr 54min',
    ''
  ),
  createData(
    8,
    'A Real React App: The Burger Builder (Basic Version)',
    '',
    '4hr',
    ''
  )
]

export default function CollapsibleTable() {
  return (
    <table className="table">
      <thead className="bg-light">
        <tr>
          <th className="border-0" />
          <th className="border-0">#</th>
          <th className="border-0">Section</th>
          <th className="border-0" />
          <th className="border-0 text-right">Length</th>
        </tr>
      </thead>
      <tbody style={{ fontSize: `16px` }}>
        {rows.map(row => (
          <Row key={row.name} row={row} />
        ))}
      </tbody>
    </table>
  )
}
