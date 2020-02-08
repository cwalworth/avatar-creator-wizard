import React from 'react'
import styled from 'styled-components'

const Button = ({ primary, children, handleClick, name }) => {
  return (
    <StyledButton name={name} primary={primary} onClick={handleClick}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.div`
  cursor: pointer;
  user-select: none;
  margin-top: 10px;
  text-align: center;
  min-width: ${props => (props.primary ? '80px' : '40px')};
  border: ${props => (props.primary ? '2px solid navy' : '2px solid darkblue')};
  padding: ${props => (props.primary ? '20px' : '10px')};
  border-radius: ${props => (props.primary ? '10px' : '6px')};
`

export default Button
