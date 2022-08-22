import "./formConfirmationPage.scss";
import React from 'react';

const FormConfirmation = () => {
  return (
    <main className="form-confirmation-page">
      <div className="confirmation-container">
        <h1 className="text-color-primary">Thank You!</h1>
        <h2>Your application has been submitted</h2>
        <p>We will get back to you in 3 days</p>

        <a href="/">Check out our Slack Channel</a>
      </div>
    </main>
  )
}

export default FormConfirmation;