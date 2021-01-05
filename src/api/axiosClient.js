import axios from 'axios'

const client = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: { 'Content-Type': 'application/json' }
})

client.interceptors.response.use(
  res => res.data,
  err => err.response.data
)

export default client
