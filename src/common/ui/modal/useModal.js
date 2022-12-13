import { useState } from 'react'

const useModal = (initialIsOnModal) => {
  const [isOnModal, setIsOnModal] = useState(initialIsOnModal)

  return {
    isOnModal,
    openModal: () => setIsOnModal(true),
    closeModal: () => setIsOnModal(false),
    reset: () => {
      setIsOnModal(initialIsOnModal)
    },
  }
}

export default useModal
