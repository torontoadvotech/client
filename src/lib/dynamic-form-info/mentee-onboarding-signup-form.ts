import { FormControl } from '../types';

export const personalDetailsFormControlList: FormControl[] = [
  {
    type: "profileImage",
    fieldName: "profileImage",
    label: "",
    placeholder: "",
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
    label: "How Do You Best Identify?",
    required: false,
  },
  {
    type: "textbox",
    label: "Place of Work",
    fieldName: "organizations",
    required: false,
    placeholder: "Google Inc."
  },
  {
    type: "textbox",
    label: "Education*",
    fieldName: "education",
    required: true,
    placeholder: "Software Engineering, Industrial Design, etc."
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
    label: "Skills",
    fieldName: "skills",
    required: false,
    placeholder: "JavaScript, Python, etc."
  },
  {
    type: "textbox",
    label: "Languages",
    fieldName: "languages",
    required: false,
    placeholder: "English"
  },
]

export const firstPageFormControlList: FormControl[] = [
  // {
  //   type: "textbox",
  //   fieldName: "fullName",
  //   label: "Full Name",
  //   placeholder: '',
  //   required: true
  // },
  {
    type: "textbox",
    fieldName: "userName",
    label: "Username",
    placeholder: 'Jenna.to',
    required: true
  },
  {
    type: "textbox",
    fieldName: "email",
    label: "Enter Email",
    placeholder: "Jenna.hunter@gmail.com",
    required: true,
  },
  {
    type: "textbox",
    fieldName: "password",
    label: "Create Password",
    placeholder: "**********",
    required: true,
  },
  // {
  //   type: "textbox",
  //   fieldName: "confirmPassword",
  //   label: "Confirm Password",
  //   required: true,
  // },
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
    type: "dropdown",
    fieldName: "educationLevel",
    label: "Highest Level of Education Completed*",
    required: true,
    optionsArray: ["High School Diploma", "Bachelor's", "Master's", "PhD"]
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
    fieldName: "softSkills",
    label: "What soft skills do you want to learn?",
    required: false,
    placeholder: "Teamwork, Communication, Conflict Resolution, etc.",
  },
  {
    type: "textbox",
    fieldName: "hardSkills",
    label: "What hard skills do you want to learn?",
    required: false,
    placeholder: "AWS, Python, Sketch, Figma, etc.",
  },
  {
    type: "textarea",
    fieldName: "passions",
    label: "What are you passionate about?",
    required: false,
  },
  {
    type: "textarea",
    fieldName: "mentorshipLearnings",
    label: "What do you hope to get out of this mentorship?",
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
    label: "Place of Work*",
    fieldName: "organizations",
    required: true,
    placeholder: "Google Inc."
  },
  {
    type: "textbox",
    label: "Education*",
    fieldName: "education",
    required: true,
    placeholder: "Software Engineering, Industrial Design, etc."
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
];

export const mentorLastPageformControlList: FormControl[] = [
  {
    type: "genderMultiSelect",
    fieldName: "gender",
    label: "How Do You Best Identify?",
    required: false,
  },
  {
    type: "textbox",
    fieldName: "hardSkills",
    label: "What are the hard skills you can teach?",
    required: false,
    placeholder: "AWS, Python, Sketch, Figma, etc."
  },
  {
    type: "textbox",
    fieldName: "softSkills",
    label: "What are the soft skills you can teach?",
    required: false,
    placeholder: "Teamwork, Communication, Conflict Resolution, etc."
  },
  // {
  //   type: "dropdown",
  //   fieldName: "menteePreferences",
  //   label: "Do you have any preferences who to mentor?",
  //   required: false,
  //   optionsArray: ['Preference 1', 'Preference 2']
  // },
  {
    type: "textbox",
    fieldName: "mentoringMethod",
    label: "What is your preferred mentoring style?",
    required: false,
    placeholder: ""
  },
  {
    type: "textarea",
    fieldName: "aboutYourself",
    label: "Tell our mentees about yourself",
    required: false,
    placeholder: ""
  },
  {
    type: "resume",
    fieldName: "resume",
    label: "Attach Your Resume:",
    required: false,
  },
];