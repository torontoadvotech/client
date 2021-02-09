import React from 'react';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { UserProfileForm } from '../../lib/types';
import AccountProfileForm from "../../components/AccountProfileForm/AccountProfileForm";
import { User } from '../../containers/user.container';

export interface SetupProgressBarProps {
  currentProgress: number;
}

const InitialAccountSetup: React.FunctionComponent<SetupProgressBarProps> = (props) => {

  const { user, setUser } = User.useContainer();

  const initialValues: Partial<UserProfileForm> = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    education: "",
    certifications: "",
    languages: "",
    organizations: "",
    skills: ""
  };

  // Validate user inputs before submission (will also be validated by the server)
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    dateOfBirth: Yup.string().required("Required"),
    education: Yup.string().required("Required"),
  });

  const onSubmit = () => {
    console.log('submitted');

  }

  return (
    <section>
      <h3>This helps us better match you with mentors</h3>
      <AccountProfileForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        user={user}
      />
      {/* <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="form-wrapper">
          <div className="field-container">
            
            <ErrorMessage component="span" className="form-error" name="firstName" />
            <label htmlFor="firstName">First Name*</label>
            <Field name="firstName" type="text" placeholder="Jenna" />
          </div>
          <div className="field-container">
            
            <ErrorMessage component="span" className="form-error" name="lastName" />
            <label htmlFor="lastName">Last Name*</label>
            <Field name="lastName" type="text" placeholder="Hunter" />
          </div>
          <div className="field-container">
            
            <ErrorMessage component="span" className="form-error" name="dateOfBirth" />
            <label htmlFor="dateOfBirth">Date Of Birth*</label>
            <Field name="dateOfBirth" type="text" placeholder="Jenna Hunter" />
          </div>
          <div className="field-container">
            
            <ErrorMessage component="span" className="form-error" name="gender" />
            <label htmlFor="gender">How best do you identify</label>
            <Field name="gender" type="radio" value="Female" className="gender-female" />
            <Field name="gender" type="radio" value="Male" className="gender-male" />
            <Field name="gender" type="radio" value="Other" className="gender-other" />
            <Field name="gender" type="text" value="otherText" className="gender-other-text" />
          </div>
          <div className="field-container">
            
            <ErrorMessage component="span" className="form-error" name="education" />
            <label htmlFor="education">Education</label>
            <Field name="education" type="text" placeholder="Bachelor's" />
          </div>
          <div className="field-container">
            
            <ErrorMessage component="span" className="form-error" name="certifications" />
            <label htmlFor="certifications">Certifications</label>
            <Field name="certifications" type="text" placeholder="CIFC" />
          </div>
          <div className="field-container">
            
            <ErrorMessage component="span" className="form-error" name="languages" />
            <label htmlFor="languages">Languages</label>
            <Field name="languages" type="text" placeholder="" />
          </div>
          <div className="field-container">
            
            <ErrorMessage component="span" className="form-error" name="organizations" />
            <label htmlFor="organizations">Organizations</label>
            <Field name="organizations" type="text" placeholder="" />
          </div>
          <div className="field-container">
            
            <ErrorMessage component="span" className="form-error" name="skills" />
            <label htmlFor="skills">Skills</label>
            <Field name="skills" type="text" placeholder="" />
          </div>
          <button type="submit" className="button-primary form-submit-button">
            Submit
          </button>
        </Form>
      </Formik> */}

    </section>
  )
}

export default InitialAccountSetup;