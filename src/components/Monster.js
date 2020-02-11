import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Head from './avatar/Head'
import Eyes from './avatar/Eyes'
import Mouth from './avatar/Mouth'
import Nose from './avatar/Nose'
import Extra from './avatar/Extra'

const Monster = props => {
  return (
    <StyledMonster id="monster">
      <div className="container container--head">
        <Head head={props.select.head.name} color={props.select.head.color} />
      </div>
      <div className="container container--eyes">
        <Eyes eyes={props.select.eyes.name} color={props.select.eyes.color} />
      </div>
      <div className="container container--mouth">
        <Mouth
          mouth={props.select.mouth.name}
          color={props.select.mouth.color}
        />
      </div>
      <div className="container container--nose">
        <Nose nose={props.select.nose.name} color={props.select.nose.color} />
      </div>
      <div className={`container container--extra ${props.select.extras.name}`}>
        <Extra
          extra={props.select.extras.name}
          color={props.select.extras.color}
        />
      </div>
    </StyledMonster>
  )
}

const StyledMonster = styled.div`
  height: 400px;
  width: 100%;
  max-width: 400px;
  position: relative;
  .container {
    position: absolute;
    &--head {
      width: 100%;
      height: 100%;
      z-index: 0;
    }
    &--eyes {
      z-index: 1;
      top: 30%;
      left: 21%;
      width: 60%;
    }
    &--mouth {
      z-index: 1;
      width: 160px;
      top: 60%;
      left: 29%;
    }
    &--nose {
      z-index: 2;
      width: 100px;
      top: 38%;
      left: 38%;
    }
    &--extra {
      z-index: 1;
      top: 50%;
      left: 10%;
    }
    &--extra.extras_2 {
      top: 26%;
      position: absolute;
    }
  }
  .eyes {
    width: 100px;
    height: 100px;
    position: absolute;
  }
`

const mapStateToProps = state => {
  return {
    select: state.select
  }
}

export default connect(mapStateToProps)(Monster)
