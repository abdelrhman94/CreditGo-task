import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { List, Image, Button, Segment } from 'semantic-ui-react'
import { deleteUserAction } from '../redux/actions/userActions'

function UsersList({ onUpdate }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const users = useSelector((state) => {
    return state.users.list
  })

  const deleteUser = (id) => dispatch(deleteUserAction(id))

  const updateUser = (user) => onUpdate(user)

  return (
    <Segment>
      <List divided>
        {users.map((user) => (
          <List.Item
            key={user.id}
            onClick={() => {
              navigate(`/${user.id}`)
            }}
          >
            <Image avatar src={user.avatar} />
            <List.Content>
              <List.Header as='a'>
                {user.first_name} {user.last_name}
              </List.Header>
              <List.Description>
                <b>{user.email}</b>
              </List.Description>
            </List.Content>
            <List.Content floated='right'>
              <Button.Group>
                <Button
                  onClick={(e) => {
                    deleteUser(user.id)
                    e.stopPropagation()
                  }}
                >
                  delete
                </Button>
                <Button.Or text='or' />
                <Button
                  positive
                  onClick={(e) => {
                    updateUser(user)
                    e.stopPropagation()
                  }}
                >
                  edit
                </Button>
              </Button.Group>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Segment>
  )
}

export default UsersList
