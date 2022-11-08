import "./formConfirmationPage.scss";
import React from 'react';

const FormConfirmation = () => {
  return (
    <main className="form-confirmation-page">
      <div className="confirmation-container">
        <h3 className="text-color-primary">Thank You</h3>
        <h3>Your application has been submitted</h3>
        <p>We will get back to you in 3 days</p>

        <a href="/">Go To Profile &gt;</a>
      </div>
    </main>
  )
}

export default FormConfirmation;