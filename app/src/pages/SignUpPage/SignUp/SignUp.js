import React from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import * as Yup from "yup";
import {Formik} from "formik";

import {SignUpPageContent} from "./SignUpPageContent";
import {httpConfig} from "../../../shared/utils/http-config";


export const SignUp = () => {
	const signUp = {
		profileName: "",
		profileEmail: "",
		profileEmailConfirm: "",
		profilePassword: "",
		profilePasswordConfirm: "",
	};

	const validator = Yup.object().shape({
		profileName: Yup.string()
			.min(2, "Name is too short")
			.max(140, "Name is too long"),
		profileEmail: Yup.string()
			.email("Email must be a valid email")
			.required("Email is required"),
		profileEmailConfirm: Yup.string()
			.email("Email must be a valid email")
			.required("Email confirm is required"),
		profilePassword: Yup.string()
			.required("Password is required")
			.min(8, "Password must have at least eight characters"),
		profilePasswordConfirm: Yup.string()
			.required("Confirm password is required")
			.min(8, "Confirmed password must have at least eight characters")
	});

	const submitSignUp = (values, {resetForm, setStatus}) => {

	httpConfig.post("/apis/signup/", values)
		.then(reply => {
				let {message, type} = reply;

				if(reply.status === 200) {
					resetForm();
					setStatus({message, type});
				}
				setStatus({message, type});
			}
		);
	};

	return (

		<Formik
			initialValues={SignUp}
			onSubmit={submitSignUp}
			validationSchema={validator}
		>
			{SignUpPageContent}
		</Formik>

	)

}
