import { API } from 'common/config';

const apis = {
  postSignUp: async params => await API.post(`/account/sign-up`, params),
  postSignIn: async params => await API.post(`/login`, params),
};

export default apis;
