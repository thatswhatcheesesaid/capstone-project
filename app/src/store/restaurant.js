import { createSlice } from '@reduxjs/toolkit'
import {httpConfig} from "../utils/http-config"

const slice = createSlice({
  name: "restaurant",
  initialState: [],
  reducers: {
    getAllRestaurants : (posts, action) => {
      return action.payload
    }, getTop5Restaurant : (posts, action) => {
      return action.payload
    }
  }
})

export const {getAllRestaurants, getTop5Restaurant} = slice.actions

export const fetchAllRestaurants = () => async (dispatch) => {
  const {data} = await httpConfig(`/apis/restaurant`)
  dispatch(getAllRestaurants(data))
}

export const fetchTop5Restaurant = () => async (dispatch) => {
  const {data} = await httpConfig(`/apis/restaurant/top5`)
  dispatch(getTop5Restaurant(data))
}

export default slice.reducer
