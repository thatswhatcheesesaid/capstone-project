import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
// import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'

export function ProfilePage () {

	return (

	<>

{/*here are the button colors*/}
		<style type ='text/css'>
			{`
			.btn-flat {
			background-color: rgb(255, 137, 6);
			color: black;
			}
		
			.btn-rigid {
			background-color: rgb(15, 14, 23);
			color: white;
			}
		
			`}
		</style>

{/*This is the navbar*/}
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
					<Button className="mx-3 " ><Nav.Link href="#">Restaurants</Nav.Link></Button>
					<Button classnName="mx-3"><Nav.Link href="#Pictures">Pictures</Nav.Link></Button>
					<Button className="mx-3"><Nav.Link href="#Log In">Log In</Nav.Link></Button>
					<Button className="mr-3"><Nav.Link href="#About Us">About Us</Nav.Link></Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</Container>

{/*This is the Body*/}
<main style={{ backgroundColor: 'rgb(15, 14, 23)' }}>

{/*This is the jumbotron*/}
	<Jumbotron style={{ backgroundColor: 'rgb(15, 14, 23)' }}>
		<h1 className="my-3" style={{ color: 'rgb(167, 169, 190)'}}>Profile</h1>
			<Button variant="flat" className="mx-2">Upload your photo</Button>
			<Button variant="flat" className="mx-2">Reset Password</Button>
	</Jumbotron>

{/*This is where the pictures live*/}
	<Container>

		<Row className="d-flex justify-content-around">
			<Image src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
			<Image src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
			<Image src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
			<Image src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
			<Image src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
		</Row>

		<Row className="d-flex justify-content-around">
			<Image src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
			<Image src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
			<Image src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
			<Image src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
			<Image src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
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
)}