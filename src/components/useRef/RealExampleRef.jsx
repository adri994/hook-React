import React, { useState } from 'react'

import MultipleCustomHook from '../example/MultipleCustomHook'
const RealExampleRef = () => {

  const [show, setshow] = useState(false)
  return (
    <div>
      
      {show && <MultipleCustomHook />}

      <button 
        className="btn btn-primary"
        onClick={()=>setshow(!show)}
        >
          Show/hide 
      </button>
    </div>
  )
}

export default RealExampleRef
