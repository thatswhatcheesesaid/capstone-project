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
			{/* This is the Navbar */}

			<Container fluid className="px-0" style={{backgroundColor: 'rgb(255, 137, 6)'}}>
				<Navbar collapseOnSelect expand="lg">
					<Navbar.Brand>
						<span style={{fontSize: 37}}>That's What Cheese Said</span>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ml-auto">
							<Button className="mx-3"><Nav.Link href="#">Restaurants</Nav.Link></Button>
							<Button className="mx-3"><Nav.Link href="#Pictures">Pictures</Nav.Link></Button>
							<Button className="mx-3"><Nav.Link href="#Log In">Log In</Nav.Link></Button>
							<Button className="mx-3"><Nav.Link href="#About Us">About Us</Nav.Link></Button>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
			<Container fluid className="text-center py-5" style={{backgroundColor: 'rgb(15, 14, 23)'}}>
				<Row>
					<Col style={{color: 'rgb(167, 169, 190)'}}>

						{/* This is the About us section */}

						<h1>About Us</h1>
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

				<h1 style={{color: 'rgb(167, 169, 190)'}}>Contact</h1>
				<Row>
					<Col style={{color: 'rgb(167, 169, 190)'}}>
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

					<Col style={{color: 'rgb(167, 169, 190)'}}>
						<textarea className="form-control" id="message" placeholder="Your Message" name="message"
									 rows="5"> Your message</textarea>
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

			{/* This is the Footer */}

			<Container fluid className="py-3" style={{backgroundColor: 'rgb(255, 137, 6)'}}>
				<Row>
					<Col>
						<p className="text-center">Copyright info</p>
					</Col>
				</Row>
			</Container>
		</>
	)}