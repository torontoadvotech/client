import { FormControl } from '../types';

export const personalDetailsFormControlList: FormControl[] = [
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
    fieldName: "gender",
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

export const lastPageformControlList: FormControl[] = [
  {
    type: "textbox",
    fieldName: "portfolio",
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
    type: "textbox",
    fieldName: "hardSkills",
    label: "What hard skills do you want to learn?",
    required: false,
  },
  {
    type: "textarea",
    fieldName: "passions",
    label: "What are you passionate about?*",
    required: true,
  },
  {
    type: "textarea",
    fieldName: "mentorshipLearnings",
    label: "What do you hope to get out of this mentorship?*",
    required: false,
  },
];

export const mentorFirstFormControlList: FormControl[] = [
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
  }
];

export const mentorLastPageformControlList: FormControl[] = [
  {
    type: "genderMultiSelect",
    fieldName: "gender",
    label: "How Best Do You Identify*",
    required: false,
  },
  {
    type: "dropdown",
    fieldName: "menteePreferences",
    label: "Do you have any preferences who to mentor?",
    required: false,
    optionsArray: ['Preference 1', 'Preference 2']
  },
  {
    type: "dropdown",
    fieldName: "mentoringMethod",
    label: "What is your preferred mentoring method?",
    required: false,
    optionsArray: ['Method 1', 'Method 2'],
  },
  {
    type: "textbox",
    fieldName: "aboutYourself",
    label: "Tell our mentees about yourself?",
    required: false,
  },

];