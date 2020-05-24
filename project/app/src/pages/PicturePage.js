import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
// import Style from 'react-bootstrap/Style'

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
		<Navbar>
			<Navbar.Brand className="display-1">
				<span style={{fontSize: 48}}>That's What Cheese Said</span>
			</Navbar.Brand>
			<Nav className="ml-auto">
				<Button className="mx-3"><Nav.Link href="#">Restaurants</Nav.Link></Button>
				<Button classnName="mx-3"><Nav.Link href="#Pictures">Pictures</Nav.Link></Button>
				<Button className="mx-3"><Nav.Link href="#Log In">Log In</Nav.Link></Button>
				<Button className="mx-3"><Nav.Link href="#About Us">About Us</Nav.Link></Button>
		</Nav>
		</Navbar>
	</Container>

<main style={{ backgroundColor: "black" }}>

{/*This is the title*/}
		<Container fluid className="text-center text-light py-5">
			<h1 className="display-1" style={{ color: 'rgb(167, 169, 190)'}}>Mac and Cheese</h1>
		</Container>

{/*This is the top 5 pics*/}
		<Container fluid>
			<h1 className="display-3 text-center py-4" style={{ color: 'rgb(167, 169, 190)'}}>Top 5</h1>
			<Row className="justify-content-around">
				<Image src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
				<Image src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
				<Image src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
				<Image src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
				<Image src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
			</Row>
		</Container>

{/*This is the voting*/}
	<Container fluid className="text-light">
		<h1 className="display-3 text-center py-4" style={{ color: 'rgb(167, 169, 190)'}}>Vote Here</h1>
		<Row className="justify-content-center">
			<Col className="pr-5 text-center">
				<Image src="blue-box-500px.png" alt="this is a box of mac and cheese"/>
				<p style={{ color: 'rgb(167, 169, 190)'}}>This is the name of the restaurant</p>
				<Button variant='flat'><strong>Cheesey</strong></Button>
			</Col>
			<Col className="pl-5 text-center">
				<Image src="blue-box-500px.png" alt="this is a box of mac and cheese"/>
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