import React from 'react'
import { useFetch } from '../hooks/useFetch/useFetch'
import useCounter from '../hooks/useCounter'

const MultipleCustomHook = () => {

  const { state, increment } = useCounter(1)
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`)

  // lo que estamos haciendo aqui que es lo siguiente
  // Convertir undefined en false por eso es la doble negacion
  // y si es true entonces nos devolvera data[0]
  const { author, quote } = !!data && data[0]
  return (
    <div>
      <h1>BreakingBad</h1>

      {
        loading
        ?      
          <div className="alert alert-info text-center">
            info
          </div>
        :
          <blockquote className="blockquote text-right">
            <p className="mb-0">{quote}</p>
            <footer className="blockquote footer">{author}</footer>
          </blockquote>

      }
    <button 
      className="btn btn-primary"
      onClick={increment}>Sguiente frase</button>

    </div>
  )
}

export default MultipleCustomHook
