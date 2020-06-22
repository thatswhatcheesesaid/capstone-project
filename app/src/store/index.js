import {combineReducers} from 'redux'
import foodpics from "./foodpic"
import topFivePics from "./topFivePics"

export default combineReducers({foodpics, topFivePics})