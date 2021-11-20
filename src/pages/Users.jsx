import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  loadUsers,
  createNewUserAction,
  updateUserAction,
} from '../redux/actions/userActions'
import NewUserModal from '../containers/NewUser'
import { Button, Segment } from 'semantic-ui-react'
import UsersList from '../containers/UserList'

function UsersPage() {
  // const users = useSelector((state) => state)
  const [isNewUserModalOpened, setIsNewUserModalOpened] = useState(false)
  const [userModalType, setUserModaltype] = useState('create')
  const [selectedUser, setSelectedUser] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUsers())
  })

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
      <div className='ui container' style={{ margin: '5px' }}>
        <Segment>
          <UsersList onUpdate={updateUser} />
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
        </Segment>
      </div>

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
