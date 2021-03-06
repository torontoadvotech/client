import React, { FunctionComponent, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import API from '../../lib/API';
// styles
import './validateEmail.scss';

interface RouterProps {
  id: string;
}

interface ValidateEmailProps extends RouteComponentProps<RouterProps> {}

const ValidateEmail: FunctionComponent<ValidateEmailProps> = ({ match }) => {
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
      <h1>
        {isValidated
          ? 'Thank you for verifying your email.'
          : 'Something went wrong, please try again.'}
      </h1>
    </main>
  );
};

export default ValidateEmail;
