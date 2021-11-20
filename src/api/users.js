import axios from 'axios'
import { USERS_API } from '../constants'

export const getAll = async (page = 1) => {
  const response = await axios.get(`${USERS_API}?page=${page}`)
  return response.data
}

export const create = async (user) => {
  const response = await axios.post(USERS_API, {
    ...user,
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  })
  return response.data
}

export const update = async (user) => {
  const response = await axios.put(USERS_API, user)
  return response.data
}

export const remove = async (userId) => {
  const response = await axios.delete(`${USERS_API}/${userId}`)
  return response
}
