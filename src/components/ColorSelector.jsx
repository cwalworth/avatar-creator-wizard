import React, { Component } from 'react'
import styled from 'styled-components'
import { SliderPicker } from 'react-color'
import { isMobile } from 'react-device-detect'

class ColorSelector extends Component {
  state = {
    red: 82,
    green: 167,
    blue: 200
  }
  handleChange = (e, colors) => {
    const val = e.target.getAttribute('name')
    this.setState({
      [val]: e.target.value
    })
  }
  handleChangeComplete = color => {
    this.setState({
      red: color.rgb.r,
      green: color.rgb.g,
      blue: color.rgb.b
    })
    this.props.handleChange(this.state)
  }
  render() {
    const { red, green, blue } = this.state
    return (
      <StyledColorSelector colors={{ red, green, blue }}>
        <SliderPicker
          direction={`vertical`}
          color={`rgb(${red}, ${green}, ${blue})`}
          onChangeComplete={this.handleChangeComplete}
        />
      </StyledColorSelector>
    )
  }
}

const StyledColorSelector = styled.div`
  width: 100%;
  margin: ${isMobile ? '30px 0 10px' : '40px 0'};
`

export default ColorSelector
