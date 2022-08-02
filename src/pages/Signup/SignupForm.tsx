import React, { ReactElement } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import API from "../../lib/API";
import { UserType } from "../../lib/types";

interface Props {
  goBack: () => void;
  role: "mentor" | "mentee";
}

export default function SignUpForm({ goBack, role }: Props): ReactElement {
  // Initial form values
  const initialValues: Partial<UserType> = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  // Validate user inputs before submission (will also be validated by the server)
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters long")
      .required("Required"),
    passwordConfirm: Yup.string()
      .test(
        "Password confirm matches password",
        "Password does not match",
        function(value) {
          const { password } = this.parent;
          return password === value;
        }
      )
      .required("Required"),
  });

  // Send request to backend to sign up user
  const onSubmit = (values: Partial<UserType>) => {
    const { name, email, password, passwordConfirm } = values;

    API.signUp({ name, email, password, passwordConfirm, role });
  };

  return (
    <div className="form-container form-container__signup">
      {/* <button className="back" onClick={goBack}>
        Back
      </button> */}
      {/* <span className="text-slogan">
        The future<span>has female</span>
      </span> */}
      <h3>{role} Sign up</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="field-container">
            <label htmlFor="name">Full Name</label>
            <ErrorMessage component="span" className="form-error" name="name" />
            <Field name="name" type="text" />
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
            <label htmlFor="passwordConfirm">Confirm Password</label>
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
