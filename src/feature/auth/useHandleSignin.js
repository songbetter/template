import { useRecoilState } from 'recoil';

import { atomkeys, apis } from '.';

const useHandleSignin = () => {
  const [data, setData] = useRecoilState(atomkeys.signUpState);

  return {
    data,
    updateFields: fields => {
      setData(prev => {
        return { ...prev, ...fields };
      });
    },
    createAccount: data => apis.postSignUp(data),
  };
};

export default useHandleSignin;
