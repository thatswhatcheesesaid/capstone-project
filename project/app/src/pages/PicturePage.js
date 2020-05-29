import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
// import Style from 'react-bootstrap/Style'

//**Here is the inline styling for text and background
//style={{ backgroundColor: 'rgb(255, 137, 6)' }} This is the navbar and footer
//style={{ backgroundColor: 'rgb(15, 14, 23)' }} This is for the body
//style={{ color: 'rgb(167, 169, 190)'}} This is for the text

export function PicturePage() {

	return(
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
					<Button className="mx-3"><Nav.Link href="#">Restaurants</Nav.Link></Button>
					<Button className="mx-3"><Nav.Link href="#Pictures">Pictures</Nav.Link></Button>
					<Button className="mx-3"><Nav.Link href="#Log In">Log In</Nav.Link></Button>
					<Button className="mx-3"><Nav.Link href="#About Us">About Us</Nav.Link></Button>
				</Nav>
		</Navbar.Collapse>
		</Navbar>
	</Container>


{/*This is the body of the page*/}
<main style={{ backgroundColor: 'rgb(15, 14, 23)' }}>

{/*This is the title*/}
		<Container fluid className="text-center py-5">
			<h1 className="display-1" style={{ color: 'rgb(167, 169, 190)'}}>Mac and Cheese</h1>
		</Container>

{/*This is the top 5 pics*/}
		<Container fluid>
			<h1 className="display-3 text-center py-4" style={{ color: 'rgb(167, 169, 190)'}}>Top 5</h1>
			<Row className="justify-content-around">
				<Image fluid src="carl-pic.png" alt="this is a box of mac and cheese"/>
				<Image fluid src="carl-pic.png" alt="this is a box of mac and cheese"/>
				<Image fluid src="carl-pic.png" alt="this is a box of mac and cheese"/>
				<Image fluid src="carl-pic.png" alt="this is a box of mac and cheese"/>
				<Image fluid src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
			</Row>
		</Container>

{/*This is the voting*/}
	<Container fluid>
		<h1 className="display-3 text-center py-4" style={{ color: 'rgb(167, 169, 190)'}}>Vote Here</h1>
		<Row className="justify-content-center">
			<Col className="pr-5 text-center">
				<Image fluid src="blue-box-500px.png" alt="this is a box of mac and cheese"/>
				<p style={{ color: 'rgb(167, 169, 190)'}}>This is the name of the restaurant</p>
				<Button variant='flat'><strong>Cheesey</strong></Button>
			</Col>
			<Col className="pl-5 text-center">
				<Image fluid src="blue-box-500px.png" alt="this is a box of mac and cheese"/>
				<p style={{ color: 'rgb(167, 169, 190)'}}>This is the name of the restaurant</p>
				<Button variant='flat'><strong>Cheesey</strong></Button>
			</Col>
		</Row>
	</Container>

{/*This is the bottom message*/}
	<Container fluid className="py-5 text-light">
		<Row>
			<Col>
				<h1 className="text-center"><strong>Vote on the cheesiest pictures. Each click will shuffle new pictures for more votes.</strong></h1>
			</Col>
		</Row>
	</Container>


{/*This is the upload button*/}
	<Container fluid className="pb-5 text-light">
		<Row>
			<Col className="text-center">
				<Button variant="flat"><strong>Upload your picture</strong></Button>
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
	)}