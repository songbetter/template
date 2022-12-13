import { useRecoilValue } from 'recoil'
import intl from 'react-intl-universal'

import { atomkeys } from '.'
import { number } from 'services/format'

const FinalPrice = () => {
  const finalprice = useRecoilValue(atomkeys.getTotalPrice)
  const quantity = useRecoilValue(atomkeys.getTotalQuantity)

  return (
    <>
      <div className="mt-5 flex justify-between text-sm text-gray-600">
        <span>{intl.get('cart_final_quantity')}</span>
        <span>
          {quantity}
          {intl.get('unit_price')}
        </span>
      </div>
      <div className="mt-5 flex justify-between text-sm text-gray-600">
        <span>{intl.get('cart_final_payment_amount')}</span>
        <span>{number.currency(finalprice)}</span>
      </div>
    </>
  )
}

export default FinalPrice
