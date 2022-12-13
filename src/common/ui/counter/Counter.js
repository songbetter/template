import useCounter from './useCounter'

const Counter = ({ initialCount }) => {
  const { value, increase, decrease } = useCounter(initialCount)

  return (
    <div className="flex">
      <button className="btn-primary" type="submit" onClick={decrease}>
        -
      </button>
      <input className="border p-2" value={value} onChange={() => {}} />
      <button className="btn-primary" type="submit" onClick={increase}>
        +
      </button>
    </div>
  )
}

export default Counter
