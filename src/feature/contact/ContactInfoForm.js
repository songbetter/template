import FormWrapper from 'common/ui/form/FormWrapper';

const ContactInfoForm = ({ address, detail_address, updateFields }) => {
  const message = {
    address: {
      name: 'address',
      placeholder: 'Address',
      value: address,
      label: 'Address',
      type: 'text',
      children: [],
    },
    detail_address: {
      name: 'detail_address',
      placeholder: 'detail_address',
      value: detail_address,
      label: 'Detail Address',
      type: 'text',
      children: [],
    },
  };

  return (
    <FormWrapper title="Contact Info">
      {Object.keys(message).map(key => (
        <div className="flex-col mb-4" key={key}>
          <label>{message[key].label}</label>
          <input
            className="input-common"
            type={message[key].type}
            placeholder={message[key].placeholder}
            required
            autoFocus
            value={message[key].value}
            name={message[key].name}
            onChange={e => updateFields({ [e.target.name]: e.target.value })}
          />
          {message[key].children}
        </div>
      ))}
    </FormWrapper>
  );
};

export default ContactInfoForm;
