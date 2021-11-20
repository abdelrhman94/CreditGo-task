import { ActionTypes } from '../constants/action-types'

const initState = {
  list: [],
}

export const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USERS: {
      return { ...state, list: payload }
    }
    case ActionTypes.CREATE_NEW_USER_SUCCEEDED: {
      const newState = { list: [...state.list, payload] }
      return newState
    }
    case ActionTypes.UPDATE_USER_SUCCESS: {
      const newUsersList = [...state.list].map((user) => {
        if (user.id === payload.id) return payload
        return user
      })
      let newState = { list: newUsersList }
      return newState
    }
    case ActionTypes.DELETE_USER_SUCCESS: {
      let newUserList = [...state.list].filter((user) => user.id !== payload)
      return {
        list: newUserList,
      }
    }
    default:
      return state
  }
}
