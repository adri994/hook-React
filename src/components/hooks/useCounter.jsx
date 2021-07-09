import { useState } from "react"

const useCounter = (initial = 10) => {
  
  const [ state, setState ] = useState(initial)

  const increment = () => setState( state + 1 )
  const decrement = () => setState( state - 1 )
  const reset = () => setState( initial )

  return {
    state,
    increment,
    decrement,
    reset
  }
}

export default useCounter
