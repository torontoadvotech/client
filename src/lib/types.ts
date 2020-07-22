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
  token: string;
}

// Types for user authorization requests
export interface UserAuth {
  fullName?: string;
  email: string;
  password: string;
  passwordConfirm?: string;
  role?: 'mentor' | 'mentee';
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
