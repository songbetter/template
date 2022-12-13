import { useMutation } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';

import { Layout } from 'common/layout';
import { StepForm } from 'common/ui/form';
import { ConfirmModal, useModal } from 'common/ui/modal';

import { AccountForm, apis, atomkeys, token } from 'feature/auth';
import { ContactInfoForm } from 'feature/contact';

const SigninPage = () => {
  const [data, setData] = useRecoilState(atomkeys.signInState);
  const { isOnModal, openModal, closeModal } = useModal(false);
  const updateFields = fields => {
    setData(prev => {
      return { ...prev, ...fields };
    });
  };
  const { mutate, isLoading } = useMutation(() => apis.postSignUp(data));
  const signin = async values => {
    mutate(values, {
      onSuccess: response => token.set({ token: response.accessToken }),
    });
    try {
      const response = apis.postSignin(data);

      token.set({ token: response.accessToken });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <StepForm
        onSubmitData={() => signin(data)}
        stepList={[
          <AccountForm {...data} updateFields={updateFields} />,
          <ContactInfoForm {...data} updateFields={updateFields} />,
        ]}
      />
      {isOnModal && (
        <ConfirmModal
          message={isLoading ? '잠시만 기다려주세요' : data.name}
          confirmModal={closeModal}
          cancelModal={closeModal}
        />
      )}
    </Layout>
  );
};

export default SigninPage;
