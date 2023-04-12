import React from 'react'

const Counter = ({onDelete, onIncrement, onDecrement, count}) => {
  return (
    <div>
      <span>{count.name}</span>
      <span className={'badge m-2 ' + (count.value ? 'bg-primary' : 'bg-warning')}>
        {count.value ? count.value : 'empty'}
      </span>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => onIncrement(count.id)}
      >
        +
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => onDecrement(count.id)}
      >
        -
      </button>
      <button
        onClick={() => onDelete(count.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </div>
  )
}

export default Counter