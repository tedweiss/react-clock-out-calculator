import React from 'react'

const InputLabel = props => {
  const { label, onBlur, onChange, type } = props
  return (
    <div>
      <label>{label}</label>
      <input type={type} onBlur={onBlur} onChange={onChange} />
    </div>
  )
}

export default InputLabel
