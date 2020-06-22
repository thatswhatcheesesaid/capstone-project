import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

export async function TopFiveFoodpics({foodpic}) {
	return (
		<>
			<Col xs={6} md={2}>
				<Card className="border-0 bg-transparent">
					<Card.Img variant="top" src="blue-box.jpg" alt="Blue Box Mac" />
					<Card.Body>
						<Card.Title><h3>#5 Picture</h3></Card.Title>
						<Card.Text><p>User/Restaurant Name</p><p>Score</p></Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</>
	)
}