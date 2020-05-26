import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export function AboutUsPage() {
	return (
		<>

<Container fluid className="px-0" style={{ backgroundColor: 'rgb(255, 137, 6)' }}>
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
<Container>
	<Row>
		<Col>
			<h1>About Us</h1>
			<p>Squirty cheese manchego cheesecake. Squirty cheese mascarpone stinking bishop stinking bishop
				fromage cheese and wine mascarpone chalk and cheese. Cheeseburger cream cheese stinking bishop
				halloumi smelly cheese taleggio brie lancashire. Pecorino dolcelatte cheese and wine smelly cheese
				monterey jack lancashire. Cow chalk and cheese hard cheese. Port-salut hard cheese red leicester feta
				when the cheese comes out everybody's happy cauliflower cheese bavarian bergkase caerphilly. Everyone
				loves croque monsieur st. agur blue cheese stinking bishop cheese strings paneer boursin cheese and
				biscuits. Parmesan emmental cheese and wine port-salut airedale manchego.</p>
		</Col>
	</Row>
	<Row>
			<h1>Contact</h1>
		<Col>
			<Form>
				<Form.Group controlId="name">
					<Form.Label>Name</Form.Label>
					<Form.Control type="name" placeholder="Your name"/>
				</Form.Group>

				<Form.Group controlId="email">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Your email"/>
				</Form.Group>

				<Form.Group controlId="phone">
					<Form.Label>Phone</Form.Label>
					<Form.Control type="password" placeholder="Your phone number"/>
				</Form.Group>
				<Form.Group controlId="newPasswordConformation">
					<Form.Label>Confirm password:</Form.Label>
					<Form.Control type="password" placeholder="Retype password"/>
				</Form.Group>

				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Select
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1">submit a restaurant</Dropdown.Item>
						<Dropdown.Item href="#/action-2">General inquiry</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Form>
		</Col>

<Col>
				<Form.Group controlId="exampleForm.ControlTextarea1">
					<Form.Label>Your Message</Form.Label>
					<Form.Control as="textarea" rows="3" />
				</Form.Group>
</Col>
	</Row>
</Container>

			<Container fluid className= "py-3" style={{ backgroundColor: 'rgb(255, 137, 6)' }}>
				<Row>
					<Col>
						<p className="text-center">Copyright info</p>
					</Col>
				</Row>
			</Container>
		</>
	)}