import React from "react"

export const LogInContent = (props) => {
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
				<h1>Log In</h1>


				{/*controlId must match what is passed to the initialValues prop*/}
				<div className="form-group">
					<label htmlFor="profileEmail">Email Address</label>
					<div className="input-group">
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
					<button style={{ backgroundColor: "rgb(246,137,11)"}} className="btn btn-primary mr-2 px-1" type="submit">Submit</button>
					<button
						style={{ backgroundColor: "rgb(24,27,172)"}}
						className="btn btn-primary mx-2"
						onClick={handleReset}
						disabled={!dirty || isSubmitting}
					>Reset
					</button>
				</div>


			</form>

			{
				status && (<div className={status.type}>{status.message}</div>)
			}

		</>
	)
}


