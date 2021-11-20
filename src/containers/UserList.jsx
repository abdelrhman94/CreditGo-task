import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { List, Image, Button } from 'semantic-ui-react'
import { deleteUserAction } from '../redux/actions/userActions'

function UsersList({ onUpdate }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const users = useSelector((state) => {
    return state.users.list
  })

  const deleteUser = (id) => dispatch(deleteUserAction(id))

  const updateUser = (user) => onUpdate(user)

  const renderList = users.map((user) => {
    const { id, email, avatar, first_name, last_name } = user

    return (
      <List.Item
        key={id}
        onClick={() => {
          navigate(`/${id}`)
        }}
      >
        <List.Content floated='right'>
          <Button.Group>
            <Button
              onClick={(e) => {
                deleteUser(id)
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
        <Image avatar src={avatar} />
        <List.Content>
          <List.Header as='a'>
            {first_name} {last_name}
          </List.Header>
          <List.Description>
            <a href='/link'>
              <b>{email}</b>
            </a>
          </List.Description>
        </List.Content>
      </List.Item>
    )
  })

  return <List>{renderList}</List>
}

export default UsersList
