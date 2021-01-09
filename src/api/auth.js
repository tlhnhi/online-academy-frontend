import axiosClient from './axiosClient'

export const signUp = async (name, email, password) => {
  const { success, message, token } = await axiosClient({
    url: '/signup',
    method: 'post',
    data: { name, email, password }
  })

  return success ? token : alert(message)
}

export const signIn = async (email, password) => {
  const { success, message, data } = await axiosClient({
    url: '/signin',
    method: 'post',
    data: { email, password }
  })

  return success ? data : alert(message)
}

export const updatePassword = async (oldPassword, newPassword) => {
  const { success, message, data } = await axiosClient({
    url: '/user/password',
    method: 'put',
    data: { password: oldPassword, newPassword }
  })

  return success ? data : alert(message)
}

export const resetPassword = async (email, password) => {
  const { success, message, data } = await axiosClient({
    url: '/reset-password',
    method: 'post',
    data: { email, password }
  })

  return success ? data : alert(message)
}
