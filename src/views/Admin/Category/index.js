import React, { memo } from 'react'
import { Container } from 'shards-react'
import PageTitle from '../../../components/PageTitle'
import CollapsibleTable from './components/CollapsibleTable'

const Categories = memo(() => {
  return (
    <Container fluid className="main-content-container px-3">
      <div className="page-header py-4">
        <PageTitle
          sm="12"
          title="Categories Management"
          subtitle=""
          className="text-sm-left"
        />
      </div>
      <div className="mt-3 mx-auto">
        <CollapsibleTable />
      </div>
    </Container>
  )
})

export default Categories
