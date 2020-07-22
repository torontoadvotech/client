import React, { ReactElement } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import API from '../../lib/API';
import { UserAuth } from '../../lib/types';

interface Props {
  goBack: () => void;
  role: 'mentor' | 'mentee';
}

export default function SignupForm({ goBack, role }: Props): ReactElement {
  // Initial form values
  const initialValues: UserAuth = {
    fullName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  };

  // Validate user inputs before submission (will also be validated by the server)
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Must be at least 8 characters long')
      .required('Required'),
    passwordConfirm: Yup.string()
      .test(
        'Password confirm matches password',
        'Password does not match',
        function(value) {
          const { password } = this.parent;
          return password === value;
        }
      )
      .required('Required')
  });

  // Send request to backend to sign up user
  const onSubmit = (values: UserAuth) => {
    const { fullName, email, password, passwordConfirm } = values;

    API.signup({ fullName, email, password, passwordConfirm, role });
  };

  return (
    <div className="signup-form-container">
      <button className="back" onClick={goBack}>
        Back
      </button>
      <span className="text-slogan">
        The future<span>has female</span>
      </span>
      <h1>{role} Sign up</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="field-container">
            <label htmlFor="fullName">Full Name</label>
            <ErrorMessage
              component="span"
              className="form-error"
              name="fullName"
            />
            <Field name="fullName" type="text" />
          </div>
          <div className="field-container">
            <label htmlFor="email">Email</label>
            <ErrorMessage
              component="span"
              className="form-error"
              name="email"
            />
            <Field name="email" type="email" />
          </div>
          <div className="field-container">
            <label htmlFor="password">Password</label>
            <ErrorMessage
              component="span"
              className="form-error"
              name="password"
            />
            <Field name="password" type="password" />
          </div>
          <div className="field-container">
            <label htmlFor="passwordConfirm">Password Confirm</label>
            <ErrorMessage
              component="span"
              className="form-error"
              name="passwordConfirm"
            />
            <Field name="passwordConfirm" type="password" />
          </div>
          <button type="submit" className="button-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
