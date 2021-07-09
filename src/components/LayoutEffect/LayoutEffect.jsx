import React, { useLayoutEffect, useRef } from 'react'
import { useFetch } from '../hooks/useFetch/useFetch'
import useCounter from '../hooks/useCounter'
import './layout.css'

const LayoutEffect = () => {

  const { state, increment } = useCounter(1)
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`)


  // lo que estamos haciendo aqui que es lo siguiente
  // Convertir undefined en false por eso es la doble negacion
  // y si es true entonces nos devolvera data[0]
  const { quote } = !!data && data[0]

  const ptag = useRef()
  useLayoutEffect(() => {
    // el getBoundingClientRect da las dimensiones del div
    console.log(ptag.current.getBoundingClientRect())
  }, [quote])
  return (
    <div>
      <h1>LayoutEffect</h1>
      <blockquote 
      ref={ptag}
      className="blockquote text-right">
        <p className="mb-0">{quote}</p>
      </blockquote>


      <button
        className="btn btn-primary"
        onClick={increment}>Sguiente frase</button>

    </div>
  )
}

export default LayoutEffect