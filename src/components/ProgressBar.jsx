import React from 'react'
import styled from 'styled-components'

const ProgressBar = ({ progress }) => {
  return (
    <StyledProgressBar progress={progress}>
      <div className="inner"></div>
    </StyledProgressBar>
  )
}

const StyledProgressBar = styled.div`
  width: 100%;
  height: 40px;
  z-index: 10;
  background: lightgrey;
  border-radius: 10px;
  border: 2px solid darkgrey;
  top: 0;
  .inner {
    border-radius: 10px;
    height: 100%;
    background: lightblue;
    transition: width 0.2s ease-in-out;
    width: ${props =>
      (props.progress.activeWindow / (props.progress.totalWindows - 1)) * 100}%;
  }
`

export default ProgressBar
