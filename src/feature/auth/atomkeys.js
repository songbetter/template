import { atom } from 'recoil';

const atomkeys = {
  signUpState: atom({
    key: 'signUpState',
    default: {
      name: '',
      email: '',
      mobile: '',
      password: '',
      business: 'BABYFACE',
      allowMarketing: false,
    },
  }),
  signInState: atom({
    key: 'signInState',
    default: {
      email: '',
      password: '',
    },
  }),
};

export default atomkeys;
