import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserView, MobileView, isMobile } from 'react-device-detect'
import MaterialIcon from 'material-icons-react'
import Button from './Button'

class Carousel extends Component {
  state = {
    active: 0,
    feature: ''
  }
  handleClick = direction => {
    const isLeft = direction.toLowerCase() === 'left'
    const numberOfItems = this.props.items.length
    if (isLeft) {
      this.setState(prevState => ({
        active: prevState.active-- <= 0 ? numberOfItems - 1 : prevState.active--
      }))
    } else {
      this.setState(prevState => ({
        active: ++prevState.active >= numberOfItems ? 0 : prevState.active++
      }))
    }
  }
  selectFeature = (feature, handleShapeClick) => {
    this.setState({
      feature: feature.props
    })
    handleShapeClick(feature.props)
  }
  render() {
    return (
      <StyledCarousel active={this.state.active}>
        <h2 className="title">Select your parts</h2>
        <div className="content-wrapper">
          {this.props.items.map(item => (
            <div
              onClick={() =>
                this.selectFeature(item.name, this.props.handleShapeClick)
              }
              className="item"
            >
              {item.name}
            </div>
          ))}
        </div>
        <BrowserView>
          <div className="controls">
            <Button handleClick={() => this.handleClick('left')}>
              <MaterialIcon
                color={'#29B6F6'}
                icon="keyboard_arrow_left"
                size={40}
              />
            </Button>
            <Button handleClick={() => this.handleClick('right')}>
              <MaterialIcon
                color={'#29B6F6'}
                icon="keyboard_arrow_right"
                size={40}
              />
            </Button>
          </div>
        </BrowserView>
        <MobileView>
          <div className="controls">
            <Button handleClick={() => this.handleClick('left')}>
              <MaterialIcon
                color={'#29B6F6'}
                icon="keyboard_arrow_left"
                size={50}
              />
            </Button>
            <Button handleClick={() => this.handleClick('right')}>
              <MaterialIcon
                color={'#29B6F6'}
                icon="keyboard_arrow_right"
                size={50}
              />
            </Button>
          </div>
        </MobileView>
      </StyledCarousel>
    )
  }
}

const StyledCarousel = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 160px;
  overflow: hidden;
  border: 4px dashed lightblue;
  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  .title {
    position: absolute;
    margin: 0;
    font-size: ${isMobile ? '14px' : '30px'};
  }
  .content-wrapper,
  .controls {
    display: flex;
  }
  .controls {
    position: absolute;
    justify-content: space-between;
    width: 100%;
    max-width: 800px;
  }
  .content-wrapper {
    height: 100%;
    transition: all 0.2s ease-in-out;
    transform: translateX(${props => -100 * props.active}%);
  }
  .item {
    min-width: 100%;
    height: 100%;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 0.6;
    }
  }
`
export default Carousel
