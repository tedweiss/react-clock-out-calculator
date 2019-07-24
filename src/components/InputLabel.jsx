import React from 'react'

const InputLabel = props => {
  const { label, onChange, type } = props
  return (
    <div>
      <label>{label}</label>
      <input type={type} onChange={onChange} />
    </div>
  )
}

export default InputLabel
