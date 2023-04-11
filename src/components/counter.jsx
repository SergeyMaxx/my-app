import React from 'react'

const Counter = ({onDelete, onIncrement, onDecrement, count}) => {
  const formatValue = () => count.value === 0 ? 'empty' : count.value

  const getBadgeClasses = () => {
    let classes = 'badge m-2 '
    classes += count.value === 0 ? 'bg-warning' : 'bg-primary'
    return classes
  }

  return (
    <div>
      <span>{count.name}</span>
      <span className={getBadgeClasses()}>
        {formatValue()}
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