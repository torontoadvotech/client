import React, { ReactElement, Dispatch, SetStateAction, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { UserType } from "../../lib/types";
import { User } from "../../containers/user.container";
import * as Yup from "yup";
import API from "../../lib/API";
import { Link } from 'react-router-dom';
// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGoogle
} from '@fortawesome/free-brands-svg-icons';


interface Props {
  onLogIn: Dispatch<SetStateAction<boolean>>;
}

export default function LoginForm({ onLogIn }: Props): ReactElement {
  const { setUser } = User.useContainer();
  const [error, setError] = useState(false);

  const initialValues: Partial<UserType> = {
    email: "",
    password: "",
  };

  // Validate user inputs
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async (values: Partial<UserType>) => {
    // Get input values from form
    const { email, password } = values;

    // Log the user in
    try {
      const res = await API.login({ email, password });
      // If login fails show an error
      if (res.error) {
        return setError(true);
      }

      // Save the user data in the container for future use
      setUser({ token: res.token, ...res.data.user });

      onLogIn(true);
    } catch (err) {
      return console.log(err);
    }
  };

  return (
    <div className="form-container form-continer__login">

      {/* <span className="text-slogan">
        The future<span>has female</span>
      </span> */}
      <h1>Log in</h1>
      {error && <span className="login-error">Incorrect login details</span>}
      <div className="button-row">
        <button className="button-primary" type="button">Log in with LinkedIn</button>
        <button className="button-primary" type="button" aria-label="Login with Facebook"><FontAwesomeIcon icon={faFacebookF} /></button>
        <button className="button-primary" type="button" aria-label="Login with Google"><FontAwesomeIcon icon={faGoogle} /></button>
      </div>
      <div className="separator">
        <p>or</p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
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
          <button type="submit" className="button-primary">
            Submit
          </button>
        </Form>
      </Formik>
      <div className="signup-row"><Link to="/signup">Not a member? Sign up</Link></div>
    </div>
  );
}
