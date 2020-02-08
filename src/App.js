import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { BrowserView, MobileView, isMobile } from 'react-device-detect'
import MaterialIcon, { colorPalette } from 'material-icons-react'
import ColorSelector from './components/ColorSelector'
import ProgressBar from './components/ProgressBar'
import Carousel from './components/Carousel'
import Button from './components/Button'
import Head from './components/Head'
import Eyes from './components/Eyes'
import Mouth from './components/Mouth'
import Nose from './components/Nose'
import Extra from './components/Extra'
import Monster from './components/Monster'
import {
  selectHead,
  selectEyes,
  selectMouth,
  selectNose,
  selectExtras
} from './redux/actions'
import store from './redux/store'

class App extends Component {
  state = {
    color: 'rgb(82, 167, 200)',
    activeWindow: 0
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
  handleShapeClick = shape => {
    const value = Object.keys(shape)[0]
    switch (value) {
      case 'head':
        store.dispatch(selectHead(shape, true))
        break
      case 'eyes':
        store.dispatch(selectEyes(shape, true))
        break
      case 'mouth':
        store.dispatch(selectMouth(shape, true))
        break
      case 'nose':
        store.dispatch(selectNose(shape, true))
        break
      case 'extra':
        store.dispatch(selectExtras(shape, true))
        break
    }
  }
  render() {
    const shapes = [
      [
        { name: <Head head="head_1" color={this.state.color} /> },
        { name: <Head head="head_2" color={this.state.color} /> },
        { name: <Head head="head_3" color={this.state.color} /> }
      ],
      [
        { name: <Eyes eyes="eyes_1" color={this.state.color} /> },
        { name: <Eyes eyes="eyes_2" color={this.state.color} /> },
        { name: <Eyes eyes="eyes_3" color={this.state.color} /> }
      ],
      [
        { name: <Mouth mouth="mouth_1" color={this.state.color} /> },
        { name: <Mouth mouth="mouth_2" color={this.state.color} /> },
        { name: <Mouth mouth="mouth_3" color={this.state.color} /> }
      ],
      [
        { name: <Nose nose="nose_1" color={this.state.color} /> },
        { name: <Nose nose="nose_2" color={this.state.color} /> },
        { name: <Nose nose="nose_3" color={this.state.color} /> }
      ],
      [
        { name: <Extra extra="extras_1" color={this.state.color} /> },
        { name: <Extra extra="extras_2" color={this.state.color} /> }
      ]
    ]
    return (
      <StyledApp className="App">
        <ProgressBar
          progress={{
            activeWindow: this.state.activeWindow,
            totalWindows: shapes.length
          }}
        />
        <Monster />
        <Carousel
          handleShapeClick={this.handleShapeClick}
          items={shapes[this.state.activeWindow]}
        />
        <ColorSelector handleChange={this.handleChangeColor} />
        <BrowserView>
          <div className="controls-main--desktop controls-main">
            <Button
              primary
              name="previous"
              handleClick={e => this.handleClick(e, shapes)}
            >
              Previous
            </Button>
            <Button
              primary
              name="next"
              handleClick={e => this.handleClick(e, shapes)}
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
              handleClick={e => this.handleClick(e, shapes)}
            >
              <MaterialIcon
                color={'#01579B'}
                name="previous"
                icon="arrow_back"
                size={100}
              />
            </Button>
            <Button
              secondary
              name="next"
              handleClick={e => this.handleClick(e, shapes)}
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
  .controls-main {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: ${isMobile ? 'fixed' : ''};
    bottom: ${isMobile ? 0 : ''};
    left: ${isMobile ? 0 : ''};
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
  }
`

const mapDispatchToProps = dispatch => ({
  selectHead: shape => dispatch(selectHead(shape)),
  selectEyes: shape => dispatch(selectEyes(shape)),
  selectMouth: shape => dispatch(selectMouth(shape)),
  selectNose: shape => dispatch(selectNose(shape)),
  selectExtras: shape => dispatch(selectExtras(shape))
})

export default connect(mapDispatchToProps)(App)
