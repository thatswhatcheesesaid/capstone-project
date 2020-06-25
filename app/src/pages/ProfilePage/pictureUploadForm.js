import React from "react"
import * as Yup from "yup";
import { httpConfig } from "../../../src/utils/http-config";
import { Formik } from "formik";
// import { ProfilePage } from './ProfilePage'
import { ImageDropZone } from './ImageDropZone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'

export const EditProfileForm = () => {

  const initialValues = {
    foodpicCaption: "",
  };

  const validationObject = Yup.object().shape({
    foodpicCaption: Yup.string().required("content for the caption required")
  });

  function submitPhotoAndFoodpic (values, {resetForm, setStatus}) {

    const submitFoodpic = (foodpic) => {
      httpConfig.post(`/apis/foodpic/`, foodpic)
        .then(reply => {
          let {message, type} = reply;

          if (reply.status === 200) {
            resetForm();
          }
          setStatus({message, type});
          return (reply)
        })
    };

      httpConfig.post("/apis/image-upload/", values.foodpicUrl)
        .then(reply => {
            let {message, type} = reply;

            if (reply.status === 200) {
              submitFoodpic({...values, foodpicUrl:message})
            } else {
              setStatus({message, type});
            }
          }
        );
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitPhotoAndFoodpic}
      validationSchema={validationObject}
    >
      {(props) => {
        console.log("", props)
        const {
          // status,
          values,
          errors,
          touched,
          // dirty,
          setFieldValue,
          // isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <>
        <form onSubmit={handleSubmit}>
          <ImageDropZone
            formikProps={{
              values,
              handleChange,
              handleBlur,
              setFieldValue,
              fieldValue:"foodpicUrl"
            }}
          />
          <div className="form-group">
            <label htmlFor="profilePhone">Caption</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <FontAwesomeIcon icon="commenting"/>
                </div>
              </div>
              <input
                className="form-control"
                id="foodpicCaption"
                type="text"
                value={values.foodpicCaption}
                placeholder="Enter a caption"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>


            {
              errors.foodpicCaption && touched.foodpicCaption && (
                <div className="alert alert-danger">
                  {errors.foodpicCaption}
                </div>
              )

            }
          </div>
          <Button variant="primary" type="submit"> Submit </Button>
          <Button variant="danger" onClick={handleReset}> Reset Form</Button>
        </form>
        </>
        )
      }}
    </Formik>
  )

};