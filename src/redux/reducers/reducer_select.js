const initialState = {
  head: {
    name: '',
    color: 'rgb(82, 167, 200)'
  },
  eyes: {
    name: '',
    color: 'rgb(82, 167, 200)'
  },
  mouth: {
    name: '',
    color: 'rgb(82, 167, 200)'
  },
  nose: {
    name: '',
    color: 'rgb(82, 167, 200)'
  },
  extras: {
    name: '',
    color: 'rgb(82, 167, 200)'
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_HEAD':
      return {
        ...state,
        head: { name: action.payload.head, color: action.payload.color }
      }
    case 'SELECT_EYES':
      return {
        ...state,
        eyes: { name: action.payload.eyes, color: action.payload.color }
      }
    case 'SELECT_MOUTH':
      return {
        ...state,
        mouth: { name: action.payload.mouth, color: action.payload.color }
      }
    case 'SELECT_NOSE':
      return {
        ...state,
        nose: { name: action.payload.nose, color: action.payload.color }
      }
    case 'SELECT_EXTRAS':
      return {
        ...state,
        extras: { name: action.payload.extra, color: action.payload.color }
      }
    default:
      return state
  }
}
