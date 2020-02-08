import { combineReducers } from 'redux'
import SelectPart from './reducer_select'

const rootReducer = combineReducers({
  select: SelectPart
})

export default rootReducer
