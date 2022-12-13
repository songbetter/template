import { API } from 'common/config';

import keys from './keys';

const apis = {
  getList: async () => await API.get(`/${keys.all[0]}`),
  getFilteredList: async () => await API.get(`/${keys.all[0]}/search?`),
  getItem: async id => await API.get(`/${keys.all[0]}/${id}`),
  addItem: async params => await API.post(`/${keys.all[0]}`, params),
  putItem: async params => await API.put(`/${keys.all[0]}`, params),
  patchItem: async params => await API.patch(`/${keys.all[0]}`, params),
  deleteItem: async id => await API.delete(`/${keys.all[0]}/${id}`),
};

export default apis;
