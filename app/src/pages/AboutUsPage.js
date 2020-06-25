import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DropdownButton from 'react-bootstrap/DropdownButton'


export function AboutUsPage() {
	return (
		<>
			<Container fluid className="text-center text-white py-5" style={{backgroundColor: 'rgb(15, 14, 23)'}}>
				<Row>
					<Col>

						{/* This is the About us section */}

						<h1><u>About Us</u></h1>
						<p>Squirty cheese manchego cheesecake. Squirty cheese mascarpone stinking bishop stinking bishop
							fromage cheese and wine mascarpone chalk and cheese. Cheeseburger cream cheese stinking bishop
							halloumi smelly cheese taleggio brie lancashire. Pecorino dolcelatte cheese and wine smelly cheese
							monterey jack lancashire. Cow chalk and cheese hard cheese. Port-salut hard cheese red leicester
							feta when the cheese comes out everybody's happy cauliflower cheese bavarian bergkase caerphilly.
							Everyone loves croque monsieur st. agur blue cheese stinking bishop cheese strings paneer boursin
							cheese and
							biscuits. Parmesan emmental cheese and wine port-salut airedale manchego.</p>
					</Col>
				</Row>

				{/* This is the contact form */}

				<h1><u>Contact</u></h1>
				<Row>
					<Col>
						<Form>
							<Form.Group controlId="name">
								<Form.Control type="name" placeholder="Your name"/>
							</Form.Group>

							<Form.Group controlId="email">
								<Form.Control type="email" placeholder="Your email"/>
							</Form.Group>

							<Form.Group controlId="phone">
								<Form.Control type="password" placeholder="Your phone number"/>
							</Form.Group>


							<DropdownButton id="dropdown-basic-button" title="Select">
								<Dropdown.Item href="#/action-1">submit a restaurant</Dropdown.Item>
								<Dropdown.Item href="#/action-2">General inquiry</Dropdown.Item>
							</DropdownButton>
						</Form>
					</Col>

					<Col>
						<textarea className="form-control" id="message" placeholder="Your Message" name="message"
									 rows="5">Your message</textarea>
					</Col>
				</Row>

				<Row fluid className={'py-3'}>
					<Col fluid className='text-center'>
						<Button variant="primary" type="captcha">
							Captcha
						</Button>
					</Col>
				</Row>

				<Row fluid>
					<Col fluid className='text-center'>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Col>
				</Row>
			</Container>

		</>
	)}