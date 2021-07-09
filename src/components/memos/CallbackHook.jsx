import React, { useCallback, useState } from 'react'
import Button from './Button'

const CallbackHook = () => {

  const [counter, setcounter] = useState(10)

  //es diferente porque al caso 1 porqeu apunto a otra lugar en memoria por eser una const y un objecto

  // lo hacemos asi para no hacer referencia al counter
  // esto lo que hara que el setCounter cambie es decir solo sera una vez
  // si paso parametro desde la funcion lo pongo en la aprte del primer callback
  const increment = useCallback(() => {
    setcounter((c)=>c +1)
    },
    [setcounter],
  )

  //Tambien se usa en el useEffect para que no se ejecute a cada rato
  return (
    <div>
      <h1>UseCallBack Hook</h1>
      <p>resultado {counter}</p>
      <Button
        increment={increment}
      ></Button>
    </div>
  )
}

export default CallbackHook
