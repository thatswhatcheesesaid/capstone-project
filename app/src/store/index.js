import {combineReducers} from 'redux'
import foodpics from "./foodpic"
import restaurants from "./restaurant"
import topFivePics from "./topFivePic"

export default combineReducers({foodpics, restaurants, topFivePics})