import { createSlice } from '@reduxjs/toolkit'
import {httpConfig} from "../utils/http-config"

const slice = createSlice({
	name: "foodpic",
	initialState: [],
	reducers: {
		selectAllFoodpics : (posts, action) => {
			return action.payload
		}
	}
})

export const {selectAllFoodpics} = slice.actions

export const fetchAllFoodpics = () => async (dispatch) => {
	const {data} = await httpConfig(`/apis/foodpic`)
	dispatch(selectAllFoodpics(data))
}

export default slice.reducer