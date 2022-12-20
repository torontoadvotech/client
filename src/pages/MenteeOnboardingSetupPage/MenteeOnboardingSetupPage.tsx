import React, { ReactElement, useState } from "react";
import { Redirect } from 'react-router';
import setInitialOnboardFlag from '../../components/DynamicFormBuilder/setInitialOnboardFlag';
import MenteeOnboardingForm from '../../components/InitialAccountSetup/MenteeOnboardingForm';
import MentorOnboardingForm from '../../components/InitialAccountSetup/MentorOnboardingForm';
import SetupProgressBar from '../../components/InitialAccountSetup/ProgressBar/SetupProgressBar';
import { User } from '../../containers/user.container';
// import { Role } from '../../containers/role.container';
import FormConfirmation from '../FormConfirmation/FormConfirmationPage';

import "./menteeOnboardingSetupPage.scss";

const MenteeProgressBarObject = [
  {
    progressNumber: 1,
    progressName: 'Account',
    progressDescription: 'Submit an account request form to get started with us.',
  },
  {
    progressNumber: 2,
    progressName: 'Profile',
    progressDescription: 'Keep going! This helps us better match you with mentors.',
  },
  {
    progressNumber: 3,
    progressName: 'More',
    progressDescription: 'Almost there! This helps us better match you with mentors.',
  }
]

interface Props {
  goBack: () => void;
  role: "mentor" | "mentee";
}

function MenteeOnboardingSetupPage({ goBack, role }: Props): ReactElement {
  const { user } = User.useContainer();
  // const { role } = Role.useContainer();
  const [currentProgressStep, setCurrentProgressStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // if (!user) {
  //   return <Redirect to="/" />;
  // }

  if (formSubmitted) {
    console.log(user);
    // const userToken = user!.token;
    // setInitialOnboardFlag(userToken);
    return <FormConfirmation role={role}></FormConfirmation>
  }

  return (
    <main className="initial-account-setup-page">
      {/* <h3>ACCOUNT</h3> */}
        <h3>{MenteeProgressBarObject[currentProgressStep-1].progressName.toUpperCase()}</h3>
      <SetupProgressBar currentProgress={currentProgressStep-1} />
      {/* <MenteeOnboardingForm currentProgress={currentProgressStep} setCurrentProgressStep={setCurrentProgressStep} setFormSubmitted={setFormSubmitted} /> */}
      {/* {user!.role === "mentee"
        ?
        <MenteeOnboardingForm currentProgress={currentProgressStep} setCurrentProgressStep={setCurrentProgressStep} setFormSubmitted={setFormSubmitted} />
        :
        <MentorOnboardingForm currentProgress={currentProgressStep} setCurrentProgressStep={setCurrentProgressStep} setFormSubmitted={setFormSubmitted} />
      } */}
        {role === "mentee"
        ?
        <MenteeOnboardingForm currentProgress={currentProgressStep} setCurrentProgressStep={setCurrentProgressStep} setFormSubmitted={setFormSubmitted} />
        :
        <MentorOnboardingForm currentProgress={currentProgressStep} setCurrentProgressStep={setCurrentProgressStep} setFormSubmitted={setFormSubmitted} />
      }
    </main>
  )
}

export default MenteeOnboardingSetupPage;