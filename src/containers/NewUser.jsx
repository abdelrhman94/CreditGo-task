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
  }, [mode, user])

  return (
    <Modal onClose={onClose} open={open}>
      <Modal.Header>Add new User</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label htmlFor='firstName'>Name</label>
            <input
              id='firstName'
              required
              placeholder='First Name'
              onChange={(e) =>
                setState({ ...state, first_name: e.target.value })
              }
              value={
                mode === 'update' && state !== null
                  ? state.first_name
                  : undefined
              }
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='lastName'>LastName</label>
            <input
              id='lastName'
              required
              placeholder='Last Name'
              onChange={(e) =>
                setState({ ...state, last_name: e.target.value })
              }
              value={
                mode === 'update' && state !== null
                  ? state.last_name
                  : undefined
              }
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              required
              placeholder='Email'
              onChange={(e) => setState({ ...state, email: e.target.value })}
              value={
                mode === 'update' && state !== null ? state.email : undefined
              }
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
