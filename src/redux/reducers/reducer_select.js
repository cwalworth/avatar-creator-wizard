const initialState = {
  head: {
    name: '',
    color: ''
  },
  eyes: {
    name: '',
    color: ''
  },
  mouth: {
    name: '',
    color: ''
  },
  nose: {
    name: '',
    color: ''
  },
  extras: {
    name: '',
    color: ''
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_HEAD':
      return {
        ...state,
        head: { name: action.payload.shape, color: action.payload.color }
      }
    case 'SELECT_EYES':
      return {
        ...state,
        eyes: { name: action.payload.shape, color: action.payload.color }
      }
    case 'SELECT_MOUTH':
      return {
        ...state,
        mouth: { name: action.payload.shape, color: action.payload.color }
      }
    case 'SELECT_NOSE':
      return {
        ...state,
        nose: { name: action.payload.shape, color: action.payload.color }
      }
    case 'SELECT_EXTRAS':
      return {
        ...state,
        extras: { name: action.payload.shape, color: action.payload.color }
      }
    default:
      return state
  }
}
