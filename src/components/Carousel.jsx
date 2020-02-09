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
        <div className="controls">
          <BrowserView>
            <Button handleClick={() => this.handleClick('left')}>
              <MaterialIcon
                color={'rgb(25, 62, 77)'}
                icon="keyboard_arrow_left"
                size={40}
              />
            </Button>
            <Button handleClick={() => this.handleClick('right')}>
              <MaterialIcon
                color={'rgb(25, 62, 77)'}
                icon="keyboard_arrow_right"
                size={40}
              />
            </Button>
          </BrowserView>
          <MobileView>
            <Button handleClick={() => this.handleClick('left')}>
              <MaterialIcon
                color={'rgb(25, 62, 77)'}
                icon="keyboard_arrow_left"
                size={50}
              />
            </Button>
            <Button handleClick={() => this.handleClick('right')}>
              <MaterialIcon
                color={'rgb(25, 62, 77)'}
                icon="keyboard_arrow_right"
                size={50}
              />
            </Button>
          </MobileView>
        </div>
      </StyledCarousel>
    )
  }
}

const StyledCarousel = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 160px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  .title {
    position: absolute;
    margin: 0;
    z-index: 1;
    pointer-events: none;
    font-size: ${isMobile ? '14px' : '30px'};
    padding: 10px 0 0 10px;
    text-shadow: 1px 1px #fff;
    color: #333;
  }
  .controls {
    position: absolute;
    bottom: 0;
    width: 100%;
    max-width: 800px;
    pointer-events: none;
    & > div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      & > div {
        pointer-events: auto;
      }
    }
  }
  .content-wrapper {
    display: flex;
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
