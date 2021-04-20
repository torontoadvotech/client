import React, { useState } from 'react';

import * as Yup from "yup";
import DynamicFormBuilder from "../DynamicFormBuilder/DynamicFormBuilder";
import { User } from '../../containers/user.container';
import { SetupProgressBarProps, FormControl } from '../../lib/types';
import "./initialAccountSetup.scss";

const InitialAccountSetup: React.FunctionComponent<SetupProgressBarProps> = (props) => {

  const { user, setUser } = User.useContainer();
  const [currentForm, setCurrentForm] = useState(1);

  let formData = {}

  const initialValuesPersonalDetails = {
    profileImage: "",
    firstName: "",
    lastName: "",
    date: "",
    gender: "",
    education: "",
    certifications: "",
    languages: "",
    organizations: "",
    skills: ""
  };
  
  const initialValuesForm = {
    portofolio: "",
    educationLevel: "",
    mentorMatch: "",
    meetInPerson: "",
    fieldOfInterest: "",
    discipline: "",
    position: "",
    softSkills: "",
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
    portofolio: Yup.string().required("Required"),
    educationLevel: Yup.string().required("Required"),
    mentorMatch: Yup.string(),
    meetInPerson: Yup.string(),
    fieldOfInterest: Yup.string().required("Required"),
    discipline: Yup.string(),
    position: Yup.string(),
    softSkills: Yup.string(),
    hardSkills: Yup.string(),
    passions: Yup.string(),
    mentorshipLearnings: Yup.string(),
  });


  const intermediateSubmit = (values) => {
    // values.preventDefault()
    console.log('submitted', values);
    formData = {...values};
    setCurrentForm(2);
  }

  const onSubmit = (values) => {
    // values.preventDefault()
    console.log('submitted', values);

  }

  const InitialAccountFormListPersonalDetails: FormControl[] = [
    {
      type: "profileImage",
      fieldName: "profileImage",
      label: "",
      placeholder: '',
      required: false
    },
    {
      type: "textbox",
      fieldName: "firstName",
      label: "First Name*",
      placeholder: 'Jenna',
      required: true
    },
    {
      type: "textbox",
      fieldName: "lastName",
      label: "Last Name*",
      placeholder: 'Hunter',
      required: true
    },
    {
      type: "date",
      fieldName: "date",
      label: "Date of Birth*",
      required: true,
    },
    {
      type: "genderMultiSelect",
      fieldName: "genderMultiSelect",
      label: "How Best Do You Identify*",
      required: false,
    },
    {
      type: "textbox",
      label: "Education course*",
      fieldName: "education",
      required: true,
      placeholder: "Bachelor's"
    },
    {
      type: "textbox",
      label: "Certifications",
      fieldName: "certifications",
      required: false,
      placeholder: "CIFC"
    },
    {
      type: "textbox",
      label: "Languages",
      fieldName: "languages",
      required: false,
      placeholder: "English"
    },
    {
      type: "textbox",
      label: "Organizations",
      fieldName: "organizations",
      required: false,
      placeholder: ""
    },
    {
      type: "textbox",
      label: "Skills",
      fieldName: "skills",
      required: false,
      placeholder: ""
    }
  ]
  
  const InitialAccountFormListForm: FormControl[] = [
    {
      type: "textbox",
      fieldName: "portofolio",
      label: "Portfolio/Resume*",
      placeholder: 'Jen.portfolio.com',
      required: true
    },
    {
      type: "textbox",
      fieldName: "educationLevel",
      label: "Highest Level of Educations Completed*",
      placeholder: 'Bachelors in Finance',
      required: true
    },
    {
      type: "radioGroup",
      fieldName: "mentorMatch",
      label: "Would you prefer to be matched with a mentor with same gender identity?",
      required: false,
      optionsArray: ['Yes', 'No', 'Not sure']
    },
    {
      type: "radioGroup",
      fieldName: "meetInPerson",
      label: "Is it important to meet in person?",
      required: false,
      optionsArray: ['Yes', 'No']
    },
    {
      type: "dropdown",
      fieldName: "fieldOfInterest",
      label: "What is your field of interest?*",
      required: true,
      optionsArray: ['Science', 'Technology', 'Engineering', 'Mathematics']
    },
    {
      type: "dropdown",
      fieldName: "discipline",
      label: "What is your discipline?",
      required: false,
      optionsArray: ['Business Analysis', 'Project Management', 'Web and App Development', 'Design'],
      dependentOnField: "fieldOfInterest"
    },
    {
      type: "dropdown",
      fieldName: "position",
      label: "What is your desired position?",
      required: false,
      optionsArray: ['Senior UX Designer', 'Junior UI Designer', 'Senior Product Designer', 'Assisting Designer'],
      dependentOnField: "discipline"
    },
    {
      type: "multipleCheckbox",
      fieldName: "softSkills",
      label: "What soft skills do you want to learn?",
      required: false,
      optionsArray: ['Communications', 'Teamwork', 'Research', 'Conflict Resolution', "Other"],
    },
    {
      type: "textbox",
      fieldName: "hardSkills",
      label: "What hard skills do you want to learn?",
      required: false,
    },
    {
      type: "textbox",
      fieldName: "passions",
      label: "What are you passionate about?",
      required: false,
    },
    {
      type: "textbox",
      fieldName: "mentorshipLearnings",
      label: "What do you hope to get out of this mentorship?*",
      required: true,
    },
    
  ]

  return (
    <section className="initial-account-setup-section">
      <h2>This helps us better match you with mentors</h2>
      {currentForm === 1 
      ? 
      <div id="detailForm2">
      <DynamicFormBuilder
        initialValues={initialValuesForm}
        onSubmit={onSubmit}
        user={user}
        formControlList={InitialAccountFormListForm}
        validationSchema={validationSchemaForm}
        buttons= {
          {submitText: 'finish' }
        }
        />
    </div>

        // <div id="detailForm1">
        //   <DynamicFormBuilder
        //     initialValues={initialValuesPersonalDetails}
        //     onSubmit={intermediateSubmit}
        //     user={user}
        //     formControlList={InitialAccountFormListPersonalDetails}
        //     validationSchema={validationSchemaPersonalDetails}
        //     buttons= {
        //       {prev: {text: 'back', url: '/'}, submitText: 'next' }
        //     }
        //   />
        // </div>
      : 
        <div id="detailForm2">
          <DynamicFormBuilder
            initialValues={initialValuesForm}
            onSubmit={onSubmit}
            user={user}
            formControlList={InitialAccountFormListForm}
            validationSchema={validationSchemaForm}
            buttons= {
              {submitText: 'finish' }
            }
            />
        </div>
      }
    </section >
  )
}

export default InitialAccountSetup;