import React from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import * as Yup from "yup";
import {Formik} from "formik";

import {LogInContent} from "./LogInContent";
import {httpConfig} from "../../../shared/utils/http-config";


export const LogIn = () => {
	const logIn = {
		profileEmail: "",
		profilePassword: "",
	};

	const validator = Yup.object().shape({
		profileEmail: Yup.string()
			.email("Email must be a valid email")
			.required("Email is required"),
		profilePassword: Yup.string()
			.required("Password is required")
			.min(8, "Password must have at least eight characters"),
	});

	const submitSignIn = (values, {resetForm, setStatus}) => {

		httpConfig.post("/apis/sign-in/", values)
			.then(reply => {
					let {message, type} = reply;

					if (reply.status === 200) {
						resetForm();
						setStatus({message, type});
					}
					setStatus({message, type});
				}
			);
	};

	return (

		<Formik
			initialValues={logIn}
			onSubmit={submitSignIn}
			validationSchema={validator}
		>
			{LogInContent}
		</Formik>
	)
}