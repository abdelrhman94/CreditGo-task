import React, { useState, useEffect } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'

const NewUserModal = ({
  open = false,
  user = {},
  mode = 'create',
  onClose = () => {},
  onClick = () => {},
}) => {
  const [state, setState] = useState({ ...user })

  useEffect(() => {
    if (mode === 'update') {
      setState(user)
    }
  }, [mode])

  return (
    <Modal onClose={onClose} open={open}>
      <Modal.Header>Add new User</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Name</label>
            <input
              required
              placeholder='First Name'
              onChange={(e) =>
                setState({ ...state, first_name: e.target.value })
              }
              value={
                mode === 'update' && state !== null ? state.first_name : ''
              }
            />
          </Form.Field>
          <Form.Field>
            <label>LastName</label>
            <input
              required
              placeholder='Last Name'
              onChange={(e) =>
                setState({ ...state, last_name: e.target.value })
              }
              value={mode === 'update' && state !== null ? state.last_name : ''}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              required
              placeholder='Email'
              onChange={(e) => setState({ ...state, email: e.target.value })}
              value={mode === 'update' && state !== null ? state.email : ''}
            />
          </Form.Field>
          <Button type='submit' onClick={() => onClick(state)}>
            Submit
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  )
}

export default NewUserModal
