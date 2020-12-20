import React from 'react';
import Modal from '../../components/Modal/Modal';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface PartnersType {
  companyName: string;
  industry: string;
  summaryOfRequest: string;
  phoneNumber: string;
  email: string;
}

const PartnersForm = () => {
  const initialValues: PartnersType = {
    companyName: '',
    industry: '',
    summaryOfRequest: '',
    phoneNumber: '',
    email: '',
  }

  const onSubmit = (values: PartnersType) => {
    const { companyName } = values;
    alert(`hi ${companyName}`);
    // <Modal title={'hi'} children={'children'} onClose={() => {}} />
  }

  // Validate user inputs
  const validationSchema = Yup.object({
    companyName: Yup.string().required("Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    phoneNumber: Yup.string().required('Required'),
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
              name="companyName" 
            />
            <Field 
              name="companyName" 
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
            />
          </div>
          <div className="field-container">
            <label htmlFor="phone-number">Phone number</label>
            <ErrorMessage 
              component="span" 
              className="form-error" 
              name="phoneNumber" 
            />
            <Field 
              name="phoneNumber"
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
            />
          </div>
          <div className="field-container">
            <label htmlFor="summary-of-request">Summary of request</label>
            <ErrorMessage 
              component="span" 
              className="form-error" 
              name="summaryOfRequest" 
            />
            <Field 
              name="summaryOfRequest"
              component="textarea"
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