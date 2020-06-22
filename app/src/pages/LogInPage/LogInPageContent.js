import React from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import {FormDebugger} from '../../shared/FormDebugger'

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

	// return (
	// 	<>
	//
	// 		<Container fluid style={{ backgroundColor: 'rgb(15, 14, 23)' }}>
	// 			<Row>
	// 				<Col style={{ color: 'rgb(167, 169, 190)'}}>
	// 					<h1>Create a new account</h1>
	// 					<Form>
	// 						<Form.Group controlId="username">
	// 							<Form.Label>Username:</Form.Label>
	// 							<Form.Control type="username" placeholder="Enter username"/>
	// 						</Form.Group>
	//
	// 						<Form.Group controlId="newEmail">
	// 							<Form.Label>Email address:</Form.Label>
	// 							<Form.Control type="email" placeholder="Enter email"/>
	// 						</Form.Group>
	//
	// 						<Form.Group controlId="newEmailConformation">
	// 							<Form.Label>Confirm email address:</Form.Label>
	// 							<Form.Control type="email" placeholder="Retype email"/>
	// 						</Form.Group>
	//
	// 						<Form.Group controlId="newPassword">
	// 							<Form.Label>Password:</Form.Label>
	// 							<Form.Control type="password" placeholder="Password"/>
	// 						</Form.Group>
	//
	// 						<Form.Group controlId="newPasswordConformation">
	// 							<Form.Label>Confirm password:</Form.Label>
	// 							<Form.Control type="password" placeholder="Retype password"/>
	// 						</Form.Group>
	//
	// 						<Button variant="primary" type="submit">
	// 							Submit
	// 						</Button>
	// 						<Button variant="primary" type="submit">
	// 							Captcha
	// 						</Button>
	// 					</Form>
	// 				</Col>
	// 				<Col style={{ color: 'rgb(167, 169, 190)'}}>
	// 					<h1>Log in</h1>
	// 					<Form>
	// 						<Form.Group controlId="formBasicEmail"></Form.Group>
	//
	// 						<Form.Label>Email address:</Form.Label>
	// 						<Form.Control type="email" placeholder="Enter email"/>
	//
	// 						<Form.Group controlId="formBasicPassword">
	// 							<Form.Label>Password:</Form.Label>
	// 							<Form.Control type="password" placeholder="Enter password"/>
	// 						</Form.Group>
	//
	// 						<Button variant="primary" type="submit">
	// 							Enter
	// 						</Button>
	//
	// 						<Button variant="primary" type="submit">
	// 							Forgot password?
	// 						</Button>
	// 					</Form>
	// 					<Image className={'py-3'} src='BlueBox.jpg' width={300} rounded/>
	// 				</Col>
	// 			</Row>
	// 		</Container>
	//
	// 	</>
	// )}

return (
	<>
		<form onSubmit={handleSubmit}>
			{/*controlId must match what is passed to the initialValues prop*/}
			<div className="form-group">
				<label htmlFor="profileEmail">Email Address</label>
				<div className="input-group">
					<div className="input-group-prepend">
						<div className="input-group-text">
							<FontAwesomeIcon icon="envelope"/>
						</div>
					</div>
					<input
						className="form-control"
						id="profileEmail"
						type="email"
						value={values.profileEmail}
						placeholder="Enter email"
						onChange={handleChange}
						onBlur={handleBlur}

					/>
				</div>
				{
					errors.profileEmail && touched.profileEmail && (
						<div className="alert alert-danger">
							{errors.profileEmail}
						</div>
					)

				}
			</div>
			{/*controlId must match what is defined by the initialValues object*/}
			<div className="form-group">
				<label htmlFor="profilePassword">Password</label>
				<div className="input-group">
					<div className="input-group-prepend">
						<div className="input-group-text">
							<FontAwesomeIcon icon="key"/>
						</div>
					</div>
					<input
						id="profilePassword"
						className="form-control"
						type="password"
						placeholder="Password"
						value={values.profilePassword}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</div>
				{errors.profilePassword && touched.profilePassword && (
					<div className="alert alert-danger">{errors.profilePassword}</div>
				)}
			</div>
			<div className="form-group">
				<label htmlFor="profilePasswordConfirm">Confirm Your Password</label>
				<div className="input-group">
					<div className="input-group-prepend">
						<div className="input-group-text">
							<FontAwesomeIcon icon="key"/>
						</div>
					</div>
					<input

						className="form-control"
						type="password"
						id="profilePasswordConfirm"
						placeholder="Password Confirm"
						value={values.profilePasswordConfirm}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</div>
				{errors.profilePasswordConfirm && touched.profilePasswordConfirm && (
					<div className="alert alert-danger">{errors.profilePasswordConfirm}</div>
				)}
			</div>


			<div className="form-group">
				<label htmlFor="profileHandle">@Handle</label>
				<div className="input-group">
					<div className="input-group-prepend">
						<div className="input-group-text">
							<FontAwesomeIcon icon="dove"/>
						</div>
					</div>
					<input
						className="form-control"
						name="profileAtHandle"
						type="text"
						value={values.profileAtHandle}
						placeholder="@Handle"
						onChange={handleChange}
						onBlur={handleBlur}

					/>
				</div>
				{
					errors.profileAtHandle && touched.profileAtHandle && (
						<div className="alert alert-danger">
							{errors.profileAtHandle}
						</div>
					)
				}
			</div>


			<div className="form-group">
				<label htmlFor="profilePhone">Phone Number</label>
				<div className="input-group">
					<div className="input-group-prepend">
						<div className="input-group-text">
							<FontAwesomeIcon icon="phone"/>
						</div>
					</div>
					<input
						className="form-control"
						id="profilePhone"
						type="text"
						value={values.profilePhone}
						placeholder="Enter email"
						onChange={handleChange}
						onBlur={handleBlur}

					/>
				</div>

				{
					errors.profilePhone && touched.profilePhone && (
						<div className="alert alert-danger">
							{errors.profilePhone}
						</div>
					)

				}
			</div>
			<div className="form-group">
				<button className="btn btn-primary mb-2" type="submit">Submit</button>
				<button
					className="btn btn-danger mb-2"
					onClick={handleReset}
					disabled={!dirty || isSubmitting}
				>Reset
				</button>
			</div>


			<FormDebugger {...props} />
		</form>

		{
			status && (<div className={status.type}>{status.message}</div>)
		}
	</>


)
};