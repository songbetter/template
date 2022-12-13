import intl from 'react-intl-universal';

import { messages } from '.';
import FormWrapper from 'common/ui/form/FormWrapper';

const AccountForm = ({ name, phone_number, password, updateFields }) => {
  const data = {
    name: {
      name: 'name',
      placeholder: messages.name.placeholder,
      value: name,
      label: messages.name.label,
      type: 'text',
      children: [],
    },
    password: {
      name: 'password',
      placeholder: messages.password.placeholder,
      value: password,
      label: messages.password.label,
      type: 'password',
      children: [],
    },
    mobile: {
      name: 'phone_number',
      placeholder: messages.mobile.placeholder,
      value: phone_number,
      label: messages.mobile.label,
      type: 'mobile',
      children: [],
    },
  };
  return (
    <FormWrapper title={intl.get(messages.title)}>
      {Object.keys(data).map(key => (
        <div className="flex-col mb-4" key={key}>
          <label>{intl.get(data[key].label)}</label>
          <input
            className="input-common"
            type={data[key].type}
            placeholder={intl.get(data[key].placeholder)}
            required
            autoFocus
            value={data[key].value}
            name={data[key].name}
            onChange={e => updateFields({ [e.target.name]: e.target.value })}
          />
          {data[key].children}
        </div>
      ))}
    </FormWrapper>
  );
};

export default AccountForm;
