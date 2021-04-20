// Types for user model
export interface UserType {
  _id: string;
  name: string;
  email: string;
  photo: string;
  bio: string;
  pronouns: string;
  location: {
    type: string;
    coordinates: [number];
    description: string;
  };
  role: 'mentor' | 'mentee';
  password: string;
  passwordConfirm: string;
  token: string;
}

export interface UserProfileForm {
  _id: string;
  name: string;
  email: string;
  photo: string;
  bio: string;
  pronouns: string;
  location: string;
  role: 'mentor' | 'mentee';
  password: string;
  passwordConfirm: string;
  // Updated below, make sure to updated above
  firstName: string;
  lastName: string;
  date: string;
  gender: string;
  education: string;
  certifications: string;
  languages: string;
  organizations: string;
  skills: string;
}

// Types for session model
export interface Session {
  _id: string;
  date: Date;
  mentee: UserType;
  mentor: UserType;
  requestedAt: Date;
  confirmed: boolean;
  rejected: boolean;
  cancelled: boolean;
  confirmedAt: Date;
}

export interface EventsFormTypes {
  name: string;
  email: string;
  phoneNumber: string;
  request: string;
}

export interface SetupProgressBarProps {
  currentProgress: number;
}

type FirstNameTypes = "date" | "email" | "genderMultiSelect" | "textbox" | "profileImage" | "radioGroup" | "dropdown" | "multipleCheckbox";
export interface FormControl {
  type: FirstNameTypes,
  // Fieldname must match Yup validator field name
  fieldName: string;
  label: string,
  required: boolean,
  // Placeholder only utilized for type of standardTextBox
  placeholder?: string,
  optionsArray?: string[],
  // DependentOnField dictates field that has to be chosen to enable field
  dependentOnField?: string
}