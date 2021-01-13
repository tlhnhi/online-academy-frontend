import axiosClient from './axiosClient'

export const fetchCategories = async () => {
  const { success, message, data } = await axiosClient({ url: '/category' })
  return success ? data : alert(message)
}

export const fetchCategory = async id => {
  const { success, message, data } = await axiosClient({
    url: `/category/${id}`
  })

  return success ? data : alert(message)
}

export const createCategory = async (name, parent) => {
  const { success, message, data } = await axiosClient({
    url: '/category',
    method: 'post',
    data: { name, parent }
  })

  return success ? data : alert(message)
}

export const updateCategory = async (id, name) => {
  const { success, message, data } = await axiosClient({
    url: `/category/${id}`,
    method: 'put',
    data: { name }
  })

  return success ? data : alert(message)
}

export const deleteCategory = async id => {
  const { success, message, data } = await axiosClient({
    url: `/category/${id}`,
    method: 'delete'
  })

  return success ? data : alert(message)
}
