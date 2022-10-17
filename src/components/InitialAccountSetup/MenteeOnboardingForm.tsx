import "./menteeOnboardingForm.scss";

import React, { useEffect, useState } from 'react';
import * as Yup from "yup";
import { Form, Formik, FormikHelpers } from 'formik';

import DynamicFormBuilder from "../DynamicFormBuilder/DynamicFormBuilder";
import { User } from '../../containers/user.container';
import { SetupProgressFormsProps } from '../../lib/types';
import { firstPageFormControlList, personalDetailsFormControlList, lastPageformControlList } from '../../lib/dynamic-form-info/mentee-onboarding-signup-form';

import SignUpForm from "../../pages/Signup/SignupForm";

const MenteeOnboardingForm: React.FunctionComponent<SetupProgressFormsProps> = (props) => {

  const { user } = User.useContainer();
  const [formHasError, setFormHasError] = useState(false);

  const currentProgressStep = props.currentProgress;
  const setCurrentProgressStep = props.setCurrentProgressStep;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentProgressStep])

  const initialValues = {
    profileImage: "",
    firstName: "",
    lastName: "",
    date: "",
    gender: "",
    education: "",
    certifications: "",
    languages: "",
    organizations: "",
    skills: "",
    portfolio: "",
    educationLevel: "",
    mentorMatch: "",
    meetInPerson: "",
    fieldOfInterest: "",
    discipline: "",
    position: "",
    hardSkills: "",
    passions: "",
    mentorshipLearnings: ""
  };


  // Validate user inputs before submission (will also be validated by the server)
  const validationSchemaPersonalDetails = Yup.object({
    profileImage: Yup.mixed(),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    date: Yup.string()
      .matches(/^([0-2][0-9]|(3)[0-1])(\-)(((0)[0-9])|((1)[0-2]))(\-)\d{4}$/, 'Must be a valid date')
      .required("Required"),
    gender: Yup.string(),
    education: Yup.string().required("Required"),
    certifications: Yup.string(),
    languages: Yup.string(),
    organizations: Yup.string(),
    skills: Yup.string(),
  });

  const validationSchemaForm = Yup.object({
    portfolio: Yup.string().required("Required"),
    educationLevel: Yup.string().required("Required"),
    mentorMatch: Yup.string(),
    meetInPerson: Yup.string(),
    fieldOfInterest: Yup.string().required("Required"),
    discipline: Yup.string(),
    position: Yup.string(),
    hardSkills: Yup.string(),
    passions: Yup.string(),
    mentorshipLearnings: Yup.string(),
  });

  const isLastStep = () => {
    return currentProgressStep === 2;
  }

  const isFirstStep = () => {
    return currentProgressStep === 0;
  }

  console.log(currentProgressStep, "progress curr");

  const setAllFieldsUntouched = (formikProps: FormikHelpers<any>) => {
    let currentFormControlList;

    if (isFirstStep()){
      currentFormControlList = firstPageFormControlList;
    } else if (isLastStep()) {
       currentFormControlList = lastPageformControlList;
    } else {
      currentFormControlList = personalDetailsFormControlList;
    }
    // const currentFormControlList = isLastStep() ? lastPageformControlList : personalDetailsFormControlList;
    console.log(currentFormControlList, "currentFormControlList");
    for (const field in currentFormControlList) {
      formikProps.setTouched({ [field["fieldName"]]: false });
    }
  }

  const submitForm = (values) => {
    console.log(JSON.stringify(values));
    props.setFormSubmitted(true);
  }
  console.log(currentProgressStep, "currentProgressStep");


  return (
    <section className="onboarding-setup">
      {/* <h2>This helps us better match you with mentors</h2> */}
      {
        <Formik
          initialValues={initialValues}
          validationSchema={!isLastStep() ? validationSchemaPersonalDetails : validationSchemaForm}

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
            let currentFormControlList;
            console.log(isFirstStep(), "is first");

            if (isFirstStep()){
              currentFormControlList = firstPageFormControlList;
            } else if (isLastStep()) {
               currentFormControlList = lastPageformControlList;
            } else {
              currentFormControlList = personalDetailsFormControlList;
            }
            // const currentFormControlList = isLastStep() ? lastPageformControlList : personalDetailsFormControlList;
            console.log(formikProps, "formikProps");
            console.log(currentFormControlList, "currentFormControlList");
            
            return (
              <Form>

                <div id="menteeForm" className={(isLastStep() ? "wider-field" : "")}>
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
                      console.log("click");
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

export default MenteeOnboardingForm;