import React from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import {FormDebugger} from '../../shared/FormDebugger'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const SignUpPageContent = (props) => {

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

		<form onSubmit={handleSubmit}>
			<Container fluid style={{ backgroundColor: 'rgb(15, 14, 23)' }}>
				<Row>
					<Col style={{ color: 'rgb(167, 169, 190)'}}>
						<h1>Create a new account</h1>

		<div className="form-group">
			<label htmlFor="profileName">Profile name</label>
			<div className="input-group">
				<div className="input-group-prepend">
					<div className="input-group-text">
						<FontAwesomeIcon icon="user-circle"/>
					</div>
				</div>
				<input
					className="form-control"
					name="profileName"
					type="text"
					value={values.profileName}
					placeholder="Profile Name"
					onChange={handleChange}
					onBlur={handleBlur}

				/>
			</div>
			{
				errors.profileName && touched.profileName && (
					<div className="alert alert-danger">
						{errors.profileName}
					</div>
				)
			}
		</div>

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

			<div className="form-group">
				<label htmlFor="profileEmailConfirm">Confirm Your Email Address</label>
				<div className="input-group">
					<div className="input-group-prepend">
						<div className="input-group-text">
							<FontAwesomeIcon icon="envelope"/>
						</div>
					</div>
					<input
						className="form-control"
						type="email"
						id="profileEmailConfirm"
						placeholder="Email Confirm"
						value={values.profileEmailConfirm}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</div>
				{errors.profileEmailConfirm && touched.profileEmailConfirm && (
					<div className="alert alert-danger">{errors.profileEmailConfirm}</div>
				)}
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
				<button className="btn btn-primary mb-2" type="submit">Submit</button>
				<button
					className="btn btn-danger mb-2"
					onClick={handleReset}
					disabled={!dirty || isSubmitting}
				>Reset
				</button>
			</div>

			<FormDebugger {...props} />
					</Col>
				</Row>
			</Container>
		</form>

		{
			status && (<div className={status.type}>{status.message}</div>)
		}



	</>


)
};