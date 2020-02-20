import React from 'react'
import Head from './avatar/Head'
import Eyes from './avatar/Eyes'
import Mouth from './avatar/Mouth'
import Nose from './avatar/Nose'
import Extra from './avatar/Extra'
import {
  selectHead,
  selectEyes,
  selectMouth,
  selectNose,
  selectExtras
} from '../redux/actions'
import store from '../redux/store'

export const formatShapeString = str =>
  str.replace(/[^A-Za-z]+/g, '').toLowerCase()

export const shapes = (shape, color) => {
  const getShape = formatShapeString(shape)
  switch (getShape) {
    case 'head':
      return <Head shape={shape} color={color} />
    case 'eyes':
      return <Eyes shape={shape} color={color} />
    case 'mouth':
      return <Mouth shape={shape} color={color} />
    case 'nose':
      return <Nose shape={shape} color={color} />
    case 'extras':
      return <Extra shape={shape} color={color} />
    default:
      return null
  }
}

export const handleShapeClick = (shape, color) => {
  const value = formatShapeString(shape)
  switch (value) {
    case 'head':
      store.dispatch(selectHead({ shape, color }))
      break
    case 'eyes':
      store.dispatch(selectEyes({ shape, color }))
      break
    case 'mouth':
      store.dispatch(selectMouth({ shape, color }))
      break
    case 'nose':
      store.dispatch(selectNose({ shape, color }))
      break
    case 'extras':
      store.dispatch(selectExtras({ shape, color }))
      break
    default:
      store.dispatch(selectHead({ shape: '', color: '' }))
      store.dispatch(selectEyes({ shape: '', color: '' }))
      store.dispatch(selectMouth({ shape: '', color: '' }))
      store.dispatch(selectNose({ shape: '', color: '' }))
      store.dispatch(selectExtras({ shape: '', color: '' }))
  }
}
