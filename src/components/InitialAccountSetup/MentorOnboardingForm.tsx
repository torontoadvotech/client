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
    profileImage: "",
    date: "",
    firstName: "",
    lastName: "",
    organizations: "",
    education: "",
    certifications: "",
    languages: "",
    gender: "",
    // menteePreferences: "",
    hardSkills: "",
    softSkills: "",
    mentoringMethod: "",
    aboutYourself: "",
    resume: ""
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
  })

  const validationSchemaForm = Yup.object({
    gender: Yup.string(),
    // menteePreferences: Yup.string(),
    hardSkills: Yup.string(),
    softSkills: Yup.string(),
    mentoringMethod: Yup.string(),
    aboutYourself: Yup.string(),
    resume: Yup.mixed(),
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
    console.log(JSON.stringify(values));
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