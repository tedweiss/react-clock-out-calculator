import React from 'react'
import styled from 'styled-components'

const FieldSet = styled.fieldset`
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  width: 215px;
  padding: 5px;
  margin: 5px;
  text-align: left;
  vertical-align: top;
  border: none;
  input {
    padding: 5px;
    margin: 10px 0;
    border-radius: 5px;
    font-size: 16px;
    width: 200px;
    display: block;
    border: 1px solid gray;
    background-color: white;
  }
  input[type='time'] {
    padding: 2px 5px;
  }
`

const InputLabel = props => {
  const { label, onBlur, onChange, type } = props
  return (
    <FieldSet>
      <label>{label}</label>
      <input type={type} onBlur={onBlur} onChange={onChange} />
    </FieldSet>
  )
}

export default InputLabel
