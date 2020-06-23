import {combineReducers} from 'redux'
import foodpics from "./foodpic"
import topFivePics from "./topFivePic"

export default combineReducers({foodpics, topFivePics})