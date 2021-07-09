import React, { useMemo, useState } from 'react'
import useCounter from '../hooks/useCounter'

const UseMemo = () => {

  // Cada vez que hay que hay un cambio en el componente se ejecutara otra vez la funciones y los componentes dentro (ir al componente Small para ver la solucion de esto)
  const { state, increment} =  useCounter(10)
  const [show, setshow] = useState(true)

  const process = (it) =>{
    for(let i =0; i< it; i++){
      console.log('alli vamos')
    }

    return `${it} iteraciones realizadas`
  }
  // el retorna una que va ejecutar lo que esta dentro
  // la funcion es la que cambias o la que quieres prevenir para que no ejecute
  // la dependencia que quieres que vigile de cambios
  const proccessMemo = useMemo(()=>process(state), [state])
  return (
    <div>
      <h1>MemoHook</h1>
      <h1>Memorize <small>{state}</small></h1>

      <p>{proccessMemo}</p>
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

export default UseMemo