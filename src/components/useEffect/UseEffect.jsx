import React, { useEffect, useState } from 'react'

import Message from './Message'

const UseEffect = () => {

  const [form, setForm] = useState({
    name: '',
    email:''
  })

  const { name, email } = form
  useEffect(() => {
    console.log('hey')
  },[])
  useEffect(() => {
    console.log('cambio el name')
  },[name])
  useEffect(() => {
    console.log('cambio el email')
  },[email])

  const handleInputChange = (e) =>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  return (
    <>
     <h1>UseEfect</h1>
     <hr />
    <div className="form-group">
      <input 
        type="text" 
        name="name"
        className="form-control"
        onChange={handleInputChange}/>
    </div>
    <div className="form-group">
      <input 
        type="text" 
        name="email"
        className="form-control"
        onChange={handleInputChange}/>
    </div>
    
    { name === '123' && <Message></Message>}
    </>
  )
}

export default UseEffect
