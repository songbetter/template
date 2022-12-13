const FormWrapper = ({ children, title }) => {
  return (
    <div>
      <h2 className="text-center text-2xl mb-4">{title}</h2>
      {children}
    </div>
  )
}

export default FormWrapper
