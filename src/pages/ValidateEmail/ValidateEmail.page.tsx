import React, { useEffect, useState } from 'react';
import API from '../../lib/API';

import './validateEmail.scss';

const ValidateEmail = ({ match }) => {
  // state
  const [isValidated, setIsValidated] = useState<boolean>(false);

  const checkEmailValidation = async () => {
    try {
      const res = await API.validateEmail(match.params.id);

      if (res.status === 'success') {
        setIsValidated(true);
      }
    } catch (err) {
      console.log('ERROR', err);
      setIsValidated(false);
    }
  };

  useEffect(() => {
    checkEmailValidation();
  }, []);

  return (
    <main className='validate-email-page'>
      <div>
        <h1>
          {isValidated
            ? 'Thank you for verifying your email.'
            : 'Something went wrong, please try again.'}
        </h1>
      </div>
    </main>
  );
};

export default ValidateEmail;
