import React from "react"

import * as Yup from "yup";
import { Formik } from "formik";

import { LogInContent } from "./LogInContent";
import { httpConfig } from "../../../shared/utils/http-config";

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

  const submitLogIn = (values, {resetForm, setStatus}) => {

    httpConfig.post("/apis/sign-in/", values)
      .then(reply => {
          let {message, type} = reply;

            if (reply.status === 200 && reply.headers["authorization"]) {
              window.localStorage.removeItem("authorization");
              window.localStorage.setItem("authorization", reply.headers["authorization"]);
              resetForm();
            }
          setStatus({message, type});
        }
      );
  };

  return (

    <Formik
      initialValues={LogIn}
      onSubmit={submitLogIn}
      validationSchema={validator}
    >
      {LogInContent}
    </Formik>
  )
}