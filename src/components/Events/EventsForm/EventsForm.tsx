import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { EventsFormTypes } from "../../../lib/types";
import API from "../../../lib/API";

require('./eventsForm.scss');

interface EventFormProps {
  formModal(): void;
}

const EventForm: React.FC<EventFormProps> = ({
  formModal
}) => {

  const [formSubmitError, setFormSubmitError] = useState<boolean>(false);
  // const [successModal, setSuccessModal] = useState<boolean>(false);

  // Initial form values
  const initialValues: Partial<EventsFormTypes> = {
    name: "",
    email: "",
    phoneNumber: "",
    request: ""
  };

  function validateTelephoneNumber(tel: string) {
    let error;
    // Phone regex referenced here: https://github.com/dockwa/simple-react-validator. Open Source MIT License
    const phoneRegex = /^(\+?\d{0,3})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)\s?$/;

    if (!phoneRegex.test(tel)) {
      error = 'Invalid phone number. 123-456-7890';
    }
    return error;
  }

  // Validate user inputs before submission (will also be validated by the server)
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    phoneNumber: Yup.string().required("Required"),
    request: Yup.string().required("Required"),
  });

  const onSubmit = (values: EventsFormTypes, { resetForm }) => {
    const { name, email, phoneNumber, request } = values;
    try {
      const res = API.EventsFormSubmit({ name, email, phoneNumber, request });

      // Uncomment when API updated
      // if (res.error) {
      if (!res) {
        return setFormSubmitError(true);
      }

      formModal();
      resetForm({ values: '' });

    } catch (err) {
      return console.log(err);
    }


  }
  return (

    <section className="form-section grid-justify-center">
      <div className="form-section-header">
        <h3 className="form-section-header-title">
          Host an event
					</h3>
        <p className="form-section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere tortor egestas massa
          scelerisque eleifend quam. Euismod scelerisque eu tempor arcu, sit ornare sit.
					</p>
      </div>
      {formSubmitError &&
        <div className="form-submit-error text-is-red">There was an error with your form submission, please refresh the page and retry again.</div>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="form-wrapper">
          <div className="field-container form-name">
            {/* ErrorMessage should be before all other sibling elements to ensure CSS ~ selector applies */}
            <ErrorMessage component="span" className="form-error" name="name" />
            <label htmlFor="name">Name</label>
            <Field className="input-height-50" name="name" type="text" placeholder="Jenna Hunter" />
          </div>
          <div className="field-container form-email">
            <ErrorMessage component="span" className="form-error" name="email" />
            <label htmlFor="email">Email</label>
            <Field className="input-height-50" name="email" type="email" placeholder="jenna.hunter@gmail.com" />
          </div>

          <div className="field-container form-phone">
            <ErrorMessage component="span" className="form-error" name="phoneNumber" />
            <label htmlFor="phone">Phone Number</label>
            <Field className="input-height-50" name="phoneNumber" validate={validateTelephoneNumber} placeholder="416-111-1111" />
          </div>
          <div className="field-container form-request">
            <ErrorMessage component="span" className="form-error" name="request" />
            <label htmlFor="request">Summary of Request</label>
            <Field name="request" type="text" as="textarea" placeholder="Hello, I would like to host an event&#10; &#10;Thanks,&#10;&#10;John" />

          </div>
          <button type="submit" className="button-primary form-submit-button">
            Submit
          </button>
        </Form>
      </Formik>
    </section>
  )
}

export default EventForm;