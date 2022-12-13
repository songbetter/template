import { useState } from 'react'

const StepForm = ({ onSubmitData, stepList }) => {
  const [step, setStep] = useState(0)
  const totalStep = stepList.length
  const onClickButton = () => {
    if (step + 1 === totalStep) {
      alert('done')
    } else setStep(step + 1)
  }
  return (
    <form
      onSubmit={onSubmitData}
      className="flex-col border bg-white px-6 py-8 shadow-md rounded-[4px] h-auto w-full"
    >
      <div className="text-end">
        {step + 1}/{totalStep}
      </div>
      {stepList[step]}
      <div className="flex">
        {step > 0 && (
          <button
            className="btn-primary"
            type="button"
            onClick={() => setStep(step - 1)}
          >
            prev
          </button>
        )}
        <button className="btn-primary" type="button" onClick={onClickButton}>
          {step === totalStep - 1 ? 'done' : 'next'}
        </button>
      </div>
    </form>
  )
}

export default StepForm
