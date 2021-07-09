import React, { useRef } from 'react'

const FocuScreen = () => {

  // Hacer referencia a un elemtno del html
  // para hacer tenemos que poner el atributo ref y pasarle la funcion
  const inputRef = useRef()

  const handleClick = () =>{
    inputRef.current.select()
  }

  return (
    <div>
      <h1>Focus Screen</h1>
      <input 
        ref = {inputRef}
        className="form-control"
        type="text"
      />
      <button 
        className="btn btn-primary my-2"
        onClick={handleClick}
        >Focus</button>
    </div>
  )
}

export default FocuScreen