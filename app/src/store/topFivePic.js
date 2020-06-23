import { createSlice } from '@reduxjs/toolkit'
import {httpConfig} from "../utils/http-config"

const slice = createSlice({
  name: "topFivePics",
  initialState: [],
  reducers: {
    getTopFiveFoodpics : (posts, action) =>{
      return action.payload
    }
  }
})

export const {getTopFiveFoodpics} = slice.actions

export const fetchTopFiveFoodpic = () => async (dispatch) => {
  const {data} = await httpConfig(`/apis/foodpic/topFive`)
  dispatch(getTopFiveFoodpics(data))
}

export default slice.reducer