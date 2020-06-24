import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { shiftFoodpic } from '../../store/foodpic'
import { useDispatch } from 'react-redux'
// import { AxiosInstance as httpConfig } from 'axios'
// import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
import {httpConfig} from "../../utils/http-config";

export function RandomFoodpic(props) {
	const {foodpic} = props
console.log(foodpic)
	const dispatch = useDispatch()
	const cheesey = {
		cheeseyProfileId: null,
		cheeseyFoodpicId: foodpic.foodpicId,
		cheeseyScore: 1,
	}
	const submitCheesey = () => {

		dispatch(shiftFoodpic(foodpic))
		httpConfig.post("/apis/cheesey", cheesey).then(reply => {
			let {message, type} = reply
		// 	if (reply.status === 200) {
		// 		resetForm()
		//
		// 	}
		// 	setStatus({message, type})
		})
	}
	return (
		<>
			<Col className="pr-5 text-center">
				<Image fluid width={400} height={400} src={foodpic.foodpicUrl} alt={foodpic.foodpicCaption}/>
				<p>{foodpic.foodpicCaption}</p>
				<Button onClick={submitCheesey} variant='flat'><strong>Cheesey</strong></Button>
			</Col>
		</>
	)
}