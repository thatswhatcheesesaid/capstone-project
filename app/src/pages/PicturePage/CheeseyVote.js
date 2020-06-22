import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

export function CheeseyVote(props) {
	const {foodpic} = props
	return(
		<>
			<Col className="pr-5 text-center">
				<Image fluid src="blue-box-500px.png" alt="this is a box of mac and cheese"/>
				<p style={{ color: 'rgb(167, 169, 190)'}}>This is the name of the restaurant</p>
				<Button variant='flat'><strong>Cheesey</strong></Button>
			</Col>
			</>
	)
}
