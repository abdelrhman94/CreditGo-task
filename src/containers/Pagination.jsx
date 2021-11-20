import React from 'react'
import { Pagination } from 'semantic-ui-react'

const PaginationComponent = ({
  activePage = 1,
  totalPages = 10,
  onPageChange = () => {},
}) => (
  <Pagination
    activePage={activePage}
    totalPages={totalPages}
    ellipsisItem={null}
    lastItem={null}
    firstItem={null}
    onPageChange={onPageChange}
  />
)

export default PaginationComponent
