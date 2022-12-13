import { counterKeys } from 'common/ui/counter'
import { atom, selector } from 'recoil'

const atomkeys = {
  cartState: atom({
    key: 'cartState',
    default: [
      { id: 0, name: '1번상품', quantity: 1, price: 1000 },
      { id: 1, name: '2번상품', quantity: 2, price: 2000 },
    ],
  }),
  getTotalPrice: selector({
    key: 'getTotalPrice',
    get: ({ get }) => {
      const cart = get(atomkeys.cartState)

      return cart
        .map((item) => get(counterKeys.countState(item.quantity)) * item.price)
        .reduce((prev, next) => prev + next)
    },
  }),
  getTotalQuantity: selector({
    key: 'getTotalQuantity',
    get: ({ get }) => {
      const cart = get(atomkeys.cartState)

      return cart
        .map((item) => get(counterKeys.countState(item.quantity)))
        .reduce((prev, next) => prev + next)
    },
  }),
}

export default atomkeys
