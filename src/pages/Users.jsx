import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  loadUsers,
  createNewUserAction,
  updateUserAction,
} from '../redux/actions/userActions'
import NewUserModal from '../containers/NewUser'
import { Button, Segment, Container } from 'semantic-ui-react'
import UsersList from '../containers/UserList'
import PaginationComponent from '../containers/Pagination'

function UsersPage() {
  // const users = useSelector((state) => state)
  const [page, setPage] = useState(1)
  // const [pages, setPages] = useState(0)
  const [isNewUserModalOpened, setIsNewUserModalOpened] = useState(false)
  const [userModalType, setUserModaltype] = useState('create')
  const [selectedUser, setSelectedUser] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUsers(page))
  },[page])

  const updateUser = (user) => {
    setSelectedUser(user)
    setUserModaltype('update')
    setIsNewUserModalOpened(true)
  }

  const createOrupdateUser = (user) => {
    if (userModalType === 'create') {
      dispatch(createNewUserAction(user))
    } else {
      dispatch(updateUserAction(user))
    }
    resetModalData()
  }

  const resetModalData = () => {
    setSelectedUser(null)
    setUserModaltype('create')
    setIsNewUserModalOpened(false)
  }

  return (
    <>
      <Container style={{ margin: '1rem', width: '80%' }}>
        <Segment>
          <UsersList onUpdate={updateUser} />
          <div
            style={{
              display: 'flex',
              marginTop: '10px',
              justifyContent: 'flex-end',
            }}
          >
            <Button
              content='New User'
              icon='plus'
              labelPosition='left'
              className='ui icon round button primary'
              onClick={() => {
                setUserModaltype('create')
                setIsNewUserModalOpened(true)
              }}
            />
          </div>

          <div
            style={{
              width: '100%',
              display: 'flex',
              marginTop: '10px',
              justifyContent: 'center',
            }}
          >
            <PaginationComponent
              onPageChange={(e, { activePage }) => {
                setPage(activePage)
              }}
              activePage={page}
              //  totalPages={pages}
            />
          </div>
        </Segment>
      </Container>

      <NewUserModal
        open={isNewUserModalOpened}
        onClose={() => resetModalData()}
        onClick={createOrupdateUser}
        mode={userModalType}
        user={selectedUser}
      />
    </>
  )
}

export default UsersPage
