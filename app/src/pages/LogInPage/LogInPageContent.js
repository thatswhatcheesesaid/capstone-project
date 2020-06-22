import React from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'


export const LogInPageContent = (props) => {

	const {
		status,
		values,
		errors,
		touched,
		dirty,
		isSubmitting,
		handleChange,
		handleBlur,
		handleSubmit,
		handleReset
	} = props;

	return (
		<>

			<Container fluid style={{ backgroundColor: 'rgb(15, 14, 23)' }}>
				<Row>
					<Col style={{ color: 'rgb(167, 169, 190)'}}>
						<h1>Create a new account</h1>
						<Form>
							<Form.Group controlId="username">
								<Form.Label>Username:</Form.Label>
								<Form.Control type="username" placeholder="Enter username"/>
							</Form.Group>

							<Form.Group controlId="newEmail">
								<Form.Label>Email address:</Form.Label>
								<Form.Control type="email" placeholder="Enter email"/>
							</Form.Group>

							<Form.Group controlId="newEmailConformation">
								<Form.Label>Confirm email address:</Form.Label>
								<Form.Control type="email" placeholder="Retype email"/>
							</Form.Group>

							<Form.Group controlId="newPassword">
								<Form.Label>Password:</Form.Label>
								<Form.Control type="password" placeholder="Password"/>
							</Form.Group>

							<Form.Group controlId="newPasswordConformation">
								<Form.Label>Confirm password:</Form.Label>
								<Form.Control type="password" placeholder="Retype password"/>
							</Form.Group>

							<Button variant="primary" type="submit">
								Submit
							</Button>
							<Button variant="primary" type="submit">
								Captcha
							</Button>
						</Form>
					</Col>
					<Col style={{ color: 'rgb(167, 169, 190)'}}>
						<h1>Log in</h1>
						<Form>
							<Form.Group controlId="formBasicEmail"></Form.Group>

							<Form.Label>Email address:</Form.Label>
							<Form.Control type="email" placeholder="Enter email"/>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password:</Form.Label>
								<Form.Control type="password" placeholder="Enter password"/>
							</Form.Group>

							<Button variant="primary" type="submit">
								Enter
							</Button>

							<Button variant="primary" type="submit">
								Forgot password?
							</Button>
						</Form>
						<Image className={'py-3'} src='BlueBox.jpg' width={300} rounded/>
					</Col>
				</Row>
			</Container>

		</>
	)}