import React, { useState } from "react";
import SuccessModal from "../../components/Modal/SuccessModal/SuccessModal";
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
  const [formSubmit, setFormSubmit] = useState(false);

  const initialValues: PartnersType = {
    companyName: "",
    industry: "",
    summaryOfRequest: "",
    phoneNumber: "",
    email: "",
  };

  function validateTelephoneNumber(tel: string) {
    let error;
    // Phone regex referenced here: https://github.com/dockwa/simple-react-validator. Open Source MIT License
    const phoneRegex = /^(\+?\d{0,3})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)\s?$/;

    if (!phoneRegex.test(tel)) {
      error = "Invalid phone number. 123-456-7890";
    }
    return error;
  }

  const onSubmit = (values: PartnersType, { resetForm }) => {
    const { companyName } = values;
    setFormSubmit(true);
    resetForm({ values: "" });
  };

  const closeModal = () => {
    setFormSubmit(false);
  };

  // Validate user inputs
  const validationSchema = Yup.object({
    companyName: Yup.string().required("Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    phoneNumber: Yup.string().required("Required"),
    industry: Yup.string().required("Required"),
    summaryOfRequest: Yup.string().required("Required"),
  });

  return (
    <>
      <div className='form-container form-container__partners'>
        <h3>Join the Team</h3>
        <p>
          All submissions will be reviewed by our team, and a response will be
          sent back within 2-3 business days.
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className='text-inputs'>
              <div className='field-container'>
                <label htmlFor='company-name'>Company name</label>
                <ErrorMessage
                  component='span'
                  className='form-error'
                  name='companyName'
                />
                <Field name='companyName' placeholder='John Smith' />
              </div>
              <div className='field-container'>
                <label htmlFor='email'>Email</label>
                <ErrorMessage
                  component='span'
                  className='form-error'
                  name='email'
                />
                <Field name='email' placeholder='johnsmith@gmail.com' />
              </div>
              <div className='field-container'>
                <label htmlFor='phone-number'>Phone number</label>
                <ErrorMessage
                  component='span'
                  className='form-error'
                  name='phoneNumber'
                />
                <Field name='phoneNumber' validate={validateTelephoneNumber} placeholder='416-111-1111' />
              </div>
              <div className='field-container'>
                <label htmlFor='industry'>Industry</label>
                <ErrorMessage
                  component='span'
                  className='form-error'
                  name='industry'
                />
                <Field name='industry' placeholder='Design' />
              </div>
            </div>
            <div className='textarea'>
              <div className='field-container'>
                <label htmlFor='summary-of-request'>Summary of request</label>
                <ErrorMessage
                  component='span'
                  className='form-error'
                  name='summaryOfRequest'
                />
                <Field
                  name='summaryOfRequest'
                  component='textarea'
                  placeholder='Hello, I would like to host an event.&#10;&#10;Thanks,&#10;&#10;John'
                />
              </div>
              <button type='submit' className='button-primary'>
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      {formSubmit && (
        <SuccessModal onClose={closeModal} />
      )}
    </>
  );
};

export default PartnersForm;
