import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { UserType } from "../../lib/types";
import * as Yup from "yup";

const PartnersForm = () => {
  const initialValues: Partial<UserType> = {
    email: "",
    password: "",
  };

  const onSubmit = () => {

  }

  // Validate user inputs
  const validationSchema = Yup.object({
    companyName: Yup.string().required("Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    phoneNumber: Yup.number().required('Required'),
    industry: Yup.string().required("Required"),
    summaryOfRequest: Yup.string().required("Required"),
  });

  return ( 
    <div className="form-container form-container__partners">
      <p>Join the Team</p>
      <p>All submissions will be reviewed by our team, and a response will be sent back within 2-3 business days.</p>

      <Formik 
        initialValues={initialValues} 
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>
          <div className="field-container">
            <label htmlFor="company-name">Company name</label>
            <ErrorMessage 
              component="span" 
              className="form-error" 
              name="company-name" 
            />
            <Field 
              name="company-name" 
              type="companyName" 
            />
          </div>
          <div className="field-container">
            <label htmlFor="email">Email</label>
            <ErrorMessage 
              component="span" 
              className="form-error" 
              name="email" 
            />
            <Field 
              name="email"
              type="email"
            />
          </div>
          <div className="field-container">
            <label htmlFor="phone-number">Phone number</label>
            <ErrorMessage 
              component="span" 
              className="form-error" 
              name="phone-number" 
            />
            <Field 
              name="phone-number"
              type="phoneNumber"
            />
          </div>
          <div className="field-container">
            <label htmlFor="industry">Industry</label>
            <ErrorMessage 
              component="span" 
              className="form-error" 
              name="industry" 
            />
            <Field 
              name="industry"
              type="industry"
            />
          </div>
          <div className="field-container">
            <label htmlFor="summary-of-request">Summary of request</label>
            <ErrorMessage 
              component="span" 
              className="form-error" 
              name="summary-of-request" 
            />
            <Field 
              name="summary-of-request"
              type="summaryOfRequest"
            />
          </div>
          <button type="submit" className="button-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default PartnersForm;