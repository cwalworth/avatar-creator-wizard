import React from 'react'
import styled from 'styled-components'
import { isMobile } from 'react-device-detect'

const Button = ({ primary, children, handleClick, name, className }) => {
  return (
    <StyledButton
      className={className}
      name={name}
      primary={primary}
      onClick={handleClick}
    >
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.div`
  cursor: pointer;
  user-select: none;
  margin-top: 10px;
  text-align: center;
  font-size: 26px;
  min-width: ${props => (props.primary ? '80px' : '30px')};
  border: ${props => (props.primary ? '2px solid navy' : '')};
  padding: ${props => (props.primary ? '20px' : isMobile ? '0px' : '10px')};
  border-radius: ${props => (props.primary ? '10px' : '6px')};
`

export default Button
