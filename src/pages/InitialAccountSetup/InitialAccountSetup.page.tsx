import React from 'react';
import InitialAccountSetup from '../../components/InitialAccountSetup/InitialAccountSetup';
import SetupProgressBar from '../../components/InitialAccountSetup/SetupProgressBar';

const InitialAccountSetupPage = () => {
  return (
    <main className="initial-account-setup-page">
      <h1>Account <span className="text-color-primary">Setup</span></h1>
      <SetupProgressBar currentProgress={1} />
      <InitialAccountSetup currentProgress={1} />
    </main>
  )
}

export default InitialAccountSetupPage;