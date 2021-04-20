import React from 'react';
import InitialAccountSetup from '../../components/InitialAccountSetup/InitialAccountSetup';
import SetupProgressBar from '../../components/InitialAccountSetup/ProgressBar/SetupProgressBar';

import "./initialAccountSetup-page.scss";

const InitialAccountSetupPage = () => {
  return (
    <main className="initial-account-setup-page">
      <h1><span className="text-color-primary">Personal</span> Details</h1>
      <SetupProgressBar currentProgress={1} />
      <InitialAccountSetup currentProgress={1} />
    </main>
  )
}

export default InitialAccountSetupPage;