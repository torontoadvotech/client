import { createContainer } from 'unstated-next';
import { useState } from 'react';
import { RoleType } from '../lib/types';

// Container for Signup Role data. Allows user data to be set and returned from any component within the application. Eg. data is set when user is logged in but not used until they view their profile

export const Role = createContainer(() => {
  const [role, setRole] = useState<RoleType | null>(null);

  return {
    role,
    setRole
  };
});
