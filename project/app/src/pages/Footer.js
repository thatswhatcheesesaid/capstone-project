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

export function Footer() {

	function getYear() {
		const date = new Date()
		let year = date.getFullYear()
		return date.getFullYear()
	}
	return(
	<>


{/*This is the footer*/}
	<Container fluid className= "py-3" style={{ backgroundColor: 'rgb(255, 137, 6)' }}>
		<Row>
			<Col>
				<p className="text-center" id='target'>Copyright © {getYear()}</p>
			</Col>
		</Row>
	</Container>

		</>
	)}