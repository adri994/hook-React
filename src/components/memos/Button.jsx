import React from 'react'

const Button = React.memo(({increment}) => {

  console.log('volvi a renderizar')
  return (
    <button
      onClick={increment}
    >
      Incrementa
    </button>
  )
})

export default Button
