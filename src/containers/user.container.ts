import { createContainer } from 'unstated-next';
import { useState } from 'react';
import { UserType } from '../lib/types';

// Container for User data. Allows user data to be set and returned from any component within the application. Eg. data is set when user is logged in but not used until they view their profile

export const User = createContainer(() => {
  const [user, setUser] = useState<UserType | null>(null);

  return {
    user,
    setUser
  };
});
