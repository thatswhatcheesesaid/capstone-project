import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export function PicturePage(){
	return(
	<>
{/*This is the navbar*/}
		<Navbar>
			<Navbar.Brand>
				That's What Cheese Said
			</Navbar.Brand>
			{/*<Nav className="mr-auto">*/}
			{/*	<Nav.Link href="#">Restaurants</Nav.Link>*/}
			{/*	<Nav.Link href="#Pictures">Pictures</Nav.Link>*/}
			{/*	<Nav.Link href="#Log In">Log In</Nav.Link>*/}
			{/*	<Nav.Link href="#About Us">About Us</Nav.Link>*/}
			{/*</Nav>*/}
		</Navbar>

{/*This is the title*/}
		<Container className="text-center py-5">
			<h1 className="display-1">Mac and Cheese</h1>
		</Container>

{/*This is the top 5 pics*/}
		<Container>
			<h1 className="display-3 text-center py-4">Top 5</h1>
			<Row>
				<Image src="blue-box-300px.jpg" alt="this is a box of mac and cheese" className="pr-4"/>
				<Image src="blue-box-300px.jpg" alt="this is a box of mac and cheese" className="pl-0"/>
				<Image src="blue-box-300px.jpg" alt="this is a box of mac and cheese" className="px-4"/>
				<Image src="blue-box-300px.jpg" alt="this is a box of mac and cheese" className="pl-0"/>
				<Image src="blue-box-300px.jpg" alt="this is a box of mac and cheese" className="pl-4"/>
			</Row>
		</Container>

{/*This is the voting*/}
<Container>
	<h1 className="display-3 text-center py-4">Vote Here</h1>
	<Row>
		<Col className="pr-5 text-center">
			<Image src="blue-box-500px.png" alt="this is a box of mac and cheese"/>
			<p>This is the name of the restaurant</p>
		</Col>
		<Col className="pl-5 text-center">
			<Image src="blue-box-500px.png" alt="this is a box of mac and cheese"/>
			<p>This is the name of the restaurant</p>
		</Col>
	</Row>
</Container>

		</>
	)}