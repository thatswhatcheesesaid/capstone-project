import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
// import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'

export function ResetPage () {
	return (
	<>


	<main style={{ backgroundColor: 'rgb(15, 14, 23)' }} className="py-5">

{/*This is the header*/}
		<Container fluid>
			<h1 className="py-3 display-1" style={{ color: 'rgb(167, 169, 190)'}}>Profile</h1>
		</Container>

{/*This is the reset form*/}
	<Container fluid>
		<Row>
			<Col className="py-5">
		<Form fluid>

			<Form.Group controlId="formBasicPassword">
				<Form.Label>Old Password</Form.Label>
				<Form.Control type="password" placeholder="Old Password" />
			</Form.Group>

			<Form.Group controlId="formBasicPassword">
				<Form.Label>New Password</Form.Label>
				<Form.Control type="password" placeholder="New Password" />
			</Form.Group>

			<Form.Group controlId="formBasicPassword">
				<Form.Label>Confirm Password</Form.Label>
				<Form.Control type="password" placeholder="Confirm Password" />
			</Form.Group>

			<Button variant="primary" type="submit">
				Reset Password
			</Button>
		</Form>

			</Col>
			<Col>

			</Col>
		</Row>

		<Row></Row>
	</Container>
	</main>


	</>
	)
}