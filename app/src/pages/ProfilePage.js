import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
// import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'


//**Here is the inline styling for text and background
//style={{ backgroundColor: 'rgb(255, 137, 6)' }} This is the navbar and footer
//style={{ backgroundColor: 'rgb(15, 14, 23)' }} This is for the body
//style={{ color: 'rgb(167, 169, 190)'}} This is for the text

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

{/*This is the Body*/}
<main className="text-white" style={{ backgroundColor: 'rgb(15, 14, 23)' }}>

{/*This is the jumbotron*/}
	<Container fluid>
		<h1 className="py-3 display-1"><u>Profile</u></h1>
	</Container>


{/*This is the title*/}
	<Container fluid>
		<h1 className="display-3 pt-5"><u>Your Mac and Cheese Pictures</u></h1>
	</Container>
{/*This is where the pictures live*/}
	<Container fluid className="py-5">

		<Row className="d-flex justify-content-around">
			<Col xs={6} md={4} lg={2}>
				<Image fluid src="carl-pic.png" alt="this is a box of mac and cheese" width={200}/>
			</Col>
			<Col xs={6} md={4} lg={2}>
				<Image fluid src="kevin-picture.png" alt="this is a box of mac and cheese"width={200}/>
			</Col>
			<Col xs={6} md={4} lg={2}>
				<Image fluid src="matt-pic.png" alt="this is a box of mac and cheese"width={200}/>
			</Col>
			<Col xs={6} md={4} lg={2}>
				<Image fluid src="carl-pic.png" alt="this is a box of mac and cheese"width={200}/>
			</Col>
			<Col xs={6} md={4} lg={2}>
				<Image fluid src="kevin-picture.png" alt="this is a box of mac and cheese"width={200}/>
			</Col>
			<Col xs={6} md={4} lg={2}>
				<Image fluid src="matt-pic.png" alt="this is a box of mac and cheese"width={200}/>
			</Col>
			{/*<Image src="carl-pic.png" alt="this is a box of mac and cheese"/>*/}
			{/*<Image src="kevin-foodpic.png" alt="this is a box of mac and cheese"/>*/}
			{/*<Image src="matt-pic.png" alt="this is a box of mac and cheese"/>*/}
			{/*<Image src="carl-pic.png" alt="this is a box of mac and cheese"/>*/}
			{/*<Image src="kevin-foodpic.png" alt="this is a box of mac and cheese"/>*/}
			{/*<Image src="matt-pic.png" alt="this is a box of mac and cheese"/>*/}
		</Row>

		<Row className="d-flex justify-content-around pt-5" >
			<Col xs={6} md={4} lg={2}>
				<Image fluid src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
			</Col>
			<Col xs={6} md={4} lg={2}>
				<Image fluid src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
			</Col>
			<Col xs={6} md={4} lg={2}>
			<Image fluid src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
			</Col>
			<Col xs={6} md={4} lg={2}>
			<Image fluid src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
			</Col>
			<Col xs={6} md={4} lg={2}>
			<Image fluid src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
			</Col>
			<Col xs={6} md={4} lg={2}>
			<Image fluid src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
			</Col>
		</Row>
		<Row>
			<Col className="py-5">
				<h1 className="display-4"><u>Upload Your Photo</u></h1>
				<Form className="pt-5">
					<Form.File id="formcheck-api-regular">
						<Form.File.Label>Upload Photo</Form.File.Label>
						<Form.File.Input />
					</Form.File>
				</Form>
			</Col>
		</Row>

	</Container>

</main>


	</>
)}