import {
  SELECT_HEAD,
  SELECT_EYES,
  SELECT_MOUTH,
  SELECT_NOSE,
  SELECT_EXTRAS
} from './actionTypes'

export const selectHead = head => {
  return {
    type: SELECT_HEAD,
    payload: head
  }
}
export const selectEyes = eyes => {
  return {
    type: SELECT_EYES,
    payload: eyes
  }
}
export const selectMouth = mouth => {
  return {
    type: SELECT_MOUTH,
    payload: mouth
  }
}
export const selectNose = nose => {
  return {
    type: SELECT_NOSE,
    payload: nose
  }
}
export const selectExtras = extras => {
  return {
    type: SELECT_EXTRAS,
    payload: extras
  }
}
