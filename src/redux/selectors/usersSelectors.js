export const usersState = (state) => state.users.list
export const getUserById = (state, userId) => {
  const usersList = usersState(state)
  if (usersList && usersList.length > 0)
    return usersList.find((user) => user.id === userId)
  return null
}
