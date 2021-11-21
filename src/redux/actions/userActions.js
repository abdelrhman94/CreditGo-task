import { ActionTypes } from '../constants/action-types'
import { getAll, create, remove, update } from '../../api/users'

export const setUsers = (users) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: users,
  }
}
export const selectedUsers = (user) => {
  return {
    type: ActionTypes.SELECTED_USERS,
    payload: user,
  }
}
export const loadUsers = (page = 1) => {
  return (dispatch) => {
    getAll(page).then((res) => {
      const userList = res.data
      const pageList = res.data.total_pages
      dispatch(setUsers(userList, pageList))
    })
  }
}

export const createNewUserAction = (user) => {
  return (dispatch) => {
    create(user).then((newUser) => {
      dispatch(createNewUserSucceededAction(newUser))
    })
  }
}

export const createNewUserSucceededAction = (user) => {
  return {
    type: ActionTypes.CREATE_NEW_USER_SUCCEEDED,
    payload: user,
  }
}

export const updateUserAction = (user) => {
  return (dispatch) => {
    update(user).then((newUser) => {
      dispatch(updateUserSucceededAction(newUser))
    })
  }
}

export const updateUserSucceededAction = (user) => {
  return {
    type: ActionTypes.UPDATE_USER_SUCCESS,
    payload: user,
  }
}

export const deleteUserAction = (userId) => {
  return (dispatch) => {
    remove(userId).then(() => {
      dispatch(deleteUserSucceededAction(userId))
    })
  }
}

export const deleteUserSucceededAction = (userId) => {
  return {
    type: ActionTypes.DELETE_USER_SUCCESS,
    payload: userId,
  }
}
