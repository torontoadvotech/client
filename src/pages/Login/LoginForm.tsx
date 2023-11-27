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
      // const res = await API.login({ email, password });
      //TODO: remove line below and uncommen line above
      let res = await API.login({ email, password });
      console.log(res, "login");
      //TODO: remove line below
      const mockRes = {
        "status": "success",
        "token": "mocktoken",
        "data": {
            "user": {
                "location": "[object Object]",
                "role": "mentee",
                "mentors": [],
                "mentees": [],
                "_id": "5e85365528f22e04b7679203",
                "name": "Steve Rogers",
                "email": "srogers@gmail.com",
                "photo": "https://torontoadvotech.blob.core.windows.net/5e85365528f22e04b7679203/profile-picture-1595999551616-5e85365528f22e04b7679203.jpeg",
                "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac velit nec neque pulvinar blandit malesuada eget libero. Nullam vitae euismod tortor. Vestibulum ullamcorper ex vitae nulla facilisis, et feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac velit nec neque pulvinar blandit malesuada eget libero. Nullam vitae euismod tortor. Vestibulum ullamcorper ex vitae nulla facilisis, et feugiat.",
                "__v": 0,
                "passwordResetExpires": "2020-04-26T03:13:41.562Z",
                "passwordResetToken": "c0a64f6938bc3e53d3a7cd453e497350f163b61f7330722189bc188953264d20",
                "refreshToken": "3b07427302aae6b69ddfa6b83936e1c38a2a63969c612e582cf93705e890c573",
                "refreshTokenExpires": "2023-12-01T15:31:48.977Z",
                "pronouns": "He / Him",
                "onboardingFormCompleted": false,
                "initialOnboardFormCompleted": true
            }
        }
    };
      // If login fails show an error
      if (res.error) {
        // return setError(true);
        //TODO: uncomment line above and remove line below
        res = mockRes;
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
      <h3>Log in</h3>
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
