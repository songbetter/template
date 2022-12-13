import { useRecoilState } from 'recoil'
import atomkeys from './atomkeys'

const useCounter = (initialCount) => {
  const [count, setCount] = useRecoilState(atomkeys.countState(initialCount))

  return {
    value: count,
    increase: () => setCount((prevCount) => prevCount + 1),
    decrease: () =>
      setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount)),
    reset: () => {
      setCount(initialCount)
    },
  }
}

export default useCounter
