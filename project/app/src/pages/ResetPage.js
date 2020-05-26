import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'

export function ResetPage () {
	return (
	<>

{/*This is the navbar*/}
	<Container fluid className="px-0" style={{ backgroundColor: 'rgb(255, 137, 6)' }}>
		<Navbar collapseOnSelect expand="lg">
			<Navbar.Brand>
				<span style={{fontSize: 37}}>That's What Cheese Said</span>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					<Button className="m-2" ><Nav.Link href="#">Restaurants</Nav.Link></Button>
					<Button className="m-2"><Nav.Link href="#Pictures">Pictures</Nav.Link></Button>
					<Button className="m-2"><Nav.Link href="#Log In">Log In</Nav.Link></Button>
					<Button className="m-2"><Nav.Link href="#About Us">About Us</Nav.Link></Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</Container>


	<main style={{ backgroundColor: 'rgb(15, 14, 23)' }}>

{/*This is the header*/}
		<Container fluid>
			<h1 className="py-3 display-1" style={{ color: 'rgb(167, 169, 190)'}}>Profile</h1>
		</Container>

{/*This is the reset form*/}
	<Container fluid>
		<Row>
			<Col>
		<Form fluid>

			<Form.Group controlId="formBasicPassword">
				<Form.Label>Old Password</Form.Label>
				<Form.Control type="password" placeholder="Password" />
			</Form.Group>

			<Form.Group controlId="formBasicPassword">
				<Form.Label>New Password</Form.Label>
				<Form.Control type="password" placeholder="Password" />
			</Form.Group>

			<Form.Group controlId="formBasicPassword">
				<Form.Label>New Password</Form.Label>
				<Form.Control type="password" placeholder="Password" />
			</Form.Group>

			<Button variant="primary" type="submit">
				Reset Password
			</Button>
		</Form>

			</Col>
			<Col>
				<Image src="blue-box.jpg" alt="this is a box of mac and cheese"/>
			</Col>
		</Row>
	</Container>
	</main>


{/*This is the footer*/}
	<Container fluid className= "py-3" style={{ backgroundColor: 'rgb(255, 137, 6)' }}>
		<Row>
			<Col>
				<p className="text-center">Copyright info</p>
			</Col>
		</Row>
	</Container>

	</>
	)
}