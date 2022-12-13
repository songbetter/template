import { atomFamily } from 'recoil'

const atomkeys = {
  countState: atomFamily({
    key: 'countState',
    default: (initialCount) => initialCount,
  }),
}

export default atomkeys
