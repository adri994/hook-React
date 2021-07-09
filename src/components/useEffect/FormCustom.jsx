import React, {useState } from 'react'
import { useForm } from '../hooks/useEffect/useForm'


const FormCustom = () => {

  const [ values, handleInputChange ] = useForm({
    name: '',
    email:'',
    password:''
  })

  // const [form, setForm] = useState({

  // })

  const { name, email, password } = values




  return (
    <>
     <h1>Custom Hook Form</h1>
     <hr />
    <div className="form-group">
      <input 
        type="text" 
        name="name"
        className="form-control"
        value={name}
        onChange={handleInputChange}/>
    </div>
    <div className="form-group">
      <input 
        type="text" 
        name="email"
        className="form-control"
        value={email}
        onChange={handleInputChange}/>
    </div>
    <div className="form-group">
      <input 
        type="password" 
        name="password"
        className="form-control"
        value={password}
        onChange={handleInputChange}/>
    </div>
  
    </>
  )
}

export default FormCustom
