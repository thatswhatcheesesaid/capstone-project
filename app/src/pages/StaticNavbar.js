import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'


export function StaticNavbar () {
	return (
	<>

{/*This is the navbar*/}
	<Container fluid className="px-0" style={{ backgroundColor: 'rgb(255, 137, 6)' }}>
		<Navbar collapseOnSelect expand="lg">
			<Navbar.Brand href="/">
				<img
					src="cheesesaid-favicon.png"
					width="45"
					height="45"
					className="d-inline-block align-top"
					alt="That's What Cheese Said Logo"
				/><span style={{fontSize: 30}}>That's What Cheese Said</span>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					<Button className="m-2" ><Nav.Link href="/restaurants">Restaurants</Nav.Link></Button>
					<Button className="m-2"><Nav.Link href="/cheesey">Pictures</Nav.Link></Button>
					<Button className="m-2"><Nav.Link href="/logInSignUp">Log In</Nav.Link></Button>
					<Button className="m-2"><Nav.Link href="/profile">Profile</Nav.Link></Button>
					<Button className="m-2"><Nav.Link href="/aboutUs">About Us</Nav.Link></Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</Container>



	</>
	)
}