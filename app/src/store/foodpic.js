import { createSlice } from '@reduxjs/toolkit'
import {httpConfig} from "../utils/http-config"

const slice = createSlice({
	name: "foodpic",
	initialState: [],
	reducers: {
		getAllFoodpics : (foodpics, action) => {
			return action.payload
		},
		shiftFoodpic : (foodpics, action) => {
			const index = foodpics.findIndex(foodpic => foodpic.foodpicId === action.payload.foodpicId)
			console.log(index)
			console.log(foodpics.push(foodpics.splice(index, 1)[0]))
		}
	}
})

export const {getAllFoodpics, shiftFoodpic} = slice.actions

export const fetchAllFoodpic = () => async (dispatch) => {
	const {data} = await httpConfig(`/apis/foodpic`)
	dispatch(getAllFoodpics(data))
}


export default slice.reducer