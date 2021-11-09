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

  if (!user) {
    return <Redirect to="/" />;
  }

  if (formSubmitted) {
    const userToken = user!.token;
    setInitialOnboardFlag(userToken);
    return <FormConfirmation></FormConfirmation>
  }

  return (
    <main className="initial-account-setup-page">
      <h1><span className="text-color-primary">Personal</span> Details</h1>
      <SetupProgressBar currentProgress={currentProgressStep} />
      {user!.role === "mentee"
        ?
        <MenteeOnboardingForm currentProgress={currentProgressStep} setCurrentProgressStep={setCurrentProgressStep} setFormSubmitted={setFormSubmitted} />
        :
        <MentorOnboardingForm currentProgress={currentProgressStep} setCurrentProgressStep={setCurrentProgressStep} setFormSubmitted={setFormSubmitted} />
      }
    </main>
  )
}

export default MenteeOnboardingSetupPage;