import axios from 'axios'

import { token } from 'feature/auth'

const headerTokenConfig = (config) => {
  const accessToken = token.get()
  config.headers = {
    Authorization: accessToken || '',
  }
  return config
}

const headerConfig = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
}

const API = axios.create(headerConfig)
API.interceptors.request.use(headerTokenConfig)

export default API
