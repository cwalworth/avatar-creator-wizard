import React from 'react'
import styled from 'styled-components'
import { BrowserView, MobileView, isMobile } from 'react-device-detect'

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
  background: grey;
  border-radius: 10px;
  border: 2px solid darkgrey;
  top: 0;
  .inner {
    height: 100%;
    background: lightblue;
    transition: width 0.2s ease-in-out;
    width: ${props =>
      (props.progress.activeWindow / (props.progress.totalWindows - 1)) * 100}%;
  }
`

export default ProgressBar
