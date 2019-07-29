import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  width: 100%;
  padding: 15px;
  margin-top: 25px;
  background-color: blue;
  border-radius: 10px;
  border-width: 1px;
  border-color: #fff;
  cursor: pointer;
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
`

const Button = props => {
  const { handleClick, text } = props
  return (
    <StyledButton className={'button'} onClick={handleClick}>
      {text}
    </StyledButton>
  )
}

export default Button
