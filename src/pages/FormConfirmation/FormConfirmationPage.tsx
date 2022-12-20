import "./formConfirmationPage.scss";
import React from 'react';
import { Link } from 'react-router-dom';


interface Props {
  role: "mentor" | "mentee";
}

const FormConfirmation = ({ role }: Props) => {
  return (
    <main className="form-confirmation-page">
      <div className="confirmation-container">
        <h3 className="text-color-primary">Thank You</h3>
        <h3>Your application has been submitted</h3>
        <p>We will get back to you in 3 days</p>
        {role=== 'mentee'?  <Link
          to={{ pathname: '/login', state: { role: 'mentee' } }}
          className={'button button-secondary'}
        >
          Log In To View Application Status
        </Link> :  <Link
          to={{ pathname: '/login', state: { role: 'mentor' } }}
          className={'button button-secondary'}
        >
          Log In To View Application Status
        </Link> }
       
      </div>
    </main>
  )
}

export default FormConfirmation;

{/* <a href="/">Log In To View Application Status</a> */}