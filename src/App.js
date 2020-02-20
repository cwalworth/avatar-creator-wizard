import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserView, MobileView, isMobile } from 'react-device-detect'
import MaterialIcon from 'material-icons-react'
import ColorSelector from './components/ColorSelector'
import ProgressBar from './components/ProgressBar'
import Carousel from './components/Carousel'
import Button from './components/Button'
import { shapes, handleShapeClick } from './components/helpers'
import { shapesGroup } from './components/data'
import Monster from './components/Monster'
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'
import Tips from './components/Tips'

class App extends Component {
  state = {
    color: 'rgb(82, 167, 200)',
    activeWindow: 0
  }

  getImage = () => {
    const node = document.querySelector('#monster')
    domtoimage.toBlob(node).then(function(blob) {
      window.saveAs(blob, 'my-avatar.png')
    })
  }

  handleClick = (e, pages) => {
    const inner = e.target.getAttribute('name').toLowerCase()
    const pagesLength = pages.length - 1
    if (inner === 'next') {
      this.setState(prevState => ({
        activeWindow:
          prevState.activeWindow++ >= pagesLength
            ? pagesLength
            : prevState.activeWindow++
      }))
    }
    if (inner === 'previous') {
      this.setState(prevState => ({
        activeWindow:
          prevState.activeWindow-- <= 0 ? 0 : prevState.activeWindow--
      }))
    }
  }
  handleChangeColor = color => {
    const rgb = `rgb(${color.red}, ${color.green}, ${color.blue})`
    this.setState({
      color: rgb
    })
  }
  render() {
    const shapeComponentsGroup = shapesGroup.map(group =>
      group.map(shape => shapes(shape, this.state.color))
    )
    return (
      <StyledApp className="App">
        <Tips>
          <ProgressBar
            progress={{
              activeWindow: this.state.activeWindow,
              totalWindows: shapesGroup.length
            }}
          />
          <Monster />
          <Button
            className="clear"
            handleClick={() => handleShapeClick('clear')}
          >
            Clear
          </Button>
          <Carousel
            handleShapeClick={handleShapeClick}
            items={shapeComponentsGroup[this.state.activeWindow]}
          />
          <ColorSelector handleChange={this.handleChangeColor} />
          <div className="controls-wrapper">
            <BrowserView>
              <div className="controls-main--desktop controls-main">
                <Button
                  primary
                  name="previous"
                  handleClick={e => this.handleClick(e, shapesGroup)}
                >
                  Previous
                </Button>
                <div className="save-image" onClick={() => this.getImage()}>
                  Save image
                </div>
                <Button
                  primary
                  name="next"
                  handleClick={e => this.handleClick(e, shapesGroup)}
                >
                  Next
                </Button>
              </div>
            </BrowserView>
            <MobileView>
              <div className="controls-main--mobile controls-main">
                <Button
                  secondary
                  name="previous"
                  handleClick={e => this.handleClick(e, shapesGroup)}
                >
                  <MaterialIcon
                    color={'#01579B'}
                    name="previous"
                    icon="arrow_back"
                    size={100}
                  />
                </Button>
                <div className="save-image" onClick={() => this.getImage()}>
                  Save image
                </div>
                <Button
                  secondary
                  name="next"
                  handleClick={e => this.handleClick(e, shapesGroup)}
                >
                  <MaterialIcon
                    color={'#01579B'}
                    name="next"
                    icon="arrow_forward"
                    size={100}
                  />
                </Button>
              </div>
            </MobileView>
          </div>
        </Tips>
      </StyledApp>
    )
  }
}

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  max-width: 800px;
  padding: 10px;
  margin: auto;
  display: flex;
  flex-direction: column;
  .clear {
    transition: opacity 0.3s ease-in-out;
    &:hover {
      opacity: 0.4;
    }
  }
  .controls-wrapper {
    width: 100%;
  }
  .controls-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: ${isMobile ? 'fixed' : ''};
    &--desktop {
      & > div {
        text-transform: uppercase;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
        transition: box-shadow 0.2s ease-in-out;
        &:hover {
          box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
        }
        &:active {
          box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.8);
        }
      }
    }
    .save-image {
      position: absolute;
      z-index: 10;
      bottom: 0;
      right: 45%;
      padding: 5px;
      margin: 0;
      margin-bottom: ${isMobile ? '40px' : ''};
      background: lightseagreen;
      border-radius: 6px;
      cursor: pointer;
      filter: drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.8));
      &:hover {
        filter: drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.8));
      }
      &:active {
        filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.8));
      }
    }
  }
`

export default App
