import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { UserProfileForm, UserType } from '../../lib/types';

// interface AccountProfileForm {
//   firstName: string,
//   lastName: string,
//   dateOfBirth: string,
//   gender?: string,
//   education: string,
//   certifications?: string,
//   languages?: string,
//   organizations?: string,
//   skills?: string,
// }

interface AccountProfileInitialValues {
  initialValues: Partial<UserProfileForm>,
  onSubmit: any,
  user: UserType | null
}

const AccountProfileForm: React.FunctionComponent<AccountProfileInitialValues> = (props) => {
  // Validate user inputs before submission (will also be validated by the server)
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    photo: Yup.mixed(),
    dateOfBirth: Yup.string(),
    email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    bio: Yup.string(),
    gender: Yup.string(),
    education: Yup.string(),
    certifications: Yup.string(),
    languages: Yup.string(),
    organizations: Yup.string(),
    skills: Yup.string(),

  });
  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {formikProps => {
        return (
          <Form>
            <div className="field-container profile-image">
              <label htmlFor="photo">File upload</label>
              <img
                src={props.user?.photo}
                alt={`${props.user?.name}'s profile image`}
                className="profile-summary--img"
              />
              <input
                id="photo"
                name="photo"
                type="file"
                accept="image/*"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  if (event.currentTarget.files) {
                    formikProps.setFieldValue("photo", event.currentTarget.files[0]);
                  }
                }}
                className="form-control"
              />
            </div>
            <div className="field-container">
              <label htmlFor="name">Full Name</label>
              <ErrorMessage
                component="span"
                className="form-error"
                name="name"
              />
              <Field name="name" type="text" />
            </div>
            <div className="field-container">
              {/* ErrorMessage should be before all other sibling elements to ensure CSS ~ selector applies */}
              <ErrorMessage component="span" className="form-error" name="firstName" />
              <label htmlFor="firstName">First Name*</label>
              <Field name="firstName" type="text" placeholder="Jenna" />
            </div>
            <div className="field-container">
              {/* ErrorMessage should be before all other sibling elements to ensure CSS ~ selector applies */}
              <ErrorMessage component="span" className="form-error" name="lastName" />
              <label htmlFor="lastName">Last Name*</label>
              <Field name="lastName" type="text" placeholder="Hunter" />
            </div>
            <div className="field-container">
              {/* ErrorMessage should be before all other sibling elements to ensure CSS ~ selector applies */}
              <ErrorMessage component="span" className="form-error" name="dateOfBirth" />
              <label htmlFor="dateOfBirth">Date Of Birth*</label>
              <Field name="dateOfBirth" type="text" placeholder="Jenna Hunter" />
            </div>
            <div className="field-container">
              {/* ErrorMessage should be before all other sibling elements to ensure CSS ~ selector applies */}
              <ErrorMessage component="span" className="form-error" name="gender" />
              <label htmlFor="gender">How best do you identify</label>
              <Field name="gender" type="radio" value="Female" className="gender-female" />
              <Field name="gender" type="radio" value="Male" className="gender-male" />
              <Field name="gender" type="radio" value="Other" className="gender-other" />
              <Field name="gender" type="text" value="otherText" className="gender-other-text" />
            </div>
            <div className="field-container">
              {/* ErrorMessage should be before all other sibling elements to ensure CSS ~ selector applies */}
              <ErrorMessage component="span" className="form-error" name="education" />
              <label htmlFor="education">Education</label>
              <Field name="education" type="text" placeholder="Bachelor's" />
            </div>
            <div className="field-container">
              {/* ErrorMessage should be before all other sibling elements to ensure CSS ~ selector applies */}
              <ErrorMessage component="span" className="form-error" name="certifications" />
              <label htmlFor="certifications">Certifications</label>
              <Field name="certifications" type="text" placeholder="CIFC" />
            </div>
            <div className="field-container">
              {/* ErrorMessage should be before all other sibling elements to ensure CSS ~ selector applies */}
              <ErrorMessage component="span" className="form-error" name="languages" />
              <label htmlFor="languages">Languages</label>
              <Field name="languages" type="text" placeholder="" />
            </div>
            <div className="field-container">
              {/* ErrorMessage should be before all other sibling elements to ensure CSS ~ selector applies */}
              <ErrorMessage component="span" className="form-error" name="organizations" />
              <label htmlFor="organizations">Organizations</label>
              <Field name="organizations" type="text" placeholder="" />
            </div>
            <div className="field-container">
              {/* ErrorMessage should be before all other sibling elements to ensure CSS ~ selector applies */}
              <ErrorMessage component="span" className="form-error" name="skills" />
              <label htmlFor="skills">Skills</label>
              <Field name="skills" type="text" placeholder="" />
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
              <label htmlFor="Bio">Bio</label>
              <ErrorMessage
                component="span"
                className="form-error"
                name="Bio"
              />
              <Field name="Bio" component="textarea" />
            </div>

            <button type="submit" className="button-primary">
              Submit
              </button>
          </Form>
        );
      }}
    </Formik>

  )
}

export default AccountProfileForm;