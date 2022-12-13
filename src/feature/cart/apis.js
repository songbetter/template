import { API } from 'common/config'

import keys from './keys'

const apis = {
  getList: async () => await API.get(`${keys.list[0]}.json`),
  deleteItem: async (id) => await API.delete(`${keys.list[0]}/${id}.json`),
}

export default apis
