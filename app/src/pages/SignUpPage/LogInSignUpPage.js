import React from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { SignUp } from './SignUp/SignUp'
import { LogIn} from './LogIn/LogIn'

export function LogInSignUp() {
	return(
		<>
			<Container fluid className="text-white" style={{ backgroundColor: 'rgb(15, 14, 23)' }}>
				<Row>
					<Col md={6}>
						<SignUp/>
					</Col>
					<Col md={6}>
						<LogIn/>
					</Col>
				</Row>
			</Container>
		</>
	)
}