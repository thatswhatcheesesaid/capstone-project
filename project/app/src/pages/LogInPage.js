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

			<Navbar collapseOnSelect expand="lg"  variant="dark" style={{ backgroundColor: 'rgb(255, 137, 6)' }}>
				<Navbar.Brand href='#home'>That's What Cheese Said</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav'/>
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='ml-auto'>
						<Button><Nav.Link href='#restaurants'>Restaurants</Nav.Link></Button>
						<Button><Nav.Link href='#pictures'>Pictures</Nav.Link></Button>
						<Button><Nav.Link href='#logIn'>Log In</Nav.Link></Button>
						<Button><Nav.Link href='#newUser'>New User</Nav.Link></Button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Container>
				<Row>
					<Col>
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
					<Col>
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
						<Image src='BlueBox.jpg' width={300} rounded/>
					</Col>
				</Row>
			</Container>
			<footer>Copy right info</footer>
		</>
	)}
