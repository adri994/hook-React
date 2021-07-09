import React, { useEffect } from 'react'

const Message = () => {

  useEffect(() => {
    
    const mouseMove = (e) =>{
      console.log('Hola')
    }
    
    window.addEventListener('mouseMove',mouseMove)
    return () => {
      console.log('Esta desmontado')
      window.addEventListener('mouseMove')
    }
  }, [])
  return (
    <>
     <h1>Eres Genial!</h1> 
    </>
  )
}

export default Message
