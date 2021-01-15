import axiosClient from './axiosClient'

export const fetchUsers = async () => {
  const { success, message, data } = await axiosClient({ url: '/users' })
  return success ? data : alert(message)
}

export const fetchUser = async id => {
  const { success, message, data } = await axiosClient({ url: `/users/${id}` })
  return success ? data : alert(message)
}

export const fetchProfile = async () => {
  const { success, message, data } = await axiosClient({ url: '/user/profile' })
  return success ? data : alert(message)
}

export const createAccountByAdmin = async (email, password, name) => {
  const { success, message, data } = await axiosClient({
    url: '/user',
    method: 'post',
    data: { email, password, name }
  })

  return success ? data : alert(message)
}

export const updateProfile = async profile => {
  const { success, message, data } = await axiosClient({
    url: '/user/profile',
    method: 'put',
    data: profile
  })

  return success ? data : alert(message)
}

export const updateAccountByAdmin = async profile => {
  const { success, message, data } = await axiosClient({
    url: `/user/${profile._id}`,
    method: 'put',
    data: profile
  })

  return success ? data : alert(message)
}

export const deleteAccount = async id => {
  const { success, message, data } = await axiosClient({
    url: `/user/${id}`,
    method: 'delete'
  })

  return success ? data : alert(message)
}
