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
  role: "mentor" | "mentee";
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
  role: "mentor" | "mentee";
  password: string;
  passwordConfirm: string;
}

export interface UserAuth {
  name?: string;
  email: string;
  password: string;
  passwordConfirm?: string;
}

// Types for session model
export interface Session {
  date: Date;
  mentee: UserType;
  mentor: UserType;
  requestedAt: Date;
  confirmed: boolean;
  rejected: boolean;
  confirmedAt: Date;
}
