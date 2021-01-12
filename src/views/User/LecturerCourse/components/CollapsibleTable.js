import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React from 'react'
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
              <i className="material-icons">&#xe316;</i>
            ) : (
              <i className="material-icons">&#xe313;</i>
            )}
          </IconButton>
        </td>
        <td>{row.no}</td>
        <td>{row.section}</td>
        <td align="right">{row.preview ? 'Preview' : ''}</td>
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
                      <ReactPlayer url={row.url} />
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
    preview: PropTypes.bool.isRequired,
    length: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  enroll: PropTypes.bool
}

export default function CollapsibleTable({ course }) {
  const rows = course.content.map((x, i) =>
    createData(i + 1, x.title, x.preview, x.duration, x.video)
  )

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
          <Row key={row.no} row={row} />
        ))}
      </tbody>
    </table>
  )
}
