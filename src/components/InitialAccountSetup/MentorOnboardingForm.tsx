import "./menteeOnboardingForm.scss";

import React, { useEffect, useState } from 'react';
import * as Yup from "yup";
import { Form, Formik, FormikHelpers } from 'formik';

import DynamicFormBuilder from "../DynamicFormBuilder/DynamicFormBuilder";
import { User } from '../../containers/user.container';
import { SetupProgressFormsProps } from '../../lib/types';
// import { firstPageFormControlList, personalDetailsFormControlList, lastPageformControlList } from '../../lib/dynamic-form-info/mentee-onboarding-signup-form';
import {  firstPageFormControlList, mentorFirstFormControlList, mentorLastPageformControlList } from '../../lib/dynamic-form-info/mentee-onboarding-signup-form';

const MentorOnboardingForm: React.FunctionComponent<SetupProgressFormsProps> = (props) => {

  const { user } = User.useContainer();
  const [formHasError, setFormHasError] = useState(false);

  const currentProgressStep = props.currentProgress;
  const setCurrentProgressStep = props.setCurrentProgressStep;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentProgressStep])

  const initialValues = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: "",
    date: "",
    firstName: "",
    lastName: "",
    organizations: "",
    education: "",
    certifications: "",
    languages: "",
    gender: "",
    hardSkills: "",
    softSkills: "",
    mentoringMethod: "",
    aboutYourself: "",
    resume: "",
    linkedinProfile: "",
  };

  // Validate user inputs before submission (will also be validated by the server)
  const validationSchemaPersonalDetails = Yup.object({
    profileImage: Yup.mixed(),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    date: Yup.string()
      .matches(/^([0-2][0-9]|(3)[0-1])(\-)(((0)[0-9])|((1)[0-2]))(\-)\d{4}$/, 'Must be a valid date')
      .required("Required"),
    organizations: Yup.string().required("Required"),
    education: Yup.string().required("Required"),
    certifications: Yup.string(),
    languages: Yup.string(),
  });

  // const validationSchemaFirstPage = Yup.object({
  //   fullName: Yup.string().required("Required"),
  //   email: Yup.string().required("Required"),
  //   password: Yup.string().required("Required"),
  //   confirmPassword: Yup.string().required("Required"),
  // });

  const validationSchemaFirstPage = Yup.object({
    userName: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string().required("Required"),
  })

  const validationSchemaForm = Yup.object({
    gender: Yup.string(),
    hardSkills: Yup.string(),
    softSkills: Yup.string(),
    mentoringMethod: Yup.string(),
    aboutYourself: Yup.string(),
    resume: Yup.mixed(),
    linkedinProfile: Yup.string(),
  });


  const isLastStep = () => {
    return currentProgressStep === 3;
  }

  const isFirstStep = () => {
    return currentProgressStep === 1;
  }

  const setAllFieldsUntouched = (formikProps: FormikHelpers<any>) => {
    const currentFormControlList = isLastStep() ? mentorLastPageformControlList : mentorFirstFormControlList;

    for (const field in currentFormControlList) {
      formikProps.setTouched({ [field["fieldName"]]: false });
    }
  }

  const submitForm = (values) => {
    props.setFormSubmitted(true);
  }

  let validationSchema;

  if (isFirstStep()){
    validationSchema = validationSchemaFirstPage;
  } else if (isLastStep()) {
    validationSchema = validationSchemaForm;
  } else {
    validationSchema = validationSchemaPersonalDetails;
  }

  return (
    <section className="onboarding-setup">
      {/* <h2>This helps us better match you with mentors</h2> */}
      {
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}

          onSubmit={(values, formikProps) => {
            setFormHasError(false);

            // This is reset form touch after validation touches all fields
            setAllFieldsUntouched(formikProps);
            if (isLastStep()) {
              submitForm(values)
            } else {
              setCurrentProgressStep(currentProgressStep + 1);
            }
          }}
        >
          {(formikProps) => {
            // const currentFormControlList = isLastStep() ? mentorLastPageformControlList : mentorFirstFormControlList;
            let currentFormControlList;

            if (isFirstStep()){
              currentFormControlList = firstPageFormControlList;
            } else if (isLastStep()) {
               currentFormControlList = mentorLastPageformControlList;
            } else {
              currentFormControlList = mentorFirstFormControlList;
            }
            return (
              <Form>
                <div id="menteeForm" className={(isLastStep() || isFirstStep()) ? "wider-field" : ""}>
                  {isFirstStep()&&
                  <div className="third-party-signup">
                      <div className="button-row">
                        <button className="button-primary" type="button">Log in with LinkedIn</button>
                        <button className="button-primary" type="button" aria-label="Login with Facebook"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" className="svg-inline--fa fa-facebook-f fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></button>
                        <button className="button-primary" type="button" aria-label="Login with Google"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" className="svg-inline--fa fa-google fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg></button>
                      </div>
                      <div className="separator"><p>or</p></div>
                  </div>}
                  <DynamicFormBuilder
                    user={user}
                    formControlList={currentFormControlList}
                    formikProps={formikProps}
                  />
                </div>

                {formHasError &&
                  <div className="general-form-error">Form has error(s)</div>
                }
                <div className="button-container flex-j-space-between">
                  {isLastStep()
                    ? <button type="button" className="button previous-button" onClick={() => setCurrentProgressStep(currentProgressStep - 1)}>Back</button>
                    : <a type="button" className="button previous-button" href="/">Back</a>
                  }
                  <button type="submit" className="button-primary submit-button"
                    onClick={() => {
                      const hasError = Object.entries(formikProps.errors).length !== 0;
                      return hasError && setFormHasError(true);
                    }}
                  >
                    {isLastStep() ? "Submit" : "Next"}
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>}
    </section >
  )
}

export default MentorOnboardingForm;