import { createSlice } from '@reduxjs/toolkit'
import {httpConfig} from "../utils/http-config"

const slice = createSlice({
  name: "restaurant",
  initialState: [],
  reducers: {
    getAllRestaurants : (posts, action) => {
      return action.payload
    }
  }
})

export const {getAllRestaurants} = slice.actions

export const fetchAllRestaurants = () => async (dispatch) => {
  const {data} = await httpConfig(`/apis/restaurant`)
  dispatch(getAllRestaurants(data))
}

export default slice.reducer
