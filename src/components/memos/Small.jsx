import React, { memo } from 'react'

const Small = memo(({value}) => {

  // memo hara que solo se ejecute nuevamente el componente si cambia el value
  console.log('Me volvi a llamr')
  return (
    <small>
      {value}
    </small>
  )
})

export default Small
