import React, { useState } from 'react'
import useCounter from '../hooks/useCounter'
import Small from './Small'

const Memorize = () => {

  // Cada vez que hay que hay un cambio en el componente se ejecutara otra vez la funciones y los componentes dentro (ir al componente Small para ver la solucion de esto)
  const { state, increment} =  useCounter(20)
  const [show, setshow] = useState(true)
  return (
    <div>
      <h1>Memorize 
        <Small 
          value={state}
        />
      </h1>

      <button
        className="btn btn-primary"
        onClick={ increment}
      >+1</button>

      <button
        className="btn btn-success"
        onClick={ ()=>{setshow(!show)} }
      >Mostrar { JSON.stringify(show) }
      </button>
    </div>
  )
}

export default Memorize
