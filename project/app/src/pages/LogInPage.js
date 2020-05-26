import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'


export function LogInPage() {
	return (
		<>
			{/* This is the Navbar */}

			<Container fluid className="px-0" style={{ backgroundColor: 'rgb(255, 137, 6)' }}>
				<Navbar collapseOnSelect expand="lg">
					<Navbar.Brand>
						<span style={{fontSize: 37}}>That's What Cheese Said</span>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ml-auto">
							{/*<Nav.Link href="#">Restaurants</Nav.Link>*/}
							{/*<Nav.Link href="#Pictures">Pictures</Nav.Link>*/}
							{/*<Nav.Link href="#Log In">Log In</Nav.Link>*/}
							{/*<Nav.Link href="#About Us">About Us</Nav.Link>*/}
							<Button className="mx-3"><Nav.Link href="#">Restaurants</Nav.Link></Button>
							<Button className="mx-3"><Nav.Link href="#Pictures">Pictures</Nav.Link></Button>
							<Button className="mx-3"><Nav.Link href="#Log In">Log In</Nav.Link></Button>
							<Button className="mx-3"><Nav.Link href="#About Us">About Us</Nav.Link></Button>
						</Nav>
					</Navbar.Collapse>
				</Navbar>

				{/* These are log in and new user forms */}

			</Container>
			<Container fluid style={{ backgroundColor: 'rgb(15, 14, 23)' }}>
				<Row>
					<Col style={{ color: 'rgb(167, 169, 190)'}}>
						<h1>Create a new account</h1>
						<Form>
							<Form.Group controlId="username">
								<Form.Label>Username:</Form.Label>
								<Form.Control type="username" placeholder="Enter username"/>
							</Form.Group>

							<Form.Group controlId="newEmail">
								<Form.Label>Email address:</Form.Label>
								<Form.Control type="email" placeholder="Enter email"/>
							</Form.Group>

							<Form.Group controlId="newEmailConformation">
								<Form.Label>Confirm email address:</Form.Label>
								<Form.Control type="email" placeholder="Retype email"/>
							</Form.Group>

							<Form.Group controlId="newPassword">
								<Form.Label>Password:</Form.Label>
								<Form.Control type="password" placeholder="Password"/>
							</Form.Group>

							<Form.Group controlId="newPasswordConformation">
								<Form.Label>Confirm password:</Form.Label>
								<Form.Control type="password" placeholder="Retype password"/>
							</Form.Group>

							<Button variant="primary" type="submit">
								Submit
							</Button>
							<Button variant="primary" type="submit">
								Captcha
							</Button>
						</Form>
					</Col>
					<Col style={{ color: 'rgb(167, 169, 190)'}}>
						<h1>Log in</h1>
						<Form>
							<Form.Group controlId="formBasicEmail"></Form.Group>

							<Form.Label>Email address:</Form.Label>
							<Form.Control type="email" placeholder="Enter email"/>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password:</Form.Label>
								<Form.Control type="password" placeholder="Enter password"/>
							</Form.Group>

							<Button variant="primary" type="submit">
								Enter
							</Button>

							<Button variant="primary" type="submit">
								Forgot password?
							</Button>
						</Form>
						<Image className={'py-3'} src='BlueBox.jpg' width={300} rounded/>
					</Col>
				</Row>
			</Container>

			{/* This is the Footer */}

			<Container fluid className= "py-3" style={{ backgroundColor: 'rgb(255, 137, 6)' }}>
				<Row>
					<Col>
						<p className="text-center">Copyright info</p>
					</Col>
				</Row>
			</Container>
		</>
	)}
