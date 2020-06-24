import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { fetchAllFoodpic } from '../../store/foodpic'
import { useDispatch } from 'react-redux'
import { AxiosInstance as httpConfig } from 'axios'
// import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";

export function TwoRandomFoodpics({foodpic}) {

	const dispatch = useDispatch()

	const submitCheesey = (values, {resetForm, setStatus}) => {
		httpConfig.get("/apis/foodpic", values).then(reply => {
			let {message, type} = reply
			if (reply.status === 200) {
				resetForm()
				dispatch(fetchAllFoodpic())

			}
			setStatus({message, type})
		})
	}
	return (
		<>
			<Col className="pr-5 text-center">
				<Image fluid width={400} src={foodpic.foodpicUrl} alt={foodpic.foodpicCaption}/>
				<p>{foodpic.foodpicCaption}</p>
				<Button onClick={submitCheesey} variant='flat'><strong>Cheesey</strong></Button>
			</Col>
		</>
	)
}