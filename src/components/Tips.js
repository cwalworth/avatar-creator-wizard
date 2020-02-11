import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import MaterialIcon from 'material-icons-react'

class Tips extends Component {
  state = {
    directions: [
      'Find a shape you like',
      'Select a color',
      'Click on the shape',
      'Next shape!',
      'You can save it as a PNG'
    ],
    current: 0,
    visible: true
  }
  buildTipLocations = values => {
    let tips = {}
    values.map((value, index) => {
      tips[`el_${index}`] = document
        .querySelector(value)
        .getBoundingClientRect()
    })
    return tips
  }
  componentDidMount() {
    const tips = this.buildTipLocations([
      '.carousel-right',
      '.slider-picker',
      '.content-wrapper',
      'div[name="next"]',
      '.save-image'
    ])
    const tipKeys = Object.keys(tips)
    window.onload = tipKeys.forEach((key, index) => {
      this.setState({
        [index]: { x: tips[key].x, y: tips[key].y }
      })
    })
  }
  handleNext = () => {
    this.setState(prevState => ({
      current:
        prevState.current++ >= this.state.directions.length
          ? 0
          : prevState.current++
    }))
  }
  handleClose = () => {
    this.setState({
      visible: false
    })
  }
  render() {
    return (
      <StyledTips>
        <div
          className="overlay"
          style={{
            display: `${
              !this.state.visible ||
              this.state.current >= this.state.directions.length
                ? 'none'
                : 'block'
            }`
          }}
        ></div>
        <StyledMessage
          content={this.state.directions[this.state.current]}
          animation={this.state}
          onClick={this.handleNext}
          style={{
            top: `${
              this.state[this.state.current]
                ? this.state[this.state.current].y - 50
                : 0
            }px`,
            left: `${
              this.state[this.state.current]
                ? this.state[this.state.current].x / 2
                : 0
            }px`,
            display: `${
              !this.state.visible ||
              this.state.current >= this.state.directions.length
                ? 'none'
                : 'flex'
            }`
          }}
        >
          <div onClick={this.handleClose} className="close">
            <MaterialIcon color={'rgb(25, 62, 77)'} icon="close" size={20} />
          </div>
          <div className="next">
            <MaterialIcon
              color={'rgb(25, 62, 77)'}
              icon="double_arrow"
              size={20}
            />
          </div>
        </StyledMessage>
        {this.props.children}
      </StyledTips>
    )
  }
}

const StyledTips = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .overlay {
    position: fixed;
    z-index: 15;
    width: 100vw;
    height: 100vh;
    min-width: 100%;
    min-height: 100%;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`
const StyledMessage = styled.div`
  .close {
    top: 0;
  }
  .next {
    bottom: 0;
  }
  .close, .next {
    position: absolute;
    cursor: pointer;
    right: 0;
      &:hover {
      transition: all .3s ease-in-out;
      transform: scale(.9);
    }
  }
  position: absolute;
  z-index: 15;
  width: 100px;
  min-height: 50px;
  font-size: 20px;
  background: lightblue;
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px;
  transition: all 1s ease-in-out;
  box-shadow: 2px 2px 2px black;
  display: flex;
  align-items: center;
  &:after {
    content: '${props => props.content}';
  }
`

export default Tips
