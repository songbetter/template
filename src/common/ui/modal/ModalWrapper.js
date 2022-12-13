import ModalPortal from './ModalPortal'

const ModalWrapper = ({ children }) => {
  return (
    <ModalPortal>
      <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
        <div className="bg-white px-16 py-14 rounded-md text-center">
          {children}
        </div>
      </div>
    </ModalPortal>
  )
}

export default ModalWrapper
