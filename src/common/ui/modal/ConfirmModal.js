import ModalWrapper from './ModalWrapper'

const ConfirmModal = ({ cancelModal, confirmModal, message }) => {
  return (
    <ModalWrapper>
      <h1 className="text-xl mb-4 font-bold text-slate-500">{message}</h1>
      <button
        className="bg-red-500 px-4 py-2 rounded-md text-md text-white"
        onClick={cancelModal}
      >
        Cancel
      </button>
      <button
        className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
        onClick={confirmModal}
      >
        Ok
      </button>
    </ModalWrapper>
  )
}

export default ConfirmModal
