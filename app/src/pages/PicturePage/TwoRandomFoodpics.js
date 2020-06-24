import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";

export function TwoRandomFoodpics({foodpic}) {
	return (
		<>
			<Col className="pr-5 text-center">
				<Image fluid width={400} src={foodpic.foodpicUrl} alt={foodpic.foodpicCaption}/>
				<p>{foodpic.foodpicCaption}</p>
				<Button variant='flat'><strong>Cheesey</strong></Button>
			</Col>
		</>
	)
}