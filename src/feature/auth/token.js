import { storage } from 'services'

const TOKEN_KEY = `access_token`

const token = {
  get: () => storage.get(TOKEN_KEY),
  set: ({ token }) => storage.set(TOKEN_KEY, token),
  remove: () => storage.remove(TOKEN_KEY),
}

export default token
