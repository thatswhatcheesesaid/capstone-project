import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

export function TopFiveFoodpics({foodpic}) {
	return (
		<>
			<Col xs={6} md={2}>
				<Card className="border-0 bg-transparent">
					<Card.Img variant="top" src="blue-box.jpg" alt="Blue Box Mac" />
					<Card.Body>
						<Card.Title>Picture</Card.Title>
						<Card.Text>Score</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</>
	)
}