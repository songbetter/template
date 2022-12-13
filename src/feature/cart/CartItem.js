import { useCallback } from 'react'
import intl from 'react-intl-universal'

import { useQueries } from '.'

import { Counter } from 'common/ui/counter'
import { ConfirmModal, useModal } from 'common/ui/modal'
import { number } from 'services/format'

const CartItem = ({ id, name, price, quantity }) => {
  const { mutate: deleteMutate } = useQueries.useDeleteCartItem()

  // 선언형
  const deleteItem = useCallback(async () => {
    deleteMutate(id, {
      onSuccess: () => {},
      onError: () => {},
    })
  }, [deleteMutate, id])

  const { isOnModal, openModal, closeModal } = useModal(false)

  return (
    <div className="flex-col p-4 mb-4 shadow-md rounded-[4px] w-full">
      <div className="flex justify-between pb-2">
        <div>{name}</div>
        <div onClick={openModal}>X</div>
      </div>
      {isOnModal && (
        <ConfirmModal
          message={`${name}을 장바구니에서 삭제하시겠습니까?`}
          cancelModal={closeModal}
          confirmModal={() => {
            deleteItem(id)
            closeModal()
          }}
        />
      )}
      <div className="mt-2 flex items-center justify-between text-sm text-gray-600 pb-2">
        <span>{intl.get('cart_quantity')}</span>
        <Counter initialCount={quantity} />
      </div>
      <div className="text-end">{number.currency(price)}</div>
    </div>
  )
}

export default CartItem
