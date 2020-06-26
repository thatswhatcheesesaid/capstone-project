import React from "react"
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
						<Image className="mx-auto my-0 d-block" src="twcs-logo-white.png" alt="That's What Cheese Said" width={275} />
					</Col>
				</Row>
			</Container>
		</>
	)
}