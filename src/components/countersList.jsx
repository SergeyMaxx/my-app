import React, {useState} from 'react'
import Counter from './counter'

const CountersList = () => {
  const initialState = [
    {id: 0, value: 0, name: 'Не нужная вещь'},
    {id: 1, value: 4, name: 'Ложка'},
    {id: 2, value: 0, name: 'Вилка'},
    {id: 3, value: 0, name: 'Тарелка'},
    {id: 4, value: 0, name: 'Набор минималиста'}
  ]

  const [counters, setCounters] = useState(initialState)

  const handleDelete = id => {
    setCounters(p => p.filter(c => c.id !== id))
  }

  // const handlerIncrement = id => {
  //   const index = counters.findIndex(c => c.id === id)
  //   counters[index].value++
  //   setCounters([...counters])
  // }

  const handleInc = id => {
    setCounters(p => p.map(count => {
      return count.id === id ? {...count, value: count.value + 1} : count
    }))
  }

  const handlerDecrement = id => {
    const index = counters.findIndex(c => c.id === id)
    counters[index].value && counters[index].value--
    setCounters([...counters])
  }

  return (
    <>
      {counters.map(count => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleInc}
          onDecrement={handlerDecrement}
          count={count}
        />
      ))}
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => setCounters(initialState)}
      >
        Сброс
      </button>
    </>
  )
}

export default CountersList