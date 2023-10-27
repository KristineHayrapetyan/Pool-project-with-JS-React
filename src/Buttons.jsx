import React from 'react'

export function Buttons({plus, minus}) {
  return (
    <div>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
    </div>
  )
}
