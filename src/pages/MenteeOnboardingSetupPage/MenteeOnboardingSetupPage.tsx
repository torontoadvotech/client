import React, { useState } from 'react';
import { Redirect } from 'react-router';
import setInitialOnboardFlag from '../../components/DynamicFormBuilder/setInitialOnboardFlag';
import MenteeOnboardingForm from '../../components/InitialAccountSetup/MenteeOnboardingForm';
import MentorOnboardingForm from '../../components/InitialAccountSetup/MentorOnboardingForm';
import SetupProgressBar from '../../components/InitialAccountSetup/ProgressBar/SetupProgressBar';
import { User } from '../../containers/user.container';
import FormConfirmation from '../FormConfirmation/FormConfirmationPage';

import "./menteeOnboardingSetupPage.scss";

const MenteeOnboardingSetupPage = () => {
  const { user } = User.useContainer();
  const [currentProgressStep, setCurrentProgressStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  console.log(user);

  // if (!user) {
  //   return <Redirect to="/" />;
  // }

  if (formSubmitted) {
    const userToken = user!.token;
    setInitialOnboardFlag(userToken);
    return <FormConfirmation></FormConfirmation>
  }

  return (
    <main className="initial-account-setup-page">
      <h3>ACCOUNT</h3>
      <SetupProgressBar currentProgress={currentProgressStep} />
      <MenteeOnboardingForm currentProgress={currentProgressStep} setCurrentProgressStep={setCurrentProgressStep} setFormSubmitted={setFormSubmitted} />
      {/* {user!.role === "mentee"
        ?
        <MenteeOnboardingForm currentProgress={currentProgressStep} setCurrentProgressStep={setCurrentProgressStep} setFormSubmitted={setFormSubmitted} />
        :
        <MentorOnboardingForm currentProgress={currentProgressStep} setCurrentProgressStep={setCurrentProgressStep} setFormSubmitted={setFormSubmitted} />
      } */}
    </main>
  )
}

export default MenteeOnboardingSetupPage;