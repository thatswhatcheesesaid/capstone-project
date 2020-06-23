import React from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { SignUpPageContent } from './SignUp/SignUpPageContent'
import { LogInContent} from './LogIn/LogInContent'

export function LogInSignUp() {
	return(
		<>
			<Container fluid style={{ backgroundColor: 'rgb(15, 14, 23)' }}>
				<Row>
					<Col style={{ color: 'rgb(167, 169, 190)'}}>
						{SignUpPageContent}
					</Col>
					<Col>
						{LogInContent}
					</Col>
				</Row>
			</Container>
		</>
	)
}